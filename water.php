<?php
session_start();
include("database.php");

$data = json_decode(file_get_contents('php://input'), true);
$water = (int)$data['water'];
$username = $_SESSION['username'];

mysqli_query($conn, "UPDATE users SET water_today='$water' WHERE username='$username'");
?>