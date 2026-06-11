<?php 
session_start();
include("database.php");
$username = $_SESSION['username'];
$sql = "SELECT water_today, water_goal, last_reset FROM users WHERE username='$username'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);

if($row['last_reset'] !== date('Y-m-d')) {
    mysqli_query($conn, "UPDATE users SET water_today=0, last_reset=CURDATE() WHERE username='$username'");
    $row['water_today'] = 0;
}

?>
<!DOCTYPE html>
<html lang="pl">    
<html>
<head>
    <link rel="icon" type="image/svg+xml" href="src/lilia_light.svg"/>
    <meta charset="UTF-8">
    <title>Strona główna</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital
,wght,MONO@0,300..800,1;1,300..800,1&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Titan+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <?php 
    $sql = "SELECT water_today, water_goal FROM users WHERE username='{$_SESSION['username']}'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_assoc($result);
    ?>
    <div class="topbar">
        <div class="twobuttons2">
    <div id="lightdark" style="width:100px; height:100px; cursor:pointer;"></div>
    <div id="notificationButton" style="width:100px; height:100px; cursor:pointer;" title="Notifications off"></div>
</div>  
<a href="logout.php">Log out</a>
</div>
<div class="hello">
    <h1  >Hello <?php echo htmlspecialchars($_SESSION['username']); ?>!</h1>
</div>
    
    <div class="center">
    <img id="water_today_img" src="src/numbers/ml_<?php echo $row['water_today']; ?>.svg">
</div>
    <!--<button class="btn" id="choice">250ml</button><br/>-->
    
    <div class="twobuttons">
       <!-- <div class="LottieButton1">-->
    <div id="subtractWaterButton" style="width: 100px; height: 100px; cursor: pointer;"></div>
    

    <!--<button class="btn" id="subtractWaterButton">-250ml</button>--> 
    
    <div id="addWaterButton" style="width: 100px; height: 100px; cursor: pointer;"  ></div>

</div>
    <!--<button class="btn" id="addWaterButton">+250ml</button><br/>-->
    <div class="center">
   <div id="choice" style="width: 150px; height: 150px; cursor: pointer;"></div> 

</div>
<script>
  const initialWater = <?php echo $row['water_today']; ?>;
</script>
   <script src="lottie.min.js?v=1"></script>
   <script src="count.js?v=1"></script>
    <script src="homepage.js?v=1"></script>
   
    </body>
</html>
