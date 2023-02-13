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

/**
 * DAO for "patches" table
 * @access	public
 * @author	Cindy Qi Li
 * @package	DAO
 */

if (!defined('AC_INCLUDE_PATH')) exit;

require_once(AC_INCLUDE_PATH. 'classes/DAO/DAO.class.php');

class PatchesDAO extends DAO {

	/**
	 * Create new patch
	 * @access  public
	 * @param   achecker_patch_id: atutor patch id,
	 *          applied_version
	 *          patch_folder
	 *          description
	 *          available_to
	 *          sql_statement,
	 *          status
	 *          remove_permission_files,
	 *          backup_files
	 *          patch_files
	 *          author
	 * @return  patch id, if successful
	 *          false and add error into global var $msg, if unsuccessful
	 * @author  Cindy Qi Li
	 */
	public function Create($achecker_patch_id, $applied_version,
	                       $patch_folder, $description,
	                       $available_to, $sql_statement,
	                       $status, $remove_permission_files,
	                       $backup_files, $patch_files, $author)
	{

		$sql = "INSERT INTO " . TABLE_PREFIX. "patches " .
					 "(achecker_patch_id,
					   applied_version,
					   patch_folder,
					   description,
					   available_to,
					   sql_statement,
					   status,
					   remove_permission_files,
					   backup_files,
					   patch_files,
					   author,
					   installed_date)
					  VALUES
					  ('".$this->addSlashes($achecker_patch_id)."',
					   '".$this->addSlashes($applied_version)."',
					   '".$this->addSlashes($patch_folder)."',
					   '".$this->addSlashes($description)."',
					   '".$this->addSlashes($available_to)."',
					   '".$this->addSlashes($sql_statement)."',
					   '".$this->addSlashes($status)."',
					   '".$this->addSlashes($remove_permission_files)."',
					   '".$this->addSlashes($backup_files)."',
					   '".$this->addSlashes($patch_files)."',
					   '".$this->addSlashes($author)."',
					   now()
					   )";

		if (!$this->execute($sql))
		{
			$msg->addError('DB_NOT_UPDATED');
			return false;
		}
		else
		{
			return $this->getInsertID();
		}
	}

	/**
	* update table "patches" accroding to the fields/values in the given array
	* @access  public
	* @param   patchID, fieldArray
	* @author  Cindy Qi Li
	*/
	public function UpdateByArray($patchID, $fieldArray)
	{
		$sql_prefix = "Update ". TABLE_PREFIX. "patches set ";

		foreach ($fieldArray as $key => $value)
		{
			$sql_middle .= $key . "='" . $this->addSlashes($value) . "', ";
		}

		$sql = substr($sql_prefix . $sql_middle, 0, -2) .
		       " WHERE patches_id = " . $patchID;

		return $this->execute($sql);
	}

	/**
	 * Return the patch info with the given patch id
	 * @access  public
	 * @param   $patchID
	 * @return  patch row
	 * @author  Cindy Qi Li
	 */
	public function getByID($patchID)
	{
		$sql = "SELECT * from ".TABLE_PREFIX."patches where patches_id=". $patchID;

		$rows = $this->execute($sql);

		if (is_array($rows)) return $rows[0];
		else return false;
	}

	/**
	 * Return patch information by given version
	 * @access  public
	 * @param   version
	 * @return  patch row
	 * @author  Cindy Qi Li
	 */
	public function getPatchByVersion($version)
	{
		$sql = "SELECT * FROM ".TABLE_PREFIX."patches
		         WHERE applied_version = '" . $version . "'
		         ORDER BY achecker_patch_id";

		return $this->execute($sql);
	}

	/**
	 * Return user information by given web service ID
	 * @access  public
	 * @param   web service ID
	 * @return  user row
	 * @author  Cindy Qi Li
	 */
	public function getInstalledPatchByIDAndVersion($patchID, $version)
	{
		$sql = "select * from ".TABLE_PREFIX."patches " .
		       "where achecker_patch_id = '" . $patchID ."'".
		       " and applied_version = '".$version."'".
		       " and status like '%Installed'";

		return $this->execute($sql);
	}

}
?>
