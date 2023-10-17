<?php
session_start();
if (!isset($_SESSION['username']) || !$_SESSION['username']) {
  header("Location: ../login/");
  exit();
} else {

  $db = new PDO('sqlite:C:\xampp\htdocs\dashboard-backend\ytDashboardDB.sqlite');
  // $db = new PDO('sqlite:..\db\ytDashboardDB.sqlite');
  // $db = new PDO('sqlite:/var/www/media_assets/public/yt-dashboard/db/ytDashboardDB.sqlite');


  $campID = $_GET['id'];
  if (!$campID) {
    header("Location: ../#dashboardCampaign");
  }

  $userName = $_SESSION['username'];

  $query1 = "SELECT * FROM userInfo WHERE user_name = '$userName'";
  $stmt1 = $db->prepare($query1);
  $stmt1->execute();
  $userInfoRes = $stmt1->fetch(PDO::FETCH_ASSOC);

  $stmt2 = $db->prepare("SELECT * FROM campaignInfo WHERE camp_id = $campID");
  $stmt2->execute();
  $campHead = $stmt2->fetch(PDO::FETCH_ASSOC);


  if ($userInfoRes['user_id'] == $campHead['user_id']) {
    // *********************** device *************
    $stmt = $db->prepare("SELECT * FROM deviceAdStats WHERE camp_id = $campID");
    $stmt->execute();
    $deviceResults = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $totalDeviceImpressions = 0;
    $totalDeviceClicks = 0;
    $totalDeviceCost = 0;


    $deviceTable = "";
    foreach ($deviceResults as $row) {

      $impressions = number_format(($row["d_impressions"]));
      $clicks = number_format(($row["d_clicks"]));
      $cost = number_format(($row["d_cost"]), 2);


      $b = <<<STR
        <tr>
        <td style="max-width: 100px;min-width: 50px;" class="pdLeft20">{$row["device_type"]}</td>
        <td class=" d-xl-table-cell">{$impressions}</td>
        <td class=" d-xl-table-cell">{$clicks}</td>
        <td class=" d-md-table-cell">{$cost}</td>
      </tr>
      STR;;
      $deviceTable = "{$deviceTable} {$b}";

      $totalDeviceImpressions += $row["d_impressions"];
      $totalDeviceClicks += $row["d_clicks"];
      $totalDeviceCost += $row["d_cost"];
    }
    // end device ***********


    // ***************************** Age **********************************
    $stmt = $db->prepare("SELECT * FROM ageGenderAdStats WHERE camp_id = $campID");
    $stmt->execute();
    $ageGenderResults = $stmt->fetchAll(PDO::FETCH_ASSOC);


    $totalAgeImpressions = 0;
    $totalAgeClicks = 0;

    $ageTable = "";
    foreach ($ageGenderResults as $row) {

      $impressions = number_format(($row["ag_impressions"]));
      $clicks = number_format(($row["ag_clicks"]));
      $ctr = number_format(($row["ag_clicks"] / $row["ag_impressions"]) * 100, 3);

      $b = <<<STR
        <tr>
        <td style="max-width: 100px;min-width: 50px;" class="pdLeft20">{$row["age_group"]}</td>
        <td class=" d-xl-table-cell">{$row["gender"]}</td>
        <td class=" d-xl-table-cell">{$impressions}</td>
        <td class=" d-xl-table-cell">{$clicks}</td>
        <td class=" d-xl-table-cell">{$ctr}%</td>
      </tr>
      STR;;
      $ageTable = "{$ageTable} {$b}";

      $totalAgeImpressions += $row["ag_impressions"];
      $totalAgeClicks += $row["ag_clicks"];
    }
    // end Age ***********

    // *************** Channel ********************
    $stmt = $db->prepare("SELECT channel_title, ch_impressions FROM channelAdStats WHERE camp_id = $campID");
    $stmt->execute();
    $channelResults = $stmt->fetchAll(PDO::FETCH_ASSOC);


    $totalChImpressions = 0;
    $chartCounter = 0;
    $chartsData = [];

    $chTable = "";
    foreach ($channelResults as $row) {

      $impressions = number_format(($row["ch_impressions"]));
      if ($chartCounter < 10) {
        $chartsData[$row["channel_title"]] = $row["ch_impressions"];
        $chartCounter++;
      }

      $b = <<<STR
        <tr>
        <td style="max-width: 100px;min-width: 50px;" class="pdLeft20">{$row["channel_title"]}</td>
        <td class=" d-xl-table-cell">{$impressions}</td>
      </tr>
      STR;;
      $chTable = "{$chTable} {$b}";

      $totalChImpressions += $row["ch_impressions"];
    }
    // end Channel ***********

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
        <a class="sidebar-brand" href="../">
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

          <h1 class="h3 mb-3"><strong class="camp_header_title"><?php echo $campHead['camp_title']; ?></strong></h1>

          <div class="row">
            <div class="col-xl-12 col-xxl-12 d-flex">
              <div class="w-100">
                <!-- Upper Details -->
                <div class="row">

                  <div class="col-sm-4">
                    <!-- Impressions -->
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Impressions</h5>
                          </div>
                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="activity"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3 totalImpressions"><?php echo number_format($campHead['camp_impressions']); ?></h1>
                      </div>
                    </div>
                    <!-- Tracked Ads -->
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Tracked Ads</h5>
                          </div>
                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="box"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3 totalCampaign"><?php echo number_format($campHead['camp_trackedAds']); ?></h1>
                      </div>
                    </div>

                    <!-- Complete Views -->
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Complete Views</h5>
                          </div>
                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="disc"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3 totalCampaign"><?php echo number_format($campHead['camp_trueView']); ?></h1>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <!-- Clicks -->
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Clicks</h5>
                          </div>
                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="feather"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3 totalClicks"><?php echo number_format($campHead['camp_clicks']); ?></h1>
                      </div>
                    </div>
                    <!-- CTR -->
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">CTR</h5>
                          </div>
                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="package"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3"><span class="totalCTR"><?php echo number_format(($campHead["camp_clicks"] / $campHead["camp_impressions"]) * 100, 3); ?></span> %</h1>
                      </div>
                    </div>
                    <!-- CPV -->
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">CPV</h5>
                          </div>
                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="package"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3"><span class="totalCTR">BDT <?php echo number_format(($campHead["camp_cost"] / $campHead["camp_trueView"]), 3); ?></span></h1>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <!-- spend -->
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Spend</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="dollar-sign"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3">BDT <span class="totalCost"><?php echo number_format($campHead['camp_cost'], 2); ?></span></h1>
                      </div>
                    </div>
                    <!-- eCPM -->
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">eCPM</h5>
                          </div>
                          <div class="col-auto">
                            <div class="stat text-primary">
                              <i class="align-middle" data-feather="briefcase"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3">BDT <span class="total_eCPM"><?php echo number_format(($campHead["camp_cost"] / $campHead["camp_impressions"]) * 1000, 2); ?></span></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!-- Device Stats -->
          <div class="row deviceTableRow">
            <div class="col-12  d-flex">
              <div class="card flex-fill" style="overflow-x: auto;">
                <div class="card-header">
                  <h5 class="card-title mb-0" style="font-size: 20px;">Device Stats</h5>
                </div>
                <table class="table table-hover table-striped my-0 deviceTable_full">
                  <thead>
                    <tr>
                      <th class=" d-xl-table-cell pdLeft20">Device Type</th>
                      <th class=" d-xl-table-cell">Impressions</th>
                      <th class=" d-xl-table-cell">Clicks</th>
                      <th class=" d-md-table-cell">Spend</th>
                    </tr>
                  </thead>
                  <tbody class="deviceTable_body">
                    <?php echo $deviceTable; ?>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="1" class="pdLeft20">Total</th>
                      <th><?php echo $totalDeviceImpressions; ?></th>
                      <th><?php echo $totalDeviceClicks; ?></th>
                      <th><?php echo number_format($totalDeviceCost, 2); ?></th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <!-- Age Gender Stats -->
          <div class="row ageTableRow">
            <div class="col-12  d-flex">
              <div class="card flex-fill" style="overflow-x: auto;">
                <div class="card-header">

                  <h5 class="card-title mb-0" style="font-size: 20px;">Age Gender Stats</h5>
                </div>
                <table class="table table-hover table-striped my-0 ageGenderTable_full" style="max-height: 500px !important; overflow: auto;">
                  <thead>
                    <tr>
                      <th class=" d-xl-table-cell pdLeft20">Age Group</th>
                      <th class=" d-xl-table-cell">Gender</th>
                      <th class=" d-xl-table-cell">Impressions</th>
                      <th class=" d-xl-table-cell">Clicks</th>
                      <th class=" d-xl-table-cell">CTR</th>
                    </tr>
                  </thead>
                  <tbody class="ageGenderTable_body">
                    <?php echo $ageTable; ?>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="2" class="pdLeft20">Total (With overlap)</th>
                      <th><?php echo number_format($totalAgeImpressions); ?></th>
                      <th><?php echo number_format($totalAgeClicks); ?></th>
                      <th></th>

                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <!-- Channel Charts -->
          <div class="row" id="chartDiv">
            <div class="col-12  d-flex">
              <div class="card flex-fill" style="overflow-x: auto;">
                <div class="card-header">

                  <!-- <h5 class="card-title mb-0" style="font-size: 20px;">Chart</h5> -->
                </div>
                <div class="chartContainer">
                  <div id="channelCharts">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Channel Stats -->
          <div class="row channelTableRow">
            <div class="col-12  d-flex">
              <div class="card flex-fill" style="overflow-x: auto;">
                <div class="card-header">

                  <h5 class="card-title mb-0" style="font-size: 20px;">Channel Stats</h5>
                </div>
                <table class="table table-hover table-striped my-0 channelTable_full" style="max-height: 500px !important; overflow: auto;">
                  <thead>
                    <tr>
                      <th class=" d-xl-table-cell pdLeft20">Channel Title</th>
                      <th class=" d-xl-table-cell">Impressions</th>
                    </tr>
                  </thead>
                  <tbody class="channelTable_body">
                    <?php echo $chTable; ?>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="1" class="pdLeft20">Total (Top Channels)</th>
                      <th><?php echo number_format($totalChImpressions); ?></th>
                    </tr>
                  </tfoot>
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
                COPYRIGHT © 2023 <a class="text-muted" href="#" target="_blank"><strong>Purple
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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
  <script src="https://cdn.datatables.net/buttons/1.2.4/js/buttons.html5.min.js"></script>
  <script src="https://cdn.datatables.net/buttons/1.2.4/js/dataTables.buttons.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
  <script>
    $('.deviceTable_full').DataTable({
      "lengthChange": false,
      "paging": false,
      "info": false,
      "filter": false
    });
    $('.ageGenderTable_full').DataTable();
    $('.channelTable_full').DataTable({
      "pageLength": 15,
      "order": [
        [1, "desc"]
      ],
      dom: 'Bfrtip',
      // dom: 'Blfrtip',
      buttons: [{
        extend: 'excel',
        text: 'Save as Excel',
        footer: true
      }]
    });
    const chartsData = <?php echo json_encode($chartsData); ?>;
    // console.log(chartsData)

    if (Object.keys(chartsData).length) {
      document.querySelector('#chartDiv').style.display = 'flex';
      document.querySelector('.channelTableRow').style.display = 'flex';

      yData = []
      xData = []
      for (const key in chartsData) {
        console.log(chartsData[key])

        yData.push(chartsData[key])
        xData.push(key)
      }
      var options = {
        plotOptions: {
          bar: {
            columnWidth: '40%',
            distributed: true
          }
        },
        chart: {
          type: 'bar',
          height: '400px'
        },
        series: [{
          name: 'Impressions',
          data: yData
        }],
        xaxis: {
          categories: xData
        }
      }

      var chart = new ApexCharts(document.querySelector("#channelCharts"), options);

      chart.render();
    } else {
      document.querySelector('#chartDiv').style.display = 'none';

    }


    let deviceTableExist = true;
    if (deviceTableExist) {
      document.querySelector('.deviceTableRow').style.display = 'flex';
    } else {
      document.querySelector('.deviceTableRow').style.display = 'none';
    }
    let ageTableExist = true;
    if (ageTableExist) {
      document.querySelector('.ageTableRow').style.display = 'flex';
    } else {
      document.querySelector('.ageTableRow').style.display = 'none';
    }
  </script>
</body>

</html>