<?php
  $object = array();
  $counter = 0;
  require_once('dbconnect.php');

  $username = file_get_contents("php://input");

  $sql = "SELECT * FROM `quarters` WHERE `landlord` = '$username' ORDER BY `qid` DESC";
  $result = mysqli_query($conn, $sql);

  while ($obj = mysqli_fetch_object($result)) {
    $object[$counter] = $obj;
    $counter++;
  }

  echo json_encode($object);
?>