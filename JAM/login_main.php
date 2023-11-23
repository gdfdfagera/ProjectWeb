<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/login.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <div id="jam">
                <div class="j">
                    Jam
                </div>
            </div>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="basket.html">Online Lessons</a>
                </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="teachers.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Teachers
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="teachers.html">All Teachers</a></li>
                  <li><a class="dropdown-item" href="become_teacher.html">Become Teacher</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    <div class="main">
      <form action="php/login.php" method="post">
        <div class="d-flex flex-column" style="gap: 15px;">
            <div class="col-md-12 col-sm-10 d-flex justify-content-center" style="color: white;">
              <h1>Sign in</h1>
            </div>
            <div class="col-md-12 col-sm-10">
              <input type="email" class="form-control" placeholder="Email" aria-label="First name" id="email" name="email">
            </div>
            <div class="col-md-12 col-sm-10">
              <input type="password" class="form-control" placeholder="Password" aria-label="Last name" id="pass" name="password">
            </div>
            <div class="col-md-12 col-sm-10 d-flex justify-content-center">
                <button type="submit" class="btn btn-outline-success" onclick="fun()">Sign in</button>
            </div>

            <div class="col-md-12 col-sm-10 d-flex justify-content-center" style="font-size: 20px; color: white;">
                <p>Or</p>
            </div>

            <div class="col-md-12 col-sm-10 d-flex justify-content-center">
                <button type="submit" class="btn btn-outline-light"><a href="registration.php">Sign up</a></button>
            </div>
        </div>
      </form>
    </div>

    <footer class="my-4" style="background-color: black;">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Features</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Pricing</a></li>
          <li class="nav-item"><a href="#" class="nav-link px-2 text-light">FAQs</a></li>
        </ul>
        <p class="text-center text-light">© 2023 Company, Inc</p>
    </footer>

    <script src="js/login.js"></script>
</body>
</html>