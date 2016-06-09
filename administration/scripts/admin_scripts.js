$(document).ready(function () {
	// $("#application_area").load("main_load.php");
	ajax_call("main_load", "");
});

function admin_operations() {
	$(".brand").click(function () {
		// $("#application_area").load("main_load.php");
		ajax_call("main_load", "");
		return false;
	});

	$(".current").click(function () {
		ajax_call("current|report_load", "current");		
		return false;
	});

	$(".reports").click(function () {
		ajax_call("current|report_load", "report");		
		return false;
	});

	$(".inventory").click(function () {
		ajax_call("inventory_load", "");		
		return false;
	});

	$("#current_view").click(function () {
		// $("#application_area").load("inventory_load.php");
		ajax_call("current|report_load", "current");		
		return false;
	});

	$("#report_view").click(function () {
		// $("#application_area").load("inventory_load.php");
		ajax_call("current|report_load", "report");		
		return false;
	});

	$("#inventory_view").click(function () {
		// $("#application_area").load("inventory_load.php");
		ajax_call("inventory_load", "");		
		return false;
	});

}

function ajax_call(filename, action){
	$.ajax({
		url: "./"+filename+".php",
		type: "POST",
		data: { 'ACTION': action},
		success: function(response){
			$("#application_area").empty().append(response).hide().fadeIn();
			if(action != ""){
				$('.collapsible').collapsible();
			}
			admin_operations();
		},
		error: function (jqXHR, textStatus, errorThrown){
			alert(errorThrown);
		}
	});
}