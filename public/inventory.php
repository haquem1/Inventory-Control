<?php
session_start();
if($_SESSION['USER'] == ""){
	header("location: user_login.php");
}else{
	$user = $_SESSION['USER'];
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
	<!-- Required meta tags always come first -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title> Equipment Checkout </title>
	<!-- Compiled and minified CSS -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css">
	<link rel="stylesheet" href="../sass/student_inventory.css">
	<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
	<!-- jQuery first, then Bootstrap JS. -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
</head>

<body>
	<div class="container-fluid">
		<div class="application-wrapper">
			<!--|||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
			<!--CATEGORY SELECTION AREA        -->
			<!--|||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
			<div id="category_area" class="phase">
				<div class="row">
					<div class="col s12">
						<h1 class="main-heading">welcome, <?php echo $user; ?></h1>
						<h3 class="sub-heading">Please select the items that you need</h3>
					</div>
				</div>
				<div class="row" id="main_bubble_area">
					<script>
						$.ajax({
							url: "../scripts/load_circle_categories.php",
							type: "POST",
							data: {'ACTION': "main"},
							success: function(response){
								$("#main_bubble_area").append(response).hide().fadeIn(1000);
							},
							error: function (jqXHR, textStatus, errorThrown){
								alert(errorThrown);
							}
						});
					</script>	
				</div>
				<div class="row">
					<div class="col s12">
						<button class="next-custom waves-effect waves-light btn-large turquoise darken-2">Continue</button>
					</div>
				</div>
			</div>

			<!--|||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
			<!--ITEM SELECTION AREA        -->
			<!--|||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
			<div id="items_area" class="phase row">
				<div id="side_bubble_area" class="col s12 push-s1">
					<script>
						$.ajax({
							url: "../scripts/load_circle_categories.php",
							type: "POST",
							data: {'ACTION': "side"},
							success: function(response){
								$("#side_bubble_area").append(response).hide().fadeIn(1000);
								button_selection();
							},
							error: function (jqXHR, textStatus, errorThrown){
								alert(errorThrown);
							}
						});								
					</script>	
				</div>
				<div class="container">
					<div id="inventory_items_display" class="row">
						<script>
							$("#inventory_items_display").load("../scripts/get_category_inventory.php");
						</script>
					</div>	
				</div>
				<button class="next-custom-stage2 waves-effect waves-light btn-large turquoise darken-2">Continue</button>

				<button class="prev-custom-stage2 waves-effect waves-light btn-large turquoise darken-2">Previous</button>
			</div>




		</div>
	</div>


	<!-- Compiled and minified JavaScript -->
	<script src="../resources/materialize.js"></script>
	<script src="../scripts/inventoryMotion.js"></script>
	<script src="../scripts/movement_button.js"></script>
</body>

</html>