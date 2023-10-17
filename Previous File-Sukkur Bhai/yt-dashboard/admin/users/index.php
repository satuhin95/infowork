<?php
session_start();
if (!isset($_SESSION['admin_name']) || !$_SESSION['admin_name']) {
  header("Location: ../login/");
  exit();
}

// $db = new PDO('sqlite:..\db\ytDashboardDB.sqlite');
// $db = new PDO('sqlite:C:\xampp\htdocs\dashboard-backend\ytDashboardDB.sqlite');
$db = new PDO('sqlite:/var/www/media_assets/public/yt-dashboard/db/ytDashboardDB.sqlite');

if ($_GET) {
  $userID = $_GET['id'];
} else {
  $userID = null;
}


$userName = $_SESSION['admin_name'];
$query1 = "SELECT * FROM adminInfo WHERE admin_name = '$userName'";
$stmt1 = $db->prepare($query1);
$stmt1->execute();
$userInfoRes = $stmt1->fetch(PDO::FETCH_ASSOC);

if (!$userInfoRes) {
  header("Location: ../");
  exit();
}

class User
{
  public $user_name;
  public $user_id;
  public $total_camp;
  public $total_budget;
  public $total_spend;

  function __construct($user_id, $user_name, $total_camp, $total_budget, $total_spend)
  {
    $this->user_id = $user_id;
    $this->user_name = $user_name;
    $this->total_camp = $total_camp;
    $this->total_budget = $total_budget;
    $this->total_spend = $total_spend;
  }
}

function findUserById($id, $array)
{
  // $array = array( /* your array of objects */);
  foreach ($array as $element) {
    if ($id == $element->user_id) {
      // return $element;
      return true;
    }
  }
  return false;
}
function updateUserById($id, $newUser, $array)
{
  // $array = array( /* your array of objects */);
  foreach ($array as $element) {
    if ($id == $element->user_id) {
      $element->total_camp = $element->total_camp + $newUser->total_camp;
      $element->total_budget = $element->total_budget + $newUser->total_budget;
      $element->total_spend = $element->total_spend + $newUser->total_spend;
    }
  }
}

// *********************** device *************
$stmt = $db->prepare("SELECT userInfo.user_id,userInfo.user_name,userInfo.user_password,campaignInfo.camp_id,campaignInfo.camp_title,campaignInfo.camp_impressions,	campaignInfo.camp_clicks,	campaignInfo.camp_trackedAds,	campaignInfo.camp_trueView	,campaignInfo.camp_cost	,campaignInfo.camp_budget FROM userInfo left join campaignInfo on userInfo.user_id = campaignInfo.user_id order by userInfo.user_id desc");
$stmt->execute();
$allCamp = $stmt->fetchAll(PDO::FETCH_ASSOC);

$allUserData = [];

foreach ($allCamp as $row) {
  $noOfCamp = ($row["camp_id"]) ? 1 : 0;
  $newBudget = ($row["camp_budget"]) ? ($row["camp_budget"]) : 0;
  $newCost = ($row["camp_cost"]) ? ($row["camp_cost"]) : 0;
  // echo $row["user_id"];
  $newUser = new User($row["user_id"], $row["user_name"], $noOfCamp, $newBudget, $newCost);
  if (!(findUserById($row["user_id"], $allUserData))) {
    array_push($allUserData, $newUser);
  } else {
    updateUserById($row["user_id"], $newUser, $allUserData);
  }
}

// foreach ($allCamp as $row) {
//   array_push($allUserData, $row);
// }

$totalCamp = 0;
$totalUser = 0;
$totalBudget = 0;
$totalSpend = 0;


