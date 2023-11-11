<?php

require_once('db.php');

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM `admin` WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0){
    header('location: /JAM/admin/dashboard_main.php');
    exit;
} 



?>