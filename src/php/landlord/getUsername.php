<?php
  require_once('dbconnect.php');

  $data = json_decode(file_get_contents("php://input"));
  $url = $data->url;

  $url_components = parse_url($url);
  parse_str($url_components['query'], $user);
  echo $username = $user['id'];
?>