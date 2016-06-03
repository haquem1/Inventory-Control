$(document).ready(function () {
	show_action_buttons();
	initialize_actions();
});


function show_action_buttons() {
	$(".card").hover(function () {
		$(this).find(".btn-holder").animate({
			opacity: "1"
		});
	}, function () {
		$(this).find(".btn-holder").animate({
			opacity: "0"
		});
		$(this).find(".btn-holder").finish();
	});
}


function initialize_actions() {
	$(".update-btn").click(function () {
		create_editable_card($(this));
	});
	$(".delete-btn").click(function () {
		alert("You want to delete, huh?");
	});
}


function create_editable_card(card) {
	var id = $(card).attr("id").split("-");
	var card_number = id[0];
	$("#" + card_number + "-update").hide().parent().append('<img class="card-action-item submit-btn" src="../images/submit.svg">').hide().fadeIn(1500);
	$("#" + card_number + "-delete").hide().parent().append('<img class="card-action-item cancel-btn" src="../images/cancel.svg">').hide().fadeIn(1500);
	//||||||||||||||||||||||||||||||||||||||||||||||
	//|||CREATE THE EDITABLE NAME FIELD
	//||||||||||||||||||||||||||||||||||||||||||||||
	var card_name_id = "#" + card_number + "-name";
	var current_name = $(card_name_id).html();
	var box = '<input value="' + current_name + '" type="text" length="250" class="validate">';
	$(card_name_id).empty().append(box);

	//||||||||||||||||||||||||||||||||||||||||||||||
	//|||CREATE THE EDITABLE CATEGORY FIELD
	//||||||||||||||||||||||||||||||||||||||||||||||
	var card_category_id = "#" + card_number + "-category";
	$.ajax({
		url: "scripts/get_categories.php",
		success: function (response) {
			var start = '<select id="editable-box">';
			var options = response;
			var end = '</select>';
			var box = start + options + end;
			$(card_category_id).empty().append(box);
			$('select').material_select();
		}
	});

	//||||||||||||||||||||||||||||||||||||||||||||||
	//|||CREATE THE EDITABLE DESCRIPTION FIELD
	//||||||||||||||||||||||||||||||||||||||||||||||
	var card_description_id = "#" + card_number + "-description";
	var current_description = $(card_description_id).html();
	var box = '<textarea id="item-description" class="materialize-textarea" length="500" class="validate"></textarea>';
	$(card_description_id).empty().append(box);
	$('textarea#item-description').characterCounter();
	$('textarea#item-description').val(current_description);


	//||||||||||||||||||||||||||||||||||||||||||||||
	//|||CREATE THE EDITABLE QUANTITY FIELD
	//||||||||||||||||||||||||||||||||||||||||||||||
	var card_quantity_id = "#" + card_number + "-quantity";
	var current_quantity = $(card_quantity_id).html();
	var box = '<input value="' + current_quantity + '" type="number" class="validate">';
	$(card_quantity_id).empty().append(box);

	//||||||||||||||||||||||||||||||||||||||||||||||
	//|||CREATE THE EDITABLE AVAILABLE FIELD
	//||||||||||||||||||||||||||||||||||||||||||||||
	var card_available_id = "#" + card_number + "-available";
	var current_available = $(card_available_id).html();
	var box = '<input value="' + current_available + '" type="number" class="validate">';
	$(card_available_id).empty().append(box);


	//||||||||||||||||||||||||||||||||||||||||||||||
	//|||CREATE THE EDITABLE LOST FIELD
	//||||||||||||||||||||||||||||||||||||||||||||||
	var card_lost_id = "#" + card_number + "-lost";
	var current_lost = $(card_lost_id).html();
	var box = '<input value="' + current_lost + '" type="number" class="validate">';
	$(card_lost_id).empty().append(box);

	//||||||||||||||||||||||||||||||||||||||||||||||
	//|||CREATE THE EDITABLE BROKEN FIELD
	//||||||||||||||||||||||||||||||||||||||||||||||
	var card_broken_id = "#" + card_number + "-broken";
	var current_broken = $(card_broken_id).html();
	var box = '<input value="' + current_broken + '" type="number" class="validate">';
	$(card_broken_id).empty().append(box);


	$(".submit-btn").click(function () {
		card_default();
		var row = card_number;
		var name = $(card_name_id).val();
		var category = $(card_category_id).val();
		var description = $(card_description_id).val();
		var quantity = $(card_quantity_id).val();
		var available = $(card_available_id).val();
		var lost = $(card_lost_id).val();
		var broken = $(card_broken_id).val();
		update_db(row, name, category, description, quantity, available, lost, broken);
	});

	$(".cancel-btn").click(function () {
		card_default();
	});
}



