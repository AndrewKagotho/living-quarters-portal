<?php
  require_once('dbconnect.php');

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = "SELECT * FROM `landlords` WHERE `username`='$username' AND `password` = '$password'";

  $result = mysqli_query($conn, $sql);

  if(mysqli_num_rows($result) == 1) {
    $user = mysqli_fetch_array($result);
    $id = $user['username'];
    header("Location: http://localhost:3000/landlord?id=$id");
  }
  else
    echo ("<script type='text/javascript'>
      window.alert('Invalid username or password!')
      window.location.href='javascript:history.go(-1)'
    </script>");
?>