<?php
  require_once('dbconnect.php');

  $qid = file_get_contents("php://input");

  $sql = "SELECT * FROM `quarters` WHERE `qid` = '$qid'";
  $result = mysqli_query($conn, $sql);
  $object = mysqli_fetch_object($result);
  $response = json_encode($object);

  echo $response;
?>