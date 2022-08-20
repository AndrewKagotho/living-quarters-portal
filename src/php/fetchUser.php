<?php
  require_once('dbconnect.php');

  $data = json_decode(file_get_contents("php://input"));
  $url = $data->url;

  $url_components = parse_url($url);
  parse_str($url_components['query'], $user);
  $res = $user['id'];

  $sql = "SELECT * FROM `users` WHERE `username` = '$res'";
  $result = mysqli_query($conn, $sql);
  $object = mysqli_fetch_object($result);
  $response = json_encode($object);

  echo $response;
?>