<?php

require_once('db.php');

$login = $_POST['username'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$password = $_POST['password'];

if ($login == null || $surname == null || $email == null || $password == null){
    header('location:/JAM/registration.php');
    die();
}



$sql = "SELECT `email` FROM `Users` WHERE email = '$email'";
$result = $conn->query($sql);
if ($result->num_rows > 0){
    echo"
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Document</title>
    </head>
        <body style='width: 100%; height: 600px; display:flex; justify-content:center; align-items:center;'>
            <div style = 'text-align:center;'>
                <p>User with this email is already register!</p>
                <a href='/JAM/login_main.php'><button>Sign in</button></a>
            </div>
        </body>
    </html>
    ";
    die();
}

$sql = "INSERT INTO `Users` (Username, Surname, email, password) VALUES ('$login', '$surname', '$email', '$password')";

if ($conn -> query($sql) == TRUE){
    echo "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Document</title>
    </head>
        <body style='width: 100%; height: 600px; display:flex; justify-content:center; align-items:center;'>
            <div style = 'text-align:center;'>
                <p>Press the button to sign in</p>
                <a href='/JAM/login_main.php'><button>Sign in</button></a>
            </div>
        </body>
    </html>";
}

?>