$allUserTable = "";
foreach ($allUserData as $row) {

  $budget = number_format(($row->total_budget));
  $cost = number_format(($row->total_spend), 2);

  $totalUser++;
  $totalCamp = $totalCamp + $row->total_camp;
  $totalBudget = $totalBudget + $row->total_budget;
  $totalSpend = $totalSpend + $row->total_spend;

  $b = <<<STR
        <tr>
        <td style="max-width: 100px;min-width: 50px;" class="pdLeft20">{$row->user_name}</td>
        <td class=" d-xl-table-cell">{$row->total_camp}</td>
        <td class=" d-xl-table-cell">{$cost}</td>
        <td class=" d-md-table-cell">{$budget}</td>
      </tr>
      STR;;
  $allUserTable = "{$allUserTable} {$b}";
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


  <!-- <title>User</title> -->

  <title><?php echo (!$userID) ? "Users" : $userID; ?></title>

  <link href="../css/app.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="//cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.2.4/css/buttons.dataTables.min.css">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="../css/combinedStyle.css">
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
          <li class="sidebar-item ">
            <a class="sidebar-link" href="../#dashboardCampaign">
              <i class="align-middle" data-feather="bar-chart-2"></i> <span class="align-middle">Campaign</span>
            </a>
          </li>
          <li class="sidebar-item active">
            <a class="sidebar-link" href="users/">
              <i class="align-middle" data-feather="users"></i> <span class="align-middle">Users</span>
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

          <div class="row">
            <div class="col-xl-12 col-xxl-12 d-flex">
              <div class="w-100">
                <div class="row">

                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Total Users</h5>
                          </div>
                          <div class="col-auto">
                            <div class="stat text-primary ib-color-1">
                              <i class="align-middle" data-feather="users"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3 totalImpressions"><?php echo number_format($totalUser); ?></h1>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Total Campaign</h5>
                          </div>
                          <div class="col-auto">
                            <div class="stat text-primary ib-color-3">
                              <i class="align-middle" data-feather="aperture"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3 totalClicks"><?php echo number_format($totalCamp); ?></h1>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="row">
                          <div class="col mt-0">
                            <h5 class="card-title">Total Budget</h5>
                          </div>

                          <div class="col-auto">
                            <div class="stat text-primary ib-color-5">
                              <i class="align-middle" data-feather="dollar-sign"></i>
                            </div>
                          </div>
                        </div>
                        <h1 class="mt-1 mb-3">BDT <span class="totalCost"><?php echo number_format($totalBudget); ?></span></h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="create-user/"><button class="editBtn">Add New User</button></a>
          <!-- User Stats -->
          <div class="row">
            <div class="col-12  d-flex">
              <div class="card flex-fill" style="overflow-x: auto;">
                <div class="card-header">
                  <h5 class="card-title mb-0" style="font-size: 20px;">All Users</h5>
                </div>
                <table class="table table-hover table-striped my-0 allUserTable_full">
                  <thead>
                    <tr>
                      <th class=" d-xl-table-cell pdLeft20">User Name</th>
                      <th class=" d-xl-table-cell">Total Campaign</th>
                      <th class=" d-md-table-cell">Total Spend</th>
                      <th class=" d-xl-table-cell">Total Budget</th>
                    </tr>
                  </thead>
                  <tbody class="allUserTable_body">
                    <?php echo $allUserTable; ?>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="1" class="pdLeft20">Total(All User)</th>
                      <th><?php echo $totalCamp; ?></th>
                      <th><?php echo number_format($totalSpend, 2); ?></th>
                      <th><?php echo number_format($totalBudget, 2); ?></th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <!-- <div class="row">
            <?php echo '<pre>';
            print_r($allUserData);
            echo '</pre>'; ?>
          </div> -->

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
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
  <script src="https://cdn.datatables.net/buttons/1.2.4/js/buttons.html5.min.js"></script>
  <script src="https://cdn.datatables.net/buttons/1.2.4/js/dataTables.buttons.min.js"></script>

  <script>
    $('.allUserTable_full').DataTable({
      "lengthChange": false,
      "paging": true,
      "info": false,
      "filter": false,
      "order": []
    });
    // $('.ageGenderTable_full').DataTable();
    // $('.channelTable_full').DataTable({
    //   "pageLength": 15,
    //   "order": [
    //     [1, "desc"]
    //   ],
    //   dom: 'Bfrtip',
    //   // dom: 'Blfrtip',
    //   buttons: [{
    //     extend: 'excel',
    //     text: 'Save as Excel',
    //     footer: true
    //   }]
    // });
  </script>
</body>

</html>