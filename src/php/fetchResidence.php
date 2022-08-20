<?php
  require_once('dbconnect.php');

  $username = file_get_contents("php://input");

  $sql = "SELECT * FROM `residence` WHERE `username` = '$username'";
  $result = mysqli_query($conn, $sql);
  $object = mysqli_fetch_object($result);
  $response = json_encode($object);

  echo $response;
?>