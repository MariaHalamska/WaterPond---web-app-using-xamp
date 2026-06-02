<?php 
session_start();
include("database.php");
$username = $_SESSION['username'];
$sql = "SELECT water_today, water_goal, last_reset FROM users WHERE username='$username'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);

// reset jeśli ostatni reset był wczoraj lub wcześniej
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
    <div id="lightdark" style="width:100px; height:100px; cursor:pointer;"></div>
<a href="logout.php">Log out</a>
    <h1>Hello <?php echo htmlspecialchars($_SESSION['username']); ?>!</h1>
    
    <br/>
    <h2 class="center"><span id="water_today" > <?php echo htmlspecialchars($row['water_today']); ?></span>/<?php echo htmlspecialchars($row['water_goal']); ?> ml
</h2>

    <!--<button class="btn" id="choice">250ml</button><br/>-->
    <br/>
    <div class="twobuttons">
    <div id="subtractWaterButton" style="width:100px; height:100px; cursor:pointer;"></div>
    <!--<button class="btn" id="subtractWaterButton">-250ml</button>--> 
    <div id="addWaterButton" style="width:100px; height:100px; cursor:pointer;"></div>
</div>
    <!--<button class="btn" id="addWaterButton">+250ml</button><br/>-->
    <div class="center">
   <div id="choice"  style="width:150px; height:200px; cursor:pointer;"></div> </div>
   <script src="lottie.min.js"></script>
    <script src="homepage.js"></script>
   
    </body>
</html>
