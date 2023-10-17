<?php session_start(); ?>

<?php
$username = null;
$password = null;
$form_error = null;
$success = false;


if (isset($_POST['submit'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  $db = new PDO('sqlite:/var/www/media_assets/public/yt-dashboard/db/ytDashboardDB.sqlite');
  // $db = new PDO('sqlite:..\db\ytDashboardDB.sqlite');
  // $db = new PDO('sqlite:C:\xampp\htdocs\xampp-projects\yt-dashboard\Backend\dashboard-backend\ytDashboardDB.sqlite');


  $query = "SELECT * FROM userInfo WHERE user_name = '$username' and user_password = '$password'";
  $stmt = $db->prepare($query);
  $stmt->execute();
  $result = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($result) {
    $success = true;
    $form_error = false;

    $_SESSION['username'] = $username;
    header('location: ../');

  } else {
    $success = false;
    $form_error = true;
    $_SESSION['username'] = null;
  }
}


if (!$success) {
?>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="shortcut icon" type="image/x-icon" href="//purplepatch.online/assets/ico/favicon.ico">

    <title>Login</title>

    <link href="../css/app.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <?php
    if($form_error){echo '<style>.errorText{display: block;}</style>';}else{echo '<style>.errorText{display: none;}</style>';}
    ?>
  </head>

  <body>
    <main class="d-flex w-100">
      <div class="container d-flex flex-column">
        <div class="row vh-100">
          <div class="col-sm-10 col-md-8 col-lg-5 mx-auto d-table h-100">
            <div class="d-table-cell">

              <div class="card mt-2 mt-md-4 mt-lg-7">
                <div class="card-body">
                  <div class="m-sm-4">
                    <div class="text-center">
                      <img src="../img/avatars/pplogo.png" alt="PP Logo" class="img-fluid rounded-3 mb-3" width="132" height="132" />
                    </div>

                    <form action="" method="post">
                      <div class="mb-3">
                        <label class="form-label">User Name</label>
                        <input class="form-control form-control-lg" type="text" name="username" placeholder="Enter Your Username" value="<?php echo $username;?>" />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input class="form-control form-control-lg" type="password" name="password" placeholder="Enter Your Password" />
                        <small>
                          <!-- <a href="index.html">Forgot password?</a> -->
                        </small>
                        <small class="errorText" style="color:red;margin-top:5px;">*Incorrect Username or Password</small>
                      </div>
                      <div>
                        <label class="form-check">
                          <input class="form-check-input checkBox" type="checkbox" value="remember-me" name="remember-me" checked>
                          <span class="form-check-label">
                            Remember me next time
                          </span>
                        </label>
                      </div>
                      <div class="text-center mt-3">
                        <button type="submit" name="submit" class="btn btn-lg loginBtn">Login</button>
                      </div>
                    </form>


                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>

    <script src="../js/app.js"></script>

  </body>

  </html>

<?php } ?>