<?php
  $objectArray = array();
  $counter = 0;
  require_once('dbconnect.php');

  $sql = "SELECT * FROM `quarters`";
  $result = mysqli_query($conn, $sql);

  while ($obj = mysqli_fetch_object($result)) {
    $objectArray[$counter] = $obj;
    $counter++;
  }

  echo json_encode($objectArray);
?>