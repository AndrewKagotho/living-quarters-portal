<?php
  require_once('dbconnect.php');

  $username = file_get_contents('php://input');
  
  $sql = "SELECT * FROM `users` WHERE `username` = '$username'";
  $result = mysqli_query($conn,$sql);

  $obj = mysqli_fetch_object($result);
  
  echo json_encode($obj);
?>

