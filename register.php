<?php
include("database.php");


if(isset($_POST['signUp'])){
    $username=filter_input(INPUT_POST,"username",FILTER_SANITIZE_SPECIAL_CHARS);
    $email=filter_input(INPUT_POST,"email",FILTER_SANITIZE_SPECIAL_CHARS);  
    $password=filter_input(INPUT_POST,"password",FILTER_SANITIZE_SPECIAL_CHARS);

    $checkEmail="SELECT * FROM users WHERE email='$email'";
    $result=mysqli_query($conn,$checkEmail);
    
    if(mysqli_num_rows($result)>0){
        header("Location: index.php?error=email_taken&form=signup");
        exit();
exit();
    }
    elseif(mysqli_num_rows(mysqli_query($conn,"SELECT * FROM users WHERE username='$username'"))>0){
        header("Location: index.php?error=username_taken&form=signup");
        exit();
exit();
    }
    else{
        $hash=password_hash($password,PASSWORD_DEFAULT);
           $sql="INSERT INTO users(username, email, password, reg_date) 
    VALUES ('$username','$email','$hash', NOW())";
    try{
    mysqli_query($conn, $sql);
    header("Location: index.php?error=register_success&form=signup");
    exit();
    }
    catch(mysqli_sql_exception $e){
        header("Location: index.php?error=db_error&form=signup");
        exit();
    }
}
}
if(isset($_POST['logIn'])){
    $username=filter_input(INPUT_POST,"username",FILTER_SANITIZE_SPECIAL_CHARS);
    $password=filter_input(INPUT_POST,"password",FILTER_SANITIZE_SPECIAL_CHARS);
    //$hash=password_hash($password,PASSWORD_DEFAULT);

     $sql = "SELECT * FROM users WHERE username='$username'";
    $result=mysqli_query($conn,$sql);

    if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
       if(password_verify($password, $row['password'])){
            session_start();
            $_SESSION['username'] = $row['username'];
            header("Location: homepage.php");
            exit();
        } else {
            header("Location: index.php?error=wrong_password&form=login");
            exit();
        }
    } 
    else {
        header("Location: index.php?error=wrong_password&form=login");
        exit();
    
}
}
?>