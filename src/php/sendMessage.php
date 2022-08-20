<?php
  require_once('dbconnect.php');

  $data = json_decode(file_get_contents('php://input'));
  $mssFrom = $data->mssFrom;
  $mssTo = $data->mssTo;
  $mssBody = $data->mssBody;

  $sql = "INSERT INTO `communications`(`mssTo`, `mssFrom`, `mssTime`, `mssBody`) VALUES ('$mssTo','$mssFrom',NOW(),'$mssBody');";

  $result = mysqli_query($conn,$sql);
?>