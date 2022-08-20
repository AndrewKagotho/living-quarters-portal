<?php
  require_once('dbconnect.php');

  $lid = file_get_contents("php://input");

  $sql = "SELECT * FROM `landlords` WHERE `username` = '$lid'";
  $result = mysqli_query($conn, $sql);
  $object = mysqli_fetch_object($result);
  $response = json_encode($object);

  echo $response;
?>