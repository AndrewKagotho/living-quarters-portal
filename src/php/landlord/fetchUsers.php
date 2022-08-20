<?php
  $userObjectArray = [];
  $userCounter = 0;
  require_once('dbconnect.php');

  $username = file_get_contents("php://input");
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
?>