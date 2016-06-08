<?php

create_borrowers_info();


function create_borrowers_info(){
		// database information
	include("../scripts/db_connect.php");
		// check the database connection 
	if($connection->connect_error){
		die("Connection failed ". $connection->connect_error);
	}
		//We have a good connection, lets do whatever we gotta do
	$table = "borrowers";
	$statement = "SELECT * FROM $table WHERE returned='0000-00-00 00:00:00'";
	$borrowers = $connection->query($statement);
	$numb_borrowers = $borrowers->num_rows;
	if($numb_borrowers != 0){
		// we have borrowers in the database
		while($borrower_info = $borrowers->fetch_assoc()){
			echo '<ul class="collapsible" data-collapsible="expandable">';
			$id = $borrower_info['identification'];
			$borrower_id = $borrower_info['borrower'];
			$borrower_data = $borrower_info['items'];
			$borrower_checkout = $borrower_info['date'];
			create_borrower($id, $borrower_id, $borrower_data, $borrower_checkout, $connection);
			echo '</ul>';
		}
	}else{
		echo 'You have no items out in the field';
	}
	$connection->close();
}	

function create_borrower($num, $id, $items, $checkout, $connection){
	echo '
	<li>
		<div class="collapsible-header">
			<div class="row">
				<div id="borrower_id" class="col s2 m2 borrower-info">'.$num.'</div>
				<div id="borrower_name" class="col s10 m6 borrower-info">'.get_borrower_name($id, $connection).'</div>
				<div id="borrower_take" class="col s6 m2 borrower-info">'.$checkout.'</div>
				<div id="borrower_return" class="col s6 m2 borrower-info">Not Yet</div>
			</div>
		</div>
		<div class="collapsible-body"><p>'.get_item_list($items, $connection).'</p></div>
	</li>
	';
}


function get_borrower_name($identification, $connection){
	$table = "users";
	$statement = "SELECT * FROM $table WHERE identification='$identification'";
	$result = $connection->query($statement);
	$found = $result->num_rows;
	$name = "";
	if($found != 0){
		$borrower = $result->fetch_assoc();
		$name = $borrower['firstname'] ." ". $borrower['lastname'] ." | ". $borrower['phone'];
	}else{
		$name = "User not found!";
	}
	return $name;
}


function get_item_list($items, $connection){
	$posts = json_decode($items);
	$max = sizeOf($posts);
	$display = "";
	for($i = 0; $i < $max; $i++){
		$display += (string)($posts[$i][0]." - ".$posts[$i][1]." <br> ");
	}	
	return $display;
}

?>