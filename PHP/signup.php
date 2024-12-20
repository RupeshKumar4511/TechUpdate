<?php
include('./connection.php');
try{
    if (isset($_POST['setusername'])) {
        // Get form data
        $username  = $_POST['setusername'];
        $password = $_POST['setuserpassword'];
        

        // SQL query to insert data
        $sql = "INSERT INTO `credentials` (`User_Name`, `Password` ) VALUES ('$username', '$password');";

        // Execute query
        if (mysqli_query($connection, $sql)) {
            echo json_encode(["message" => "OTP verified successfully."]);
        } else {
            http_response_code(400); // Set HTTP status to 400 for client error
            echo json_encode(["error" => "Incorrect OTP"]);
            exit();
        }

        // Close the connection
        mysqli_close($connection);
    }

  }catch(Exception $e){
    http_response_code(500); // Server error
    echo json_encode(["error" => "Message could not be processed: " . $e->getMessage()]);
  }
    ?>