function update_db(row, name, category, description, quantity, available, lost, broken) {
	$.ajax({
		url: "scripts/edit_db.php",
		type: "POST",
		data: {
			"ITEM-ROW": row,
			"ITEM-NAME": name,
			"ITEM-CATEGORY": category,
			"ITEM-DESCRIPTION": description,
			"ITEM-QUANTITY": quantity,
			"ITEM-AVAILABLE": available,
			"ITEM-LOST": lost,
			"ITEM-BROKEN": broken,
		},
		success: function (response) {
			// you will get response from your php page (what you echo or print)
			$("#editable-box").empty();
			$(element).html(value);
			Materialize.toast(response, 4000);
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(textStatus, errorThrown);
			Materialize.toast('attribute has not been changed', 4000);
		}
	});
}

//edit_field();
//function edit_field() {
//	$(".editable-data").dblclick(function () {
//		var current_value = $(this).html();
//		var element_id = $(this).attr("id");
//		var identifiers = element_id.split("-");
//		create_editable_box($(this), current_value, identifiers);
//	});
//}
//
//function create_editable_box(element, data, identifiers) {
//	var category = identifiers[1];
//	if (category == "name") {
//		var box = '<input value="' + data + '" id="editable-box" type="text" length="250" class="validate">';
//		submit(box, element, data, identifiers);
//	} else if (category == "category") {
//		$.ajax({
//			url: "scripts/get_categories.php",
//			success: function (response) {
//				var start = '<select id="editable-box">';
//				var options = response;
//				var end = '</select>';
//				var box = start + options + end;
//				submit(box, element, data, identifiers);
//			}
//		});
//	} else if (category == "description") {
//		var box = '<input value="' + data + '" id="editable-box" type="text" length="500" class="validate">';
//		submit(box, element, data, identifiers);
//	} else {
//		var box = '<input value="' + data + '" id="editable-box" type="number" class="validate">';
//		submit(box, element, data, identifiers);
//	}
//}
//
//function submit(box, element, data, identifiers) {
//	$(element).empty();
//	$(element).append(box);
//	$('select').material_select();
//	$('text#editable-box').characterCounter();
//	// this works for any text editable field
//	$('#editable-box').keydown(function (e) {
//		// keycode 13 means that you pressed enter
//		if (e.keyCode == 13) {
//			var new_value = $("#editable-box").val();
//			var row = identifiers[0];
//			var category = identifiers[1];
//			update_db(new_value, row, category, element);
//		}
//	});
//}
//
//
//function update_db(value, row, category, element) {
//	$.ajax({
//		url: "scripts/edit_db.php",
//		type: "POST",
//		data: {
//			"ITEM-VALUE": value,
//			"ITEM-ROW": row,
//			"ITEM-CATEGORY": category
//		},
//		success: function (response) {
//			// you will get response from your php page (what you echo or print)
//			$("#editable-box").empty();
//			$(element).html(value);
//			Materialize.toast(response, 4000);
//		},
//		error: function (jqXHR, textStatus, errorThrown) {
//			console.log(textStatus, errorThrown);
//			Materialize.toast('attribute has not been changed', 4000);
//		}
//	});
//}