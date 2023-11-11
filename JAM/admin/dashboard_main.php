<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Admin Dashboard</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
<link rel="stylesheet" href="css/dashboard.css">

</head>
<body>
<div class="admin">
    <header class="admin__header">
        <a href="#" class="logo">
            <h1>Dashboard</h1>
        </a>
        <div class="toolbar">
            <div class="toolbar__right">
              <a href="/JAM/index.html" class="btn btn--primary logout">Log Out</a>
            </div>
        </div>
    </header>
    <nav class="admin__nav">
        <ul class="menu">
            <li class="menu__title">Network</li>
            <li class="menu__item">
                <a class="menu__link is-active" href="#">Users</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="change_user.php">Change the users</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="add.php">Add Users</a>
            </li>
            <li class="menu__item">
                <a class="menu__link" href="delete.php">Delete Users</a>
            </li>
        </ul>
    </nav>



    <main class="admin__main">
        <div class="dashboard" id="dash">
            <!-- <div class="dashboard__item dashboard__item--full">
                <div class="card">
                    <div class="part">
                        <p>Id</p>
                        <div class="concr">

                        </div>
                    </div>
                    <div class="part">
                        <p>Username</p>
                        <div class="concr">
                            
                        </div>
                    </div>
                    <div class="part">
                        <p>Surname</p>
                        <div class="concr">
                            
                        </div>
                    </div>
                    <div class="part">
                        <p>Email</p>
                        <div class="concr">
                            
                        </div>
                    </div>
                    <div class="part">
                        <p>Password</p>
                        <div class="concr">
                            
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </main>



    <footer class="admin__footer">
        <span>&copy; 2018 Company Inc.</span>
        <span><a href="#1" class="help">Ask for help</a></span>
    </footer>
</div>



<script src="js/dashboard.js"></script>

<?php

require_once('php/db.php');

$sql = "SELECT * FROM `Users`";
$result = $conn->query($sql);
if ($result->num_rows > 0){
    while ($row = $result->fetch_assoc()){
        // echo "{$row['Id']}, {$row[Username]}, {$row[Surname]}, {$row[email]}, {$row[password]}";
        // echo "<script>createNewUser($row[Id], $row[Username], $row[Surname], $row[email], $row[password]);</script>";
        echo "<script>createNewUser('{$row['id']}', '{$row['Username']}', '{$row['Surname']}', '{$row['email']}', '{$row['password']}');</script>";
    }
}
?>


</body>
</html>
