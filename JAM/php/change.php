<?php
require_once('db.php');

$sql = "SELECT * FROM `Users`";
$result = $conn->query($sql);
if ($result->num_rows > 0){
    while ($row = $result->fetch_assoc()){
        echo "<script>createNewUser('{$row['id']}', '{$row['Username']}', '{$row['Surname']}', '{$row['email']}', '{$row['password']}');</script>";
    }
}

?>