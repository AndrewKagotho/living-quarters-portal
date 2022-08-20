<?php
  require_once('dbconnect.php');

  $data = json_decode(file_get_contents('php://input'));
  $table = $data->table;

  if($table==='transactions') {
    $action = $data->type;
    $tid = $data->tid;
    $payer = $data->payer;
    $payee = $data->payee;
    $payable = $data->payable;
    $method = $data->method;
    $refNo = $data->refNo;
    $paid = $data->paid;
    $date = $data->date;

    if($action==='create')
      $sql = "INSERT INTO `transactions`(`payer`, `payee`, `payable`, `method`, `reference no`, `paid`, `date`) VALUES ('$payer', '$payee', '$payable', '$method', '$refNo', '$paid', '$date')";
    elseif($action==='update')
      $sql = "UPDATE `transactions` SET `payer`='$payer', `payee`='$payee', `payable`='$payable', `method`='$method', `reference no`='$refNo', `paid`='$paid', `date`='$date' WHERE `transactionID` = '$tid'";
    elseif($action=='delete')
    $sql = "DELETE FROM `transactions` WHERE `transactionID` = '$tid'";
  }
  elseif($table==='residence') {
    $action = $data->type;
    $rid = $data->rid;
    $username = $data->username;
    $qid = $data->qid;
    $lid = $data->lid;
    $agreementType = $data->agreementType;
    $period = $data->period;
    $startDate = $data->startDate;
    $activity = $data->activity;
    $session = $data->session;

    if($action==='create')
      $sql = "INSERT INTO `residence`(`username`, `qid`, `lid`, `agreement type`, `period`, `activity`, `start date`, `session`) VALUES ('$username', '$qid', '$lid', '$agreementType', '$period', '$activity', '$startDate', '$session')";
    elseif($action==='update')
      $sql = "UPDATE `residence` SET `username`='$username', `qid`='$qid', `lid`='$lid', `agreement type`='$agreementType', `period`='$period', `start date`='$startDate', `activity`='$activity', `session`='$session' WHERE `rid` = '$rid'";
    elseif($action=='delete')
      $sql = "DELETE FROM `residence` WHERE `rid` = '$rid'";
  }
  elseif($table==='quarters') {
    $action = $data->type;
    $qid = $data->qid;
    $name = $data->name;
    $location = $data->location;
    $landlord = $data->landlord;
    $vacancies = $data->vacancies;
    $features = $data->features;
    $prices = $data->prices;
    $images = $data->images;

    if($action==='create')
      $sql = "INSERT INTO `quarters`(`name`, `location`, `landlord`, `vacancies`, `features`, `prices`, `images`) VALUES ('$name', '$location', '$landlord', '$vacancies', '$features', '$prices', '$images')";
    elseif($action==='update')
      $sql = "UPDATE `quarters` SET `name`='$name', `location`='$location', `vacancies`='$vacancies',`features`='$features', `prices`='$prices', `images`='$images' WHERE `qid` ='$qid'";
    elseif($action=='delete')
    $sql = "DELETE FROM `quarters` WHERE `qid` = '$qid'";
  }

  $result = mysqli_query($conn, $sql);
?>
