<?php
include('./connection.php');
    if (isset($_POST['name'])) {
        // Get form data
        $name  = $_POST['name'];
        $email = $_POST['email'];
        $phoneNo = $_POST['phoneNo'];

        // SQL query to insert data
        $sql = "INSERT INTO `contact_details` (`Name`, `Email_ID`, `Phone_No`) VALUES ('$name', '$email', '$phoneNo');";

        // Execute query
        if (mysqli_query($connection, $sql)) {
          echo `<script>alert('Form Data Submitted Successfully');</script>`;
        } else {
            echo "<script>alert('Network error');</script>";
        }

        // Close the connection
        mysqli_close($connection);
    }
    ?>