<?php
  require_once('dbconnect.php');

  $username = file_get_contents('php://input');

  $sql = "SELECT * FROM `communications` WHERE `userID` = '$username'";

  $result = mysqli_query($conn,$sql);
  $object = mysqli_fetch_object($result);
  echo json_encode($object);
?>