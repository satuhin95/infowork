<?php
session_start();
if (!isset($_SESSION['admin_name']) || !$_SESSION['admin_name']) {
  header("Location: ../../login/");
  exit();
}

// $db = new PDO('sqlite:..\..\db\ytDashboardDB.sqlite');
// $db = new PDO('sqlite:C:\xampp\htdocs\dashboard-backend\ytDashboardDB.sqlite');
$db = new PDO('sqlite:/var/www/media_assets/public/yt-dashboard/db/ytDashboardDB.sqlite');



$adminUserName = $_SESSION['admin_name'];
$query1 = "SELECT * FROM adminInfo WHERE admin_name = '$adminUserName'";
$stmt1 = $db->prepare($query1);
$stmt1->execute();
$userInfoRes = $stmt1->fetch(PDO::FETCH_ASSOC);

if (!$userInfoRes) {
  header("Location: ../../login/");
  exit();
}



$username = null;
$password = null;
$form_error = null;
$success = false;


if (isset($_POST['submit'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // $db = new PDO('sqlite:/var/www/media_assets/public/yt-dashboard/db/ytDashboardDB.sqlite');
  // $db = new PDO('sqlite:..\db\ytDashboardDB.sqlite');
  // $db = new PDO('sqlite:C:\xampp\htdocs\dashboard-backend\ytDashboardDB.sqlite');

  $query = "SELECT * FROM userInfo WHERE user_name = '$username'";
  $stmt = $db->prepare($query);
  $stmt->execute();
  $result = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($result) {
    $success = false;
    $form_error = true;
    $form_error_msg = "Duplicate User Found";

  } else {
    $query = "INSERT INTO userInfo (user_name, user_password) VALUES (?,?)";
    $stmt = $db->prepare($query);
    $stmt->execute([$username,$password]);
    // $result1 = $stmt->fetch(PDO::FETCH_ASSOC);

      $success = true;
      $form_error = false;
      $form_error_msg = null;
      header("Location: ../");

    // $success = false;
    // $form_error = true;
    // $_SESSION['admin_name'] = null;
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

    <title>Create User</title>

    <link href="../../css/app.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="../../css/combinedStyle.css">
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
                      <!-- <img src="../../img/avatars/pplogo.png" alt="PP Logo" class="img-fluid rounded-3 mb-3" width="132" height="132" /> -->
                      <h2>Add New User</h2>
                    </div>

                    <form action="" method="post">
                      <div class="mb-3">
                        <label class="form-label">User Name</label>
                        <input required class="form-control form-control-lg" type="text" name="username" placeholder="Enter Username" value="<?php echo $username;?>" />
                      </div>
                      <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input required class="form-control form-control-lg" type="password" name="password" placeholder="Enter User Password" />
                        <small>
                          <!-- <a href="index.html">Forgot password?</a> -->
                        </small>
                        <small class="errorText" style="color:red;margin-top:5px;">*Failed to create user</small>
                      </div>
                      <!-- <div>
                        <label class="form-check">
                          <input class="form-check-input checkBox" type="checkbox" value="remember-me" name="remember-me" checked>
                          <span class="form-check-label">
                            Remember me next time
                          </span>
                        </label>
                      </div> -->
                      <div class="text-center mt-3">
                        <button type="submit" name="submit" class="btn btn-lg purpleBtn">Create New User</button>
                      </div>
                      <div class="boxBottomFooter" style="display:flex; justify-content:space-between; margin:3rem 1rem 1rem 1rem">
                    <div class="adminUserNameFooter">Admin: <span style="color:#6a27d9"><?php echo $adminUserName; ?></span></div>
                    <div class="backToDash"><a href="../" style="color:#6a27d9">Back to Dashboard</a></div>
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

    <script src="../../js/app.js"></script>

  </body>

  </html>

<?php } ?>