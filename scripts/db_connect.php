<?php
        
    // TESTING SERVER
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "vidteam_inventory";

	// ANA's server
//	$servername = "lemonaide.ampenaranda.com";
//    $username = "lemonvidteam";
//    $password = "Gainz_keytosuccess!";
//    $dbname = "vidteam_inventory";

    // create connection
    $connection = new mysqli($servername, $username, $password, $dbname);

?>