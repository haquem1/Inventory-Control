<?php
session_start();
$user = $_SESSION['USER'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Main section</title>
</head>

<body>
	<p class="admin-greeting">welcome,
		<?php echo $user; ?>
	</p>
	<div class="row">
		<!--|||||||||||||||||||||||||||||||||||||-->
		<!--|||CURRENT SECTION 		 			 -->
		<!--|||||||||||||||||||||||||||||||||||||-->
		<div class="col s12 l4">
			<div id="current_view" class="card medium hoverable">
				<div class="card-image waves-effect waves-block waves-light">
					<img class="activator card-images" src="../images/current.svg">
				</div>
				<div class="card-content">
					<span class="card-title activator">Current</span>
					<p class="description">The current section allows you to see who is currently out in the field with items from the inventory</p>
				</div>
			</div>
		</div>

		<!--|||||||||||||||||||||||||||||||||||||-->
		<!--|||REPORTS SECTION 					 -->
		<!--|||||||||||||||||||||||||||||||||||||-->
		<div class="col s12 l4">
			<div id="report_view" class="card medium hoverable">
				<div class="card-image waves-effect waves-block waves-light">
					<img class="activator card-images" src="../images/report.svg">
				</div>
				<div class="card-content">
					<span class="card-title activator">Reports</span>
					<p class="description">The reports section allows you to see a record of all the items and the people that have taken them out</p>
				</div>
			</div>
		</div>

		<!--|||||||||||||||||||||||||||||||||||||-->
		<!--|||INVENTORY SECTION 	 			 -->
		<!--|||||||||||||||||||||||||||||||||||||-->
		<div class="col s12 l4">
			<div id="inventory_view" class="card medium hoverable">
				<div class="card-image waves-effect waves-block waves-light">
					<img class="activator card-images" src="../images/inventory.svg">
				</div>
				<div class="card-content">
					<span class="card-title activator">Inventory</span>
					<p class="description">The inventory section allows you to create and delete items from the current inventory</p>
				</div>
			</div>
		</div>
	</div>
</body>

</html>