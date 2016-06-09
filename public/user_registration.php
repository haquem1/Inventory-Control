<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>User Registration</title>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css">
	<link rel="stylesheet" href="../sass/user_registration.css">
</head>

<body>
	<div class="container">
		<div class="row">
			<div class="col s6 push-s3">
				<div class="card-panel user-registration-form">
					<div class="row">
						<div class="col s12 center-align">
							<h1>Welcome!</h1>
							<p class="message">Please register, in order to use our system</p>
						</div>
					</div>
					<div class="row">
						<div class="col s12">
							<form action="../scripts/register_user.php" method="POST">
								<div class="input-field col s12">
									<input name="USERNAME" id="username" type="text" class="validate">
									<label for="username">Username</label>
								</div>
								<div class="input-field col s12">
									<input name="PASSWORD" id="password" type="password" class="validate">
									<label for="password">Password</label>
								</div>
								<div class="input-field col s12">
									<input name="FIRST" id="first_name" type="text" class="validate">
									<label for="first_name">First Name</label>
								</div>
								<div class="input-field col s12">
									<input name="LAST" id="last_name" type="text" class="validate">
									<label for="last_name">Last Name</label>
								</div>
								<div class="input-field col s12">
									<input name="PHONE" id="phone_number" type="text" class="validate">
									<label for="phone_number">Phone Number</label>
								</div>
								<div class="row center-align">
									<button class="waves-effect waves-light btn-large" type="submit">Register</button>
								</div>
							</form>
						</div>
					</div>
					<div class="row center-align">
						<p class="credits">CSUN Career Center | Vidteam &copy; 2016
							<br> Inventory Control System</p>
					</div>
				</div>
			</div>
		</div>

	</div>





	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="../resources/materialize.js"></script>
</body>

</html>