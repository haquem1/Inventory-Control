<?php

    //database information
    include("../../scripts/db_connect.php");
    //Check the connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }
    
    $table = "categories";
    $statement = "SELECT * FROM $table";
    $result = $connection->query($statement);
    $number_rows = $result->num_rows;
    if($number_rows != 0){
        echo '<option value="" disabled selected></option>';
        while($row = $result->fetch_assoc()){
            create_dropdown_category($row["category"]);
        }
    }else{
        create_dropdown_category("Oops, something went wrong");
    }
    

    function create_dropdown_category($category){
        $cap = ucwords(str_replace("_", " ", $category));
        echo '<option class="select_option" value="'.$category.'">'.$cap.'</option>';
    }
?>