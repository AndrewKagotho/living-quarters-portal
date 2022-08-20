<?php
  $object = array();
  $counter = 0;
  require_once('dbconnect.php');

  $filterInputs = json_decode(file_get_contents('php://input'));
  $column = $filterInputs->column;
  $columnValue = $filterInputs->columnValue;

  if($column==="agreement type") {
    if($columnValue==='1')
      $columnValueText="fixed";
    else
      $columnValueText="periodic";
  }
  else if($column==="session") {
    if($columnValue==='1')
      $columnValueText="in";
    else
      $columnValueText="out";
  }

  if($columnValue === 'all')
  $sql = "SELECT * FROM `residence`";
  else
  $sql = "SELECT * FROM `residence` WHERE `$column` = '$columnValueText'";

  $result = mysqli_query($conn, $sql);

  while ($obj = mysqli_fetch_object($result)) {
    $object[$counter] = $obj;
    $counter++;
  }

  echo json_encode($object);
?>