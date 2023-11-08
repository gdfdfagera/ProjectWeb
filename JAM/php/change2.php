<?php

require_once('db.php');

$id = $_POST['id'];
$login = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$pass = $_POST['password'];


$sql = "SELECT * FROM `Users` WHERE id = '$id'";
$result = $conn->query($sql);
if ($result->num_rows > 0){
    while ($row = $result->fetch_assoc()){
        if ($login != $row['Username'] || $surname != $row['Surname'] || $email != $row['email'] || $pass != $row['password']){
            $sql2 = "UPDATE `Users` SET Username = '$login', Surname = '$surname', email = '$email', password = '$pass' WHERE id = '$id'";
            $result2 = $conn->query($sql2);
            if ($result2 == True){
                echo "<script src='/JAM/js/change.js'>success();</script>";
                header('location: /JAM/change_user.php');
                exit;
            }
        }
    }
}

header('location: /JAM/change_user.php');
exit;
?>