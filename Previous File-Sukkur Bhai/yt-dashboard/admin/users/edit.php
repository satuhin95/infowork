<?php
session_start();
if (!isset($_SESSION['admin_name']) || !$_SESSION['admin_name']) {
  header("Location: ../login/");
  exit();
} else {

  // $db = new PDO('sqlite:C:\xampp\htdocs\dashboard-backend\ytDashboardDB.sqlite');
  $db = new PDO('sqlite:..\db\ytDashboardDB.sqlite');
  // $db = new PDO('sqlite:/var/www/media_assets/public/yt-dashboard/db/ytDashboardDB.sqlite');


  $campID = $_GET['id'];
  if (!$campID) {
    header("Location: ../#dashboardCampaign");
  }

  $userName = $_SESSION['admin_name'];

  $query1 = "SELECT * FROM adminInfo WHERE admin_name = '$userName'";
  $stmt1 = $db->prepare($query1);
  $stmt1->execute();
  $userInfoRes = $stmt1->fetch(PDO::FETCH_ASSOC);

  $stmt2 = $db->prepare("SELECT * FROM campaignInfo WHERE camp_id = $campID");
  $stmt2->execute();
  $campHead = $stmt2->fetch(PDO::FETCH_ASSOC);


  if ($userInfoRes) {
    // // *********************** device *************
    // $stmt = $db->prepare("SELECT * FROM deviceAdStats WHERE camp_id = $campID");
    // $stmt->execute();
    // $deviceResults = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // $totalDeviceImpressions = 0;
    // $totalDeviceClicks = 0;
    // $totalDeviceCost = 0;


    // $deviceTable = "";
    // foreach ($deviceResults as $row) {

    //   $impressions = number_format(($row["d_impressions"]));
    //   $clicks = number_format(($row["d_clicks"]));
    //   $cost = number_format(($row["d_cost"]), 2);


    //   $b = <<<STR
    //     <tr>
    //     <td style="max-width: 100px;min-width: 50px;" class="pdLeft20">{$row["device_type"]}</td>
    //     <td class=" d-xl-table-cell">{$impressions}</td>
    //     <td class=" d-xl-table-cell">{$clicks}</td>
    //     <td class=" d-md-table-cell">{$cost}</td>
    //   </tr>
    //   STR;;
    //   $deviceTable = "{$deviceTable} {$b}";

    //   $totalDeviceImpressions += $row["d_impressions"];
    //   $totalDeviceClicks += $row["d_clicks"];
    //   $totalDeviceCost += $row["d_cost"];
    // }
    // // end device ***********


    // // ***************************** Age **********************************
    // $stmt = $db->prepare("SELECT * FROM ageGenderAdStats WHERE camp_id = $campID");
    // $stmt->execute();
    // $ageGenderResults = $stmt->fetchAll(PDO::FETCH_ASSOC);


    // $totalAgeImpressions = 0;

    // $ageTable = "";
    // foreach ($ageGenderResults as $row) {

    //   $impressions = number_format(($row["ag_impressions"]));


    //   $b = <<<STR
    //     <tr>
    //     <td style="max-width: 100px;min-width: 50px;" class="pdLeft20">{$row["age_group"]}</td>
    //     <td class=" d-xl-table-cell">{$row["gender"]}</td>
    //     <td class=" d-xl-table-cell">{$impressions}</td>
    //   </tr>
    //   STR;;
    //   $ageTable = "{$ageTable} {$b}";

    //   $totalAgeImpressions += $row["ag_impressions"];
    // }
    // // end Age ***********

    // // *************** Channel ********************
    // $stmt = $db->prepare("SELECT channel_title, ch_impressions FROM channelAdStats WHERE camp_id = $campID");
    // $stmt->execute();
    // $channelResults = $stmt->fetchAll(PDO::FETCH_ASSOC);


    // $totalChImpressions = 0;

    // $chTable = "";
    // foreach ($channelResults as $row) {

    //   $impressions = number_format(($row["ch_impressions"]));


    //   $b = <<<STR
    //     <tr>
    //     <td style="max-width: 100px;min-width: 50px;" class="pdLeft20">{$row["channel_title"]}</td>
    //     <td class=" d-xl-table-cell">{$impressions}</td>
    //   </tr>
    //   STR;;
    //   $chTable = "{$chTable} {$b}";

    //   $totalChImpressions += $row["ch_impressions"];
    // }
    // // end Age ***********

  } else {
    header("Location: ../");
    exit();
  }
}
?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="shortcut icon" type="image/x-icon" href="//purplepatch.online/assets/ico/favicon.ico">


  <title><?php echo $campHead['camp_title']; ?></title>

  <link href="../css/app.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="//cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.2.4/css/buttons.dataTables.min.css">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="wrapper">
    <nav id="sidebar" class="sidebar js-sidebar">
      <div class="sidebar-content js-simplebar">
        <a class="sidebar-brand" href="index.html">
          <img src="../img/pp_logo/logo_w.png" alt="" srcset="" style="width: 170px;">
        </a>

        <ul class="sidebar-nav">
          <li class="sidebar-item ">
            <a class="sidebar-link" href="../index.php">
              <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
            </a>
          </li>
          <li class="sidebar-item active">
            <a class="sidebar-link" href="../#dashboardCampaign">
              <i class="align-middle" data-feather="bar-chart-2"></i> <span class="align-middle">Campaign</span>
            </a>
          </li>
        </ul>


      </div>
    </nav>

    <div class="main">
      <nav class="navbar navbar-expand navbar-light navbar-bg">
        <a class="sidebar-toggle js-sidebar-toggle">
          <i class="hamburger align-self-center"></i>
        </a>

        <div class="navbar-collapse collapse">
          <ul class="navbar-nav navbar-align">

            <li class="nav-item dropdown">
              <a class="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                <i class="align-middle" data-feather="settings"></i>
              </a>

              <a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                <img src="../img/avatars/uavatar.png" class="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span class="text-dark"><?php echo $userName; ?></span>
              </a>
              <div class="dropdown-menu dropdown-menu-end">

                <a class="dropdown-item" href="../logout.php">Log out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <main class="content">
      <div class="container-fluid p-0">

      </div>
      </main>

      <footer class="footer">
        <div class="container-fluid">
          <div class="row text-muted">
            <div class="col-12 text-center">
              <p class="mb-0">
                COPYRIGHT © 2023 <a class="text-muted" href="https://adminkit.io/" target="_blank"><strong>Purple
                    Patch</strong></a>, All rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>

  <script src="../js/app.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="//cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>

</body>

</html>