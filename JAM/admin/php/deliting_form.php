<?php

require_once('db.php');

$id = $_POST['id'];
$login = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "DELETE FROM `Users` WHERE id = '$id'";

if ($conn -> query($sql) == TRUE){
    header('location: /JAM/admin/delete.php');
    exit;
}

?>