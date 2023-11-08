<?php

require_once('db.php');

$login = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO `Users` (Username, Surname, email, password) VALUES ('$login', '$surname', '$email', '$password')";

if ($conn -> query($sql) == TRUE){
    header('location: /JAM/add.php');
    exit;
}

?>