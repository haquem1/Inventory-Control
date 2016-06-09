<?php
    //database information
    include("../../scripts/db_connect.php");
    //Check the connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }

	$row = $_POST['ITEM-ROW'];
    $table = "inventory";
	$statement = "DELETE FROM $table WHERE identification='$row'";

    if($connection->query($statement) === true){
        echo 'Item was deleted';
    }else{
        echo 'Error';
    }

    $connection->close();
?>