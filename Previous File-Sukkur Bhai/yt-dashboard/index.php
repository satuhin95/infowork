<?php
session_start();
if (!isset($_SESSION['username']) || !$_SESSION['username']) {
  header("Location: login/");
  exit();
} else {
  // $db = new PDO('sqlite:C:\xampp\htdocs\xampp-projects\yt-dashboard\Backend\dashboard-backend\ytDashboardDB.sqlite');


  // $db = new PDO('sqlite:db\ytDashboardDB.sqlite');
  $db = new PDO('sqlite:/var/www/media_assets/public/yt-dashboard/db/ytDashboardDB.sqlite');


  $userName = $_SESSION['username'];

  $query1 = "SELECT * FROM userInfo WHERE user_name = '$userName'";
  $stmt1 = $db->prepare($query1);
  $stmt1->execute();
  $userInfoRes = $stmt1->fetch(PDO::FETCH_ASSOC);


  $query = "SELECT * FROM campaignInfo WHERE user_id = " . $userInfoRes['user_id'];
  $stmt = $db->prepare($query);
  $stmt->execute();
  $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

  $totalImpressions = 0;
  $totalClicks = 0;
  $totalCost = 0;
  $totalCampaign = 0;
  $totalTrueViews = 0;


  $a = "";
  foreach ($results as $row) {

    $impressions = number_format(($row["camp_impressions"]));
    $clicks = number_format(($row["camp_clicks"]));
    $cost = number_format(($row["camp_cost"]), 2);
    $budget = number_format(($row["camp_budget"]));
    $ctr = number_format(($row["camp_clicks"] / $row["camp_impressions"]) * 100, 3);
    $eCPM = number_format(($row["camp_cost"] / $row["camp_impressions"]) * 1000, 2);
    $trueView = number_format(($row["camp_trueView"]));
    $cpv = number_format(($row["camp_cost"] / $row["camp_trueView"]), 3);
    $trackedAds = number_format(($row["camp_trackedAds"]));
    if ($trueView == 0) {
      $trueView = '-';
    }

    $b = <<<STR
      <tr onclick = "window.location.href = `campaign/?id={$row["camp_id"]}`" style="cursor:pointer;">
      <td class="pdLeft20">{$row["camp_title"]}</td>
      <td class=" d-xl-table-cell">{$impressions}</td>
      <td class=" d-xl-table-cell">{$clicks}</td>
      <td class=" d-xl-table-cell">{$ctr}%</td>
      <td class=" d-xl-table-cell">{$trackedAds}</td>
      <td class=" d-md-table-cell">{$trueView}</td>
      <td class=" d-md-table-cell">{$cpv}</td>
      <td class=" d-xl-table-cell">{$cost}</td>
      <td class=" d-xl-table-cell">{$budget}</td>
      <td class=" d-md-table-cell">{$eCPM}</td>
    </tr>
    STR;;
    $a = "{$b} {$a}";

    $totalImpressions += $row["camp_impressions"];
    $totalClicks += $row["camp_clicks"];
    $totalCost += $row["camp_cost"];
    $totalTrueViews += $row["camp_trueView"];
    $totalCampaign++;
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

  <title>Dashboard</title>

  <link href="css/app.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link rel="stylesheet" href="//cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.2.4/css/buttons.dataTables.min.css">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="css/combinedStyle.css">
</head>

<body>
  <div class="wrapper">
    <nav id="sidebar" class="sidebar js-sidebar">
      <div class="sidebar-content js-simplebar">
        <a class="sidebar-brand" href="index.php">
          <img src="./img/pp_logo/logo_w.png" alt="" srcset="" style="width: 170px;">
        </a>

        <ul class="sidebar-nav">


          <li class="sidebar-item active">
            <a class="sidebar-link" href="index.php">
              <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
            </a>
          </li>
          <li class="sidebar-item">
            <a class="sidebar-link" href="campaign/">
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
                <img src="img/avatars/uavatar.png" class="avatar img-fluid rounded me-1" alt="user-avatar" />
                <!-- <span class="material-symbols-outlined">account_circle </span> -->
                <span class="text-dark"><?php echo $userName; ?></span>
              </a>
              <div class="dropdown-menu dropdown-menu-end">

                <a class="dropdown-item" href="logout.php">Log out</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <main class="content">
        <div class="container-fluid p-0">


          <div class="row">
            <div class="col-xl-12 col-xxl-12 d-flex">
              <div class="w-100">
                <div class="row">
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Impressions</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary ib-color-1">
                              <i class="align-middle" data-feather="activity"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3 totalImpressions"><?php echo number_format($totalImpressions); ?></h1>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Total Campaign</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary ib-color-2">
                              <i class="align-middle" data-feather="server"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3 totalCampaign"><?php echo $totalCampaign; ?></h1>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Total Complete Views</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary ib-color-3">
                              <i class="align-middle" data-feather="eye"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3 totalCampaign"><?php echo number_format($totalTrueViews); ?></h1>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Clicks</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary ib-color-4">
                              <i class="align-middle" data-feather="send"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3 totalClicks"><?php echo number_format($totalClicks); ?></h1>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">CTR</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary ib-color-5">
                              <i class="align-middle" data-feather="trello"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3"><span class="totalCTR"><?php echo number_format(($totalClicks / $totalImpressions) * 100, 3); ?></span> %</h1>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">CPV</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary ib-color-15">
                              <i class="align-middle" data-feather="film"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3"><span class="totalCTR">BDT <?php echo number_format(($totalCost / $totalTrueViews), 3); ?></span></h1>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Spend</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary ib-color-7">
                              <i class="align-middle" data-feather="dollar-sign"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3">BDT <span class="totalCost"><?php echo number_format($totalCost, 2); ?></span></h1>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">eCPM</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary ib-color-8">
                              <i class="align-middle" data-feather="briefcase"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3">BDT <span class="total_eCPM"><?php echo number_format(($totalCost / $totalImpressions) * 1000, 2); ?></span></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
          </div>
          <div class="row" id="dashboardCampaign">
            <div class="col-12  d-flex">
              <div class="card flex-fill" style="overflow-x: auto;">
                <div class="card-header">

                  <h5 class="card-title mb-0">Campaigns</h5>
                </div>
                <table class="table table-striped table-hover my-0 campaignTable_full">
                  <thead>
                    <tr>
                      <th class="pdLeft20">Name</th>
                      <th class=" d-xl-table-cell">Impressions</th>
                      <th class=" d-xl-table-cell">Clicks</th>
                      <th class=" d-xl-table-cell">CTR</th>
                      <th class=" d-xl-table-cell">Tracked Ads</th>
                      <th class=" d-xl-table-cell">Complete Views(Video)</th>
                      <th class=" d-xl-table-cell">CPV (BDT)</th>
                      <th class=" d-md-table-cell">Spend</th>
                      <th class=" d-md-table-cell">Budget</th>
                      <th class=" d-md-table-cell">eCPM (BDT)</th>
                    </tr>
                  </thead>
                  <tbody class="campaignTable_body">
                    <?php echo $a; ?>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
      </main>

      <footer class="footer">
        <div class="container-fluid">
          <div class="row text-muted">
            <div class="col-12 text-center">
              <p class="mb-0">
                COPYRIGHT © 2023 <a class="text-muted" href="https://purplepatch.online" target="_blank">
                  <strong>Purple Patch</strong></a>, All rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>

  <script src="js/app.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="//cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
  <script src="https://cdn.datatables.net/buttons/1.2.4/js/buttons.html5.min.js"></script>
  <script src="https://cdn.datatables.net/buttons/1.2.4/js/dataTables.buttons.min.js"></script>
  <script src="https://cdn.datatables.net/plug-ins/1.13.4/api/sum().js"></script> -->

  <script>
    $('.campaignTable_full').DataTable({
      order: [],
      "lengthChange": false,
      "paging": true,
      "info": false,
      "filter": true
    });
  </script>
</body>

</html>