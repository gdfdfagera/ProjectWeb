<?php


echo "<script>createNewUser();</script>";



// $sql = "SELECT * FROM `Users`";
// $result = $conn->query($sql);
// if ($result->num_rows > 0){
//     while ($row = $result->fetch_assoc()){
//         echo "<script>createNewUser('{$row['id']}', '{$row['Username']}', '{$row['Surname']}', '{$row['email']}', '{$row['password']}');</script>";
//     }
// }



// $id = $_POST['id'];
// $login = $_POST['name'];
// $surname = $_POST['surname'];
// $email = $_POST['email'];
// $pass = $_POST['password'];


// $sql = "SELECT * FROM `Users` WHERE id = '$id'";
// $result = $conn->query($sql);
// if ($result->num_rows > 0){
//     while ($row = $result->fetch_assoc()){
//         if ($login != $row['Username'] || $surname != $row['Surname'] || $email != $row['email'] || $pass != $row['password']){
//             $sql2 = "UPDATE `Users` SET Username = '$login', Surname = '$surname', email = '$email', password = '$pass' WHERE id = '$id'";
//             $result2 = $conn->query($sql2);
//             if ($result2 == True){
//                 echo "<script>success()</script>";
//             }
//         }
//     }
// }

?>