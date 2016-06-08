$(document).ready(function () {
	$("#application_area").load("main_load.php");
	admin_operations();
});

function admin_operations() {
	$(".brand").click(function () {
		$("#application_area").load("main_load.php");
		return false;
	});

	$(".current").click(function () {
		$.ajax({
			url: "./current_load.php",
			success: function(response){
				$("#application_area").empty().append(response).hide().fadeIn(1000);
				$('.collapsible').collapsible();
			},
			error: function (jqXHR, textStatus, errorThrown){
				alert(errorThrown);
			}
		});
		// $("#application_area").load("current_load.php");
		return false;
	});

	$(".reports").click(function () {
		$("#application_area").load("reports_load.php");
		return false;
	});

	$(".inventory").click(function () {
		$("#application_area").load("inventory_load.php");
		return false;
	});
}