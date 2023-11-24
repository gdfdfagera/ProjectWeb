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


$sql = "SELECT * FROM `Users` WHERE email = '$email' AND password = '$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0){
    while ($row = $result->fetch_assoc()){
        echo "Welcome" . $row['Username'];
    }
} else {
    header('location:/JAM/login_main.php');
}



?>