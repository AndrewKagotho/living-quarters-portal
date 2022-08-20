<?php
  $objectArray = [];
  $counter = 0;
  $userObjectArray = [];
  $userCounter = 0;
  require_once('dbconnect.php');

  $postObject = json_decode(file_get_contents('php://input'));
  $dbName = $postObject->dbname;
  $username = $postObject->username;

  if($dbName==='users') {
    $getUsers = "SELECT * FROM `residence` WHERE `lid` = '$username'";
    $userResult = mysqli_query($conn,$getUsers);
    while ($object = mysqli_fetch_object($userResult)) {
      $eachUserObject = json_encode($object);
      $eachUser = json_decode($eachUserObject);
      $eachUsername = $eachUser->username;
      $sql = "SELECT * FROM `users` WHERE `username` = '$eachUsername'";
      $result = mysqli_query($conn,$sql);
      $userObject = mysqli_fetch_object($result);
      $userObjectArray[$userCounter] = $userObject;
      $userCounter++;
    }
    echo json_encode($userObjectArray);
  }
  else {
    if($dbName==='transactions')
      $sql = "SELECT * FROM `$dbName` WHERE `payee` = '$username' ORDER BY `date` DESC";
    elseif($dbName=='residence')
      $sql = "SELECT * FROM `$dbName` WHERE `lid` = '$username'";
    elseif($dbName=='quarters')
      $sql = "SELECT * FROM `$dbName` WHERE `landlord` = '$username' ORDER BY `qid` DESC";

    $result = mysqli_query($conn,$sql);

    while ($object = mysqli_fetch_object($result)) {
      $objectArray[$counter] = $object;
      $counter++;
    }

    echo json_encode($objectArray);
  }
?>