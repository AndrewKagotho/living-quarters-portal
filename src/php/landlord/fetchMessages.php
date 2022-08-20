<?php
  $objectArray = array();
  $counter = 0;
  require_once('dbconnect.php');

  $data = json_decode(file_get_contents('php://input'));
  $mssTenant = $data->mssTenant;
  $mssLandlord = $data->mssLandlord;

  $sql = "SELECT * FROM `communications` WHERE `mssFrom` = '$mssLandlord' AND `mssTo` = '$mssTenant' OR `mssTo` = '$mssLandlord' AND `mssFrom` = '$mssTenant' ORDER BY `mssTime`";

  $result = mysqli_query($conn,$sql);

  while ($obj = mysqli_fetch_object($result)) {
    $objectArray[$counter] = $obj;
    $counter++;
  }

  echo json_encode($objectArray);
?>