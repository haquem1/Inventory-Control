function randomize_background() {
	var num = getRandomInt(1, 5);
	var image = "nature" + num + ".jpg";
	$('body').css({
		background: "url('../images/backgrounds/" + image + "')"
	});
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function button_selection() {
	$(".category-bubble").click(function () {
		var selection = $(this).attr("id");
		if (selection == "selected") {
			deselect($(this));
			destroy_item_list($(this));
		} else {
			select($(this));
			create_item_list($(this));
		}
	});
}


function select(item) {
	animate_button(item);
	// you have to select the two bubbles at once
	var shared_class = $(item).attr("class").split(' ')[1];
	$("."+shared_class).attr("id", "selected");
	// Looking for classes in common in order to affect both bubbles at once.
	var target = $("."+shared_class).children(":first").attr('class').split(" ")[0];
	$("."+target).css({
		background: "url('../images/success.svg')"
	});
	var target = $("."+target).children(":first").attr("class").split(" ")[0];
	$("."+target).css({
		opacity: ".2"
	});
}

function deselect(item) {
	animate_button(item);
	var shared_class = $(item).attr("class").split(' ')[1];
	$("."+shared_class).attr("id", "");

	var target = $("."+shared_class).children(":first").attr('class').split(" ")[0];
	$("."+target).css({
		background: ""
	});
	
	var target = $("."+target).children(":first").attr("class").split(" ")[0];
	$("."+target).css({
		opacity: "1"
	});
}

function animate_button(item) {
	var selector = $(item).children(":first").attr("class").split(' ')[0];
	var specific = "."+selector;
	$(specific).addClass("animated flip");
	setTimeout(function () { 
		$(specific).removeClass("animated flip");
	}, 700);
}

function create_item_list(selected) {
	var category = $(selected).children(":first").children(":first").attr("id");
	$("#"+category+"_inventory").fadeIn(500);
}

function destroy_item_list(selected) {
	var category = $(selected).children(":first").children(":first").attr("id");
	$("#"+category+"_inventory").fadeOut(800);
}

// function ajax_call(category){
// 	$.ajax({
// 	  url: "../scripts/get_category_inventory.php",
// 	  type: "POST",
// 	  data: {'CATEGORY': category},
// 	  success: function(response){
// 	  	$("#items_area").append(response).hide().fadeIn(1000);
// 	  },
// 	  error: function (jqXHR, textStatus, errorThrown){
//  		alert(errorThrown);
//       }
// 	});
// }