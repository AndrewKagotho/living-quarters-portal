<?php
  require_once('dbconnect.php');

  $data = json_decode(file_get_contents("php://input"));
  $firstName = $data->firstName;
  $lastName = $data->lastName;
  $email = $data->email;
  $username = $data->username;
  $password = $data->password;

  $sql = "INSERT INTO `users`(`first name`, `last name`, `email`, `username`, `password`) VALUES ('$firstName','$lastName','$email','$username', '$password')";
  $result = mysqli_query($conn, $sql);

  if($result) {
    // $response['data']=array('status'=>'valid');
    echo ("<script type='text/javascript'>
      window.alert('Registration successful!')
    </script>");
  }
  else {
    // $response['data']=array('status'=>'invalid');
    echo ("<script type='text/javascript'>
      window.alert('Try again!')
    </script>");
  }
?>