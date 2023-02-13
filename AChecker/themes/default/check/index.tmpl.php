<?php
/************************************************************************/
/* AChecker                                                             */
/************************************************************************/
/* Copyright (c) 2008 - 2018                                            */
/* Inclusive Design Institute                                           */
/*                                                                      */
/* This program is free software. You can redistribute it and/or        */
/* modify it under the terms of the GNU General Public License          */
/* as published by the Free Software Foundation.                        */
/************************************************************************/
// $Id$

include(AC_INCLUDE_PATH.'header.inc.php');

if (isset($javascript_run_now)) echo $javascript_run_now;
?>

<div class="center-input-form">
	<form name="filter_form" method="get" action="<?php echo $_SERVER['PHP_SELF']; ?>" >
	<fieldset class="group_form"><legend class="group_form"><?php echo _AC("filter"); ?></legend>
<?php if (isset($_GET['list'])){?>
	<input type="hidden" name="list" value="<?php echo $_GET['list']; ?>" />
<?php }?>
<?php if (isset($_GET['cid'])){ // perserve the check ID that the prerequisite / next checks are added in ?>
	<input type="hidden" name="cid" value="<?php echo $_GET['cid']; ?>" />
<?php }?>
<?php if (isset($_GET['gid'])){ // perserve the check ID that the prerequisite / next checks are added in ?>
	<input type="hidden" name="gid" value="<?php echo $_GET['gid']; ?>" />
<?php }?>
<?php if (isset($_GET['ggid'])){ // perserve the check ID that the prerequisite / next checks are added in ?>
	<input type="hidden" name="ggid" value="<?php echo $_GET['ggid']; ?>" />
<?php }?>
<?php if (isset($_GET['gsgid'])){ // perserve the check ID that the prerequisite / next checks are added in ?>
	<input type="hidden" name="gsgid" value="<?php echo $_GET['gsgid']; ?>" />
<?php }?>
		<table class="filter">
		<tr>
			<td colspan="2"><h2><?php echo _AC('results_found', $num_results); ?></h2></td>
		</tr>

		<?php if (is_array($all_html_tags)) { ?>
		<tr>
			<th><label for="html_tag"><?php echo _AC('html_tag'); ?></label>:</th>
			<td>
			<select name="html_tag" id="html_tag">
				<option value="-1">- <?php echo _AC('all'); ?> -</option>
				<?php foreach ($all_html_tags as $html_tag) {?>
				<option value="<?php echo $html_tag['html_tag']; ?>" <?php if($_GET['html_tag']==$html_tag['html_tag']) { echo 'selected="selected"';}?>><?php echo $html_tag['html_tag']; ?></option>
				<?php } ?>
			</select>
			</td>
		</tr>
		<?php } ?>

		<tr>
			<th><?php echo _AC('error_type'); ?>:</th>
			<td>
			<input type="radio" name="confidence" value="-1" id="c3" <?php if ($_GET['confidence'] == -1 || !isset($_GET['confidence']) || $_GET['confidence'] == '') { echo 'checked="checked"'; } ?> /><label for="c3"><?php echo _AC('all'); ?></label> 
			<input type="radio" name="confidence" value="<?php echo KNOWN; ?>" id="c0" <?php if (isset($_GET['confidence']) && $_GET['confidence'] == KNOWN) { echo 'checked="checked"'; } ?> /><label for="c0"><?php echo _AC('known_problems'); ?></label> 
			<input type="radio" name="confidence" value="<?php echo LIKELY; ?>" id="c1" <?php if (isset($_GET['confidence']) && $_GET['confidence'] == LIKELY) { echo 'checked="checked"'; } ?> /><label for="c1"><?php echo _AC('likely_problems'); ?></label> 
			<input type="radio" name="confidence" value="<?php echo POTENTIAL; ?>" id="c2" <?php if (isset($_GET['confidence']) && $_GET['confidence'] == POTENTIAL) { echo 'checked="checked"'; } ?> /><label for="c2"><?php echo _AC('potential_problems'); ?></label> 
			</td>
		</tr>

		<?php if (!isset($_GET['list'])){ 
			// when this page is to list available checks to insert into check_prerequsites and pass_next,
			// open_to_public needs to be always 1, so don't show this option
		?>
		<tr>
			<th><?php echo _AC('open_to_public'); ?>:</th>
			<td>
			<input type="radio" name="open_to_public" value="-1" id="s2" <?php if ($_GET['open_to_public'] == -1 || !isset($_GET['open_to_public']) || $_GET['open_to_public']=='') { echo 'checked="checked"'; } ?> /><label for="s2"><?php echo _AC('all'); ?></label> 
			<input type="radio" name="open_to_public" value="1" id="s1" <?php if (isset($_GET['open_to_public']) && $_GET['open_to_public'] == 1) { echo 'checked="checked"'; } ?> /><label for="s1"><?php echo _AC('yes'); ?></label> 
			<input type="radio" name="open_to_public" value="0" id="s0" <?php if (isset($_GET['open_to_public']) && $_GET['open_to_public'] == 0) { echo 'checked="checked"'; } ?> /><label for="s0"><?php echo _AC('no'); ?></label> 
			</td>
		</tr>
		<?php }?>

		<tr>
			<td colspan="2"><p class="submit_button">
			<input type="submit" name="filter" value="<?php echo _AC('filter'); ?>" />
			<input type="submit" name="reset_filter" value="<?php echo _AC('reset_filter'); ?>" />
			</p></td>
		</tr>
		</table>
	</fieldset>
</form>
</div>

<div id="output_div" class="output-form">
<form name="form" method="get" action="<?php echo $_SERVER['PHP_SELF']; ?>">
	<fieldset class="group_form"><legend class="group_form"><?php echo _AC("checks"); ?></legend>

<?php print_paginator($page, $num_results, $page_string . htmlspecialchars(SEP) . $order .'='. $col, $results_per_page); ?>

<input type="hidden" name="html_tag" value="<?php echo htmlspecialchars($_GET['html_tag']); ?>" />
<input type="hidden" name="confidence" value="<?php echo $_GET['confidence']; ?>" />
<input type="hidden" name="open_to_public" value="<?php echo $_GET['open_to_public']; ?>" />
<?php if (isset($_GET['list'])){?>
<input type="hidden" name="list" value="<?php echo $_GET['list']; ?>" />
<?php }?>
<?php if (isset($_GET['cid'])){ // perserve the check ID that the prerequisite / next checks are added in ?>
<input type="hidden" name="cid" value="<?php echo $_GET['cid']; ?>" />
<?php }?>
<?php if (isset($_GET['gid'])){ // perserve the check ID that the prerequisite / next checks are added in ?>
	<input type="hidden" name="gid" value="<?php echo $_GET['gid']; ?>" />
<?php }?>
<?php if (isset($_GET['ggid'])){ // perserve the check ID that the prerequisite / next checks are added in ?>
	<input type="hidden" name="ggid" value="<?php echo $_GET['ggid']; ?>" />
<?php }?>
<?php if (isset($_GET['gsgid'])){ // perserve the check ID that the prerequisite / next checks are added in ?>
	<input type="hidden" name="gsgid" value="<?php echo $_GET['gsgid']; ?>" />
<?php }?>

<table summary="" class="data" rules="rows">
<colgroup>
	<?php if ($col == 'html_tag'): ?>
		<col />
		<col class="sort" />
		<col span="<?php echo 2 + $col_counts; ?>" />
	<?php elseif($col == 'public_field'): ?>
		<col span="<?php echo 1 + $col_counts; ?>" />
		<col class="sort" />
		<col span="1" />
	<?php elseif($col == 'error_type'): ?>
		<col span="<?php echo 3 + $col_counts; ?>" />
		<col class="sort" />
		<col span="2" />
	<?php elseif($col == 'description'): ?>
		<col span="<?php echo 4 + $col_counts; ?>" />
		<col class="sort" />
		<col span="3" />
	<?php elseif($col == 'open_to_public'): ?>
		<col span="<?php echo 5 + $col_counts; ?>" />
		<col class="sort" />
		<col span="4" />
	<?php elseif($col == 'check_id'): ?>
		<col span="<?php echo 5 + $col_counts; ?>" />
		<col class="sort" />
		<col span="5" />
	<?php endif; ?>
</colgroup>
<thead>
<tr>
	<?php if ($row_button_type == 'radio') {?>
	<th scope="col">&nbsp;</th>
	<?php }?>
	<?php if ($row_button_type == 'checkbox') {?>
	<th scope="col"><input type="checkbox" value="<?php echo _AC('select_all'); ?>" id="all" title="<?php echo _AC('select_all'); ?>" name="selectall" onclick="CheckAll();" /></th>
	<?php }?>
	<th scope="col"><a href="check/index.php?<?php echo $orders[$order]; ?>=html_tag<?php echo htmlspecialchars(SEP).$page_string; ?>"><?php echo _AC('html_tag');      ?></a></th>
	<th scope="col"><a href="check/index.php?<?php echo $orders[$order]; ?>=confidence<?php echo htmlspecialchars(SEP).$page_string; ?>"><?php echo _AC('error_type'); ?></a></th>
	<th scope="col"><a href="check/index.php?<?php echo $orders[$order]; ?>=description<?php echo htmlspecialchars(SEP).$page_string; ?>"><?php echo _AC('description');   ?></a></th>
	<th scope="col"><a href="check/index.php?<?php echo $orders[$order]; ?>=open_to_public<?php echo htmlspecialchars(SEP).$page_string; ?>"><?php echo _AC('open_to_public'); ?></a></th>
	<th scope="col"><a href="check/index.php?<?php echo $orders[$order]; ?>=check_id<?php echo htmlspecialchars(SEP).$page_string; ?>"><?php echo _AC('check_id'); ?></a></th>
</tr>

</thead>
<?php if ($num_results > 0): ?>

<tfoot>
<tr>
	<td colspan="<?php echo 8 + $col_counts; ?>">
		<?php if (is_array($buttons)) { foreach ($buttons as $button_text) {?>
		<input type="submit" name="<?php echo $button_text?>" value="<?php echo _AC($button_text); ?>" />
		<?php }}?>

	</td>
</tr>
</tfoot>

<tbody>
	<?php if (is_array($check_rows)){ foreach ($check_rows as $row) {?>
		<?php if ($row_button_type == 'radio') {?>
		<tr onmousedown="document.form['m<?php echo $row["check_id"]; ?>'].checked = true; rowselect(this);" 
		    onkeydown="document.form['m<?php echo $row["check_id"]; ?>'].checked = true; rowselect(this);"
		    id="r_<?php echo $row["check_id"]; ?>">
			<td><input type="radio" name="id" value="<?php echo $row["check_id"]; ?>" id="m<?php echo $row['check_id']; ?>" 
			           onmouseup="this.checked=!this.checked" onkeyup="this.checked=!this.checked" /></td>
		<?php }?>
		<?php if ($row_button_type == 'checkbox') {?>
		<tr onmousedown="document.form['m<?php echo $row['check_id']; ?>'].checked = !document.form['m<?php echo $row['check_id']; ?>'].checked; togglerowhighlight(this, 'm<?php echo $row['check_id']; ?>');" 
		    onkeydown="document.form['m<?php echo $row['check_id']; ?>'].checked = !document.form['m<?php echo $row['check_id']; ?>'].checked; togglerowhighlight(this, 'm<?php echo $row['check_id']; ?>');"
		    id="rm<?php echo $row['check_id']; ?>">
			<td><input type="checkbox" name="id[]" value="<?php echo $row['check_id']; ?>" id="m<?php echo $row['check_id']; ?>" 
			           onmouseup="this.checked=!this.checked" onkeyup="this.checked=!this.checked" /></td>
		<?php }?>
			<td><?php echo htmlspecialchars($row['html_tag']); ?></td>
			<td><?php echo get_confidence_by_code($row['confidence']); ?></td>
			<td><label for="m<?php echo $row['check_id']; ?>"><?php echo htmlspecialchars(_AC($row['name'])); ?></label></td>
			<td><?php if ($row['open_to_public']) echo _AC('yes'); else echo _AC('no'); ?></td>
			<td><?php echo $row['check_id']; ?></td>
		</tr>
	<?php }} ?>
<?php else: ?>
	<tr>
		<td colspan="<?php echo 5 + $col_counts; ?>"><?php echo _AC('none_found'); ?></td>
	</tr>
<?php endif; ?>
</tbody>
</table>
</fieldset>
</form>
</div>

<script language="JavaScript" type="text/javascript">
//<!--
function CheckAll() {
	for (var i=0;i<document.form.elements.length;i++)	{
		var e = document.form.elements[i];
		if ((e.name == 'id[]') && (e.type=='checkbox')) {
			e.checked = document.form.selectall.checked;
			togglerowhighlight(document.getElementById("r" + e.id), e.id);
		}
	}
}

function togglerowhighlight(obj, boxid) {
	if (document.getElementById(boxid).checked) {
		obj.className = 'selected';
	} else {
		obj.className = '';
	}
}
//-->
</script>
<?php require(AC_INCLUDE_PATH.'footer.inc.php'); ?>