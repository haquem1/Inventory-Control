<?php
	$action = $_POST['ACTION'];
	if($action == "main"){
		create_main_bubbles();
	}else if($action == "side"){
		create_side_bubbles();
	}

	function create_main_bubbles(){
		//include database data
		include("db_connect.php");
		//test the database connection
		if($connection->connect_error){
			echo ('Database connection failed '.$connection->connect_error);
		}
		//Loading the categories from the database
		$table = "categories";
		$statement = "SELECT * FROM $table";
		$category_list = $connection->query($statement);
		$category_amount = $category_list->num_rows;
		//check if the category list has something
		if($category_amount != 0){
			// category list has something inside it
			$sides = array("right","center","left");
			$count = 0;
			echo '<div class="row">';
			while($category_item = $category_list->fetch_assoc()){
				create_main_category_bubbles($category_item['category'], $sides[$count]);
				$count += 1;
				if($count == 3){
					$count = 0;
				}
			}
			echo '</div>';
		}else{
			//no categories were found, pretty bad!
		}
		$connection->close();
	}

	function create_side_bubbles(){
		//include database data
		include("db_connect.php");
		//test the database connection
		if($connection->connect_error){
			echo 'Database connection failed '.$connection->connect_error;
		}
		//Loading the categories from the database
		$table = "categories";
		$statement = "SELECT * FROM $table";
		$category_list = $connection->query($statement);
		$category_amount = $category_list->num_rows;
		//check if the category list has something
		if($category_amount != 0){
			// category list has something inside it
			echo '<div class="row">';
			while($category_item = $category_list->fetch_assoc()){
				create_side_category_bubble($category_item['category']);
			}
			create_side_category_bubble('checkout');
			echo '</div>';
		}else{
			//no categories were found, pretty bad!
		}
		$connection->close();
	}
	
	function create_main_category_bubbles($category, $side){
		echo '
			<div class="col s12 m4">
				<div class="'.$side.'">
					<div id="" class="category-bubble '.$category.'-container">
						<a class="'.$category.'-link btn-custom btn-floating waves-effect waves-light">
							<img class="'.$category.'-img category-img" id="'.$category.'" src="../images/'.$category.'.svg" alt="'.$category.'">
						</a>
						<br>
						<label class="item-label">'.$category.'</label>	
					</div>
				</div>
			</div>
		';
	}

	function create_side_category_bubble($category){
		echo '
			<div class="col s1">
				<div id="" class="category-bubble '.$category.'-container">
					<a class="'.$category.'-link btn-custom-side btn-floating waves-effect waves-light">
						<img class="'.$category.'-img category-img-side" id="'.$category.'" src="../images/'.$category.'.svg" alt="'.$category.'">
					</a>
					<br>
					<label class="item-label-side">'.$category.'</label>	
				</div>
			</div>
		';
	}

	
	

?>