$(document).ready(function () {
	add_button();
});

function add_button() {
	$(".item_addition").click(function () {
		// INITIALIZING MODAL ELEMENTS FOR ITEM ADDITION
		$('#addition_modal').openModal({
			dismissible: false,
		});
		$('select').material_select();
		$('textarea#item-description').characterCounter();
		$("#add_it").click(function () {
			item_to_db();
		});
		// END OF INITIALIZATION OF FORM ELEMENTS



		$(this).addClass("animated bounce");
		setTimeout(function () {
			$(".item_addition").removeClass("animated bounce");
		}, 1200);
	});
}

function item_to_db() {
	var name = $("#item-name").val();
	var category = $("#item-category").val();
	var description = $("#item-description").val();
	var quantity = $("#item-quantity").val();
	$.ajax({
		url: "scripts/item2db.php",
		type: "POST",
		data: {
			"ITEM-NAME": name,
			"ITEM-CATEGORY": category,
			"ITEM-DESCRIPTION": description,
			"ITEM-QUANTITY": quantity
		},
		success: function (response) {
			// you will get response from your php page (what you echo or print)                 
			$('#addition_modal').closeModal();
			Materialize.toast(response, 4000);
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(textStatus, errorThrown);
			Materialize.toast('Item has not been added', 4000);
		}
	});
}