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
		<link rel="stylesheet" href="../sass/default.css">
		<link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
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

					<div class="row">
						<div class="col s4">
							<div class="right">
								<a class="btn-custom btn-floating waves-effect waves-light"><img class="category-img" id="audio" src="../images/audio2.svg" alt="audio"></a>
								<br>
								<label class="item-label">audio</label>
							</div>
						</div>
						<div class="col s4">
							<a class="btn-custom btn-floating waves-effect waves-light"><img class="category-img" id="camera" src="../images/camera.svg" alt="cameras"></a>
							<br>
							<label class="item-label">cameras</label>
						</div>
						<div class="col s4">
							<div class="left">
								<a class="btn-custom btn-floating waves-effect waves-light"><img class="category-img" id="lense" src="../images/lense.svg" alt="lenses"></a>
								<br>
								<label class="item-label">lenses</label>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col s4">
							<div class="right">
								<a class="btn-custom btn-floating waves-effect waves-light"><img class="category-img" id="gear" src="../images/gear.svg" alt="gear"></a>
								<br>
								<label class="item-label">gear</label>
							</div>
						</div>
						<div class="col s4">
							<a class="btn-custom btn-floating waves-effect waves-light"><img class="category-img" id="lighting" src="../images/lights.svg" alt="lighting"></a>
							<br>
							<label class="item-label">lighting</label>
						</div>
						<div class="col s4">
							<div class="left">
								<a class="btn-custom btn-floating waves-effect waves-light"><img class="category-img" id="cable" src="../images/cable.svg" alt="cables"></a>
								<br>
								<label class="item-label">cables</label>
							</div>
						</div>
					</div>

					<div class="row">
						<div class="col s4">
							<div class="right">
								<a class="btn-custom btn-floating waves-effect waves-light"><img class="category-img" id="card_reader" src="../images/memory.svg" alt="card_reader"></a>
								<br>
								<label class="item-label">card readers
									<br>&amp; cables</label>
							</div>
						</div>
						<div class="col s4">
							<a class="btn-custom btn-floating waves-effect waves-light"><img class="category-img" id="battery" src="../images/battery.svg" alt="batteries"></a>
							<br>
							<label class="item-label">batteries</label>
						</div>
						<div class="col s4">
							<div class="left">
								<a class="btn-custom btn-floating waves-effect waves-light"><img class="category-img" id="software" src="../images/software.svg" alt="software"></a>
								<br>
								<label class="item-label">software</label>
							</div>
						</div>
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
				<div id="item_area" class="phase">
					<!-- -->
					<h1>Area under Construction <br> Please come back in a few days</h1>
					<img class="sunny animated infinite shake" src="../images/helmet.svg" alt="WIP">
				</div>
			</div>
		</div>

		<!-- jQuery first, then Bootstrap JS. -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<!-- Compiled and minified JavaScript -->
		<script src="../resources/materialize.js"></script>
		<script src="../scripts/inventoryMotion.js"></script>
		<script src="../scripts/movement_button.js"></script>
	</body>

	</html>