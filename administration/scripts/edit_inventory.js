$(document).ready(function () {
	edit_field();
});


function edit_field() {
	$(".editable-data").dblclick(function () {
		var current_value = $(this).html();
		var element_id = $(this).attr("id");
		var identifiers = element_id.split("-");
		create_editable_box($(this), current_value, identifiers);
	});
}

function create_editable_box(element, data, identifiers) {
	var category = identifiers[1];
	if (category == "name") {
		var box = '<input value="' + data + '" id="editable-box" type="text" length="250" class="validate">';
		submit(box, element, data, identifiers);
	} else if (category == "category") {
		$.ajax({
			url: "scripts/get_categories.php",
			success: function (response) {
				var start = '<select id="editable-box">';
				var options = response;
				var end = '</select>';
				var box = start + options + end;
				submit(box, element, data, identifiers);
			}
		});
	} else if (category == "description") {
		var box = '<input value="' + data + '" id="editable-box" type="text" length="500" class="validate">';
		submit(box, element, data, identifiers);
	} else {
		var box = '<input value="' + data + '" id="editable-box" type="number" class="validate">';
		submit(box, element, data, identifiers);
	}
}

function submit(box, element, data, identifiers) {
	$(element).empty();
	$(element).append(box);
	$('select').material_select();
	$('text#editable-box').characterCounter();
	// this works for any text editable field
	$('#editable-box').keydown(function (e) {
		// keycode 13 means that you pressed enter
		if (e.keyCode == 13) {
			var new_value = $("#editable-box").val();
			var row = identifiers[0];
			var category = identifiers[1];
			update_db(new_value, row, category, element);
		}
	});
}


function update_db(value, row, category, element) {
	$.ajax({
		url: "scripts/edit_db.php",
		type: "POST",
		data: {
			"ITEM-VALUE": value,
			"ITEM-ROW": row,
			"ITEM-CATEGORY": category
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