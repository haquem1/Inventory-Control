<?php

    //database information
    include("../scripts/db_connect.php");
    //Check the connection
    if ($connection->connect_error) {
        die("Connection failed: " . $connection->connect_error);
    }
    

    $table = "inventory";
    $statement = "SELECT * FROM $table";
    $result = $connection->query($statement);
    $number_rows = $result->num_rows;
    if($number_rows != 0){
        while($row = $result->fetch_assoc()){
            $id           = $row["identification"];
            $image        = $row["image_name"];
            $date_added   = explode(" ", $row["date_added"]);
            $date_only    = $date_added[0];
            $name         = $row["name"];
            $category     = $row["category"];
            $description  = $row["description"];
            $quantity     = $row["quantity"];
            $available    = $row["available"];
            $lost         = $row["lost"];
            $broken       = $row["broken"];
            create_item_card($id, $image, $date_only, $name, $category, $description, $quantity, $available, $lost, $broken);
        }
    }else{
        create_dropdown_category("Oops, something went wrong");
    }
    $connection->close();

    function create_item_card($id, $image, $date_added, $name, $category, $description, $quantity, $available, $lost, $broken){
        echo '
            <div class="col s12 m6 l3">
                <div class="card item_card">
                    <div class="card-image">
                        <img id="'.$id.'-image_name" class="item-image" src="../images/inventory/'.$image.'">
                    </div>
                    <div class="card-content">
                        <span id="'.$id.'-name" class="card-title">'.$name.'</span>
                        <div class="row">
                            <div class="col s3 m4"><p class="data-label">date: </p></div>
                            <div class="col s9 m8"><p class="item-data left-align">'.$date_added.'</p></div>
                        </div>
                        <div class="row">
                            <div class="col s3 m4"><p class="data-label">category: </p></div>
                            <div class="col s9 m8"><p id="'.$id.'-category" class="item-data left-align">'.$category.'</p></div>
                        </div>
                        <div class="row">
                            <div class="col s3 m4"><p class="data-label">description: </p></div>
                            <div class="col s9 m8"><p id="'.$id.'-description" class="item-data item-description">'.$description.'</p></div>
                        </div>
                        <div class="row">
                            <div class="col s3">
                                <p class="data-label">quantity</p>
                                <p id="'.$id.'-quantity" class="item-number">'.$quantity.'</p>
                            </div>
                            <div class="col s3">
                                <p class="data-label">available</p>
                                <p id="'.$id.'-available" class="item-number">'.$available.'</p>
                            </div>
                            <div class="col s3">
                                <p class="data-label">lost</p>
                                <p id="'.$id.'-lost" class="item-number">'.$lost.'</p>
                            </div>
                            <div class="col s3">
                                <p class="data-label">broken</p>
                                <p id="'.$id.'-broken" class="item-number">'.$broken.'</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ';   
    }
?>