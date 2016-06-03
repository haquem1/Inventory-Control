<?php
    //database information
    include("../../scripts/db_connect.php");
    //Check the connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

    $row = $_POST['ITEM-ROW'];
    $category = $_POST['ITEM-CATEGORY'];
    $value = $_POST['ITEM-VALUE'];
    
    $table = "inventory";
    $statement = "UPDATE $table SET $category='$value' WHERE identification='$row'";
    if($connection->query($statement) === true){
        echo 'Update was successful';
    }else{
        echo 'Error';
    }

    $connection->close();
?>