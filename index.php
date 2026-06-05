<?php
include("database.php");

?>
<?php
$messages = [
    'username_taken'   => 'Username already taken, choose a different one!',
    'email_taken'      => 'You already have an account with this email!',
    'wrong_password'   => 'Wrong username or password!',
    'register_success' => 'Registration successful! You can now log in.',
    'db_error'         => 'Something went wrong, try again later.',
];

$error = $_GET['error'] ?? $_GET['success'] ?? null;
$message = isset($error) ? ($messages[$error] ?? null) : null;
?>
<!DOCTYPE html>
<html lang="pl">
<html>
<head>
    <link rel="icon" type="image/svg+xml" href="src/lilia_light.svg"/>
    <meta charset="UTF-8">
    <title>Sign Up or Log In</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght,MONO@0,300..800,1;1,300..800,1&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Titan+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css" />
</head>
<body>

    <div class="container" id="signup" >
    <h1>Sign Up  </h1>
    <form action="register.php" method="post">
            <p>username:</p>
        <input type="text" id="username" name="username"  required><br/>
            <p>email: </p>
        <input type="email" id="email" name="email" required><br/>
            <p>password: </p>
        <input type="password" id="password" name="password" required><br/>
        <input class="btn" id="RegisterButton" type="submit" name="signUp" value="Sign Up">
    </form>
   <?php if($message): ?>
    <p class="form-message <?= str_contains($error, 'success') ? 'success' : 'error' ?>">
        <?= htmlspecialchars($message) ?>
    </p>
<?php endif; ?>
    <p>Already have an account?</p>
<button class="btn" id="signInButton">Log In</button>
</div>


<div class="container" id="login"> 
        <h1>Log in  </h1>
    <form action="register.php" method="post">
            <p>username:</p>
        <input type="text" id="username" name="username" required><br/>
            <p>password: </p>
        <input type="password" id="password" name="password" required><br/>
        <input class="btn"id="logInButton" type="submit" name="logIn" value="Log In">
    </form>
    <?php if($message): ?>
    <p class="form-message <?= str_contains($error, 'success') ? 'success' : 'error' ?>">
        <?= htmlspecialchars($message) ?>
    </p>
<?php endif; ?>
    <p>Don't have an account?</p>
<button class="btn"id="signUpButton">Sign Up</button>
</div>

<script src="script.js"></script>

</body>
</html>

