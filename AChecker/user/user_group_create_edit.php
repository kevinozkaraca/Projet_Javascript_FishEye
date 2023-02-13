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

define('AC_INCLUDE_PATH', '../include/');

include(AC_INCLUDE_PATH.'vitals.inc.php');
include_once(AC_INCLUDE_PATH.'classes/DAO/UserGroupsDAO.class.php');
include_once(AC_INCLUDE_PATH.'classes/DAO/UserGroupPrivilegeDAO.class.php');
include_once(AC_INCLUDE_PATH.'classes/DAO/PrivilegesDAO.class.php');

unset($id);  // clean up the temporary id values set by vitals.inc.php

if (isset($_GET["id"])) $id = intval($_GET["id"]);

$userGroupsDAO = new UserGroupsDAO();

// handle submits
if (isset($_POST['cancel'])) 
{
	$msg->addFeedback('CANCELLED');
	header('Location: user_group.php');
	exit;
} 
else if (isset($_POST['save']))
{
	$title = trim($_POST['title']);	
	
	if ($title == '')
	{
		$msg->addError(array('EMPTY_FIELDS', _AC('title')));
	}
	
	if (!$msg->containsErrors())
	{
		if (isset($id))  // edit existing user group
		{
			$userGroupsDAO->update($id,
			                       $title, 
			                       trim($_POST['description']));
		}
		else  // create a new user group
		{
			$id = $userGroupsDAO->Create($title, 
			                       trim($_POST['description']));
		}
			                       
		if (!$msg->containsErrors())
		{
			// add checks
			if (is_array($_POST['add_privileges_id'])) 
			{
				$userGroupPrivilegeDAO = new UserGroupPrivilegeDAO();

				foreach ($_POST['add_privileges_id'] as $add_priv_id)
					$userGroupPrivilegeDAO->Create($id, $add_priv_id);
			}
			
			$msg->addFeedback('ACTION_COMPLETED_SUCCESSFULLY');
			header('Location: user_group.php');
			exit;
		}
	}
}
else if (isset($_POST['remove']))
{
	$userGroupPrivilegeDAO = new UserGroupPrivilegeDAO();
	
	if (is_array($_POST['del_privileges_id']))
	{
		foreach ($_POST['del_privileges_id'] as $del_priv_id)
			$userGroupPrivilegeDAO->Delete($id, $del_priv_id);
	}
}

// interface display
if (!isset($id))
{
	// create user group
	$privilegesDAO = new PrivilegesDAO();
	

	$plate['privs_to_add_rows'] = $privilegesDAO->getAll();
}
else
{
	// edit existing user group
	$privilegesDAO = new PrivilegesDAO();
	$privs_rows = $privilegesDAO->getUserGroupPrivileges($id);

	// get privs that are not in user group
	$privs = array();
	if (is_array($privs_rows))
	{
		foreach($privs_rows as $priv_row)
			$privs[] .= $priv_row['privilege_id'];
	}

	$plate['user_group_row'] = $userGroupsDAO->getUserGroupByID($id);
	$plate['privs_rows'] = $privs_rows;
	$plate['privs_to_add_rows'] = $privilegesDAO->getAllPrivsExceptListed($privs);
}

echo $plates->render('user/user_group_create_edit.tmpl.php', $plate);
?>
