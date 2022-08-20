<?php
  $objectArray = array();
  $counter = 0;
  require_once('dbconnect.php');

  $username = file_get_contents("php://input");

  $sql = "SELECT * FROM `residence` WHERE `lid` = '$username'";

  $result = mysqli_query($conn, $sql);

  while ($object = mysqli_fetch_object($result)) {
    $objectArray[$counter] = $object;
    $counter++;
  }

  echo json_encode($objectArray);
?>