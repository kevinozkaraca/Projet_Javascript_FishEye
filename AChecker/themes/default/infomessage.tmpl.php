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

global $_base_href; 
?>

<div id="info">
	<?php if (is_array($item)) : ?>
		<ul>
		<?php foreach($item as $i) : ?>
			<li><?php echo $i; ?></li>
		<?php endforeach; ?>
		</ul>
	<?php endif; ?>
</div>