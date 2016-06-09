<?php
session_start();
//database information
include("db_connect.php");
//Check the connection
if ($connection->connect_error) {
	die("Connection failed: " . $connection->connect_error);
}

$table = "borrowers";
$student_id = $_SESSION["IDENTIFICATION"];
$data = $_POST["SERIALIZED-ITEMS"];

$statement = "INSERT INTO $table (`borrower`, `items`) VALUES ('$student_id', '$data')";
if($connection->query($statement) === true){
	echo 'success';
}else{
	echo 'Request could not be processed';
}

$connection->close();
?>