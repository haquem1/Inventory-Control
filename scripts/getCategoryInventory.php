<?php
		// include the database data
		include("db_connect.php");
		//test the connection
		if($connection->connect_error){
			die("Connection to database failed ". $connection->connect_error);
		}
		//Connection has been tested and we are ready to go
		$category = $_POST['CATEGORY'];
		$table = "inventory";
		$statement = "SELECT * FROM $table WHERE category='$category'";
		$category_items = $connection->query($statement);
		$item_rows = $category_items->num_rows;
		//check if you have any items in the selected category
		if($item_rows != 0){
			// you have items in that inventory category
			echo '<div id="'.$category.'_inventory" class="row"><h3>'.$category.'</h3>';
			while($single_item = $category_items->fetch_assoc()){
				$image = $single_item['image_name'];
				$name = $single_item['name'];
				$description = $single_item['description'];
				$available = $single_item['available'];
				create_inventory_item($image, $name, $description, $available);
			}
			echo '</div>';
		}else{
			// you have no items in that inventory category
			echo '
				<div id="'.$category.'_inventory" class="row">
					<div class="col s12">
						<h4>You have no items in this category</h4>	
					</div>
				</div>
			';
		}

		$connection->close();

		function create_inventory_item($item_image, $item_name, $item_description, $item_available){
		echo '
			<div class="col s3">
				<div class="card medium">
					<div class="card-image waves-effect waves-block waves-light">
				      <img src="../images/inventory/'.$item_image.'">
				    </div>
				    <div class="card-content">
				      <span class="card-title grey-text text-darken-4">'.$item_name.'</span>
				      <p class="item_data item_description">'.$item_description.'</p>
				      <p class="item_data item_available">'.$item_available.'</p>
				    </div>
				</div>
			</div>
		';
		}

?>