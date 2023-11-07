<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Admin Dashboard</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet" href="css/change.css">
</head>
<body>
<div class="admin">
    <header class="admin__header">
        <a href="#" class="logo">
            <h1>Dashboard</h1>
        </a>
        <div class="toolbar">
            <div class="toolbar__right">
              <a href="#" class="btn btn--primary logout">Log Out</a>
            </div>
        </div>
    </header>
    <nav class="admin__nav">
        <ul class="menu">
            <li class="menu__title">Network</li>
            <li class="menu__item">
                <a class="menu__link" href="dashboard_main.php">Users</a>
            </li>
            <li class="menu__item">
                <a class="menu__link is-active" href="#">Change the users</a>
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
                            <input type="text">
                        </div>
                    </div>
                    <div class="part">
                        <p>Username</p>
                        <div class="concr">
                            <input type="text">
                        </div>
                    </div>
                    <div class="part">
                        <p>Surname</p>
                        <div class="concr">
                            <input type="text">
                        </div>
                    </div>
                    <div class="part">
                        <p>Email</p>
                        <div class="concr">
                            <input type="text">
                        </div>
                    </div>
                    <div class="part">
                        <p>Password</p>
                        <div class="concr">
                            <input type="text">
                        </div>
                    </div>
                </div>
                <div class="update">
                    <button>Update</button>
                </div>
                <hr>
            </div> -->
        </div>
    </main>



    <footer class="admin__footer">
        <span>&copy; 2018 Company Inc.</span>
        <span><a href="#1" class="help">Ask for help</a></span>
    </footer>
</div>



<script src="js/change.js"></script>

<?php require 'change.php';
?>


</body>
</html>
