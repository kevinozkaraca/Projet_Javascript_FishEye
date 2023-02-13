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

if (!defined('AC_INCLUDE_PATH')) { exit; } 
include(AC_INCLUDE_PATH.'handbook_pages.inc.php');

global $handbook_pages;
global $merged_array;

$merged_array = array();

// straighten multi-dimensional array $pages into one-dimension array
function merge_page_array($pages_array)
{
	global $merged_array;
	
	if(is_array($pages_array))
	{
		foreach ($pages_array as $page_key => $page_value) 
		{
			if (is_array($page_value))
			{
				$merged_array[] = $page_key;
				merge_page_array($page_value);
			}
			else 
			{
				$merged_array[] = $page_value;
			}
		}
	}
	
}
merge_page_array($handbook_pages);

// find previous and next page of the current page from merged_array
if (is_array($merged_array))
{
	foreach ($merged_array as $key => $page)
	{
		if (strcmp($page, $this_page) == 0)
		{
			if ($key >= 1) $prev_page = $merged_array[$key - 1];
			if ($key < count($merged_array) - 1) $next_page = $merged_array[$key + 1];
			break;
		}
	}
}
if (isset($prev_page)) $plate['prev_page'] = $prev_page;
if (isset($next_page)) $plate['next_page']= $next_page;

$plate['pages'] = $_pages;
$plate['this_page'] = $this_page;
$plate['base_path'] = AC_BASE_HREF;
$plate['theme'] = $_SESSION['prefs']['PREF_THEME'];

echo $plates->render('include/handbook_header.tmpl.php', $plate);
?>
