var item_cart = [];

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

	$(".checkout-container").click(function(){
		$("#checkout_modal").openModal();
		var listing = display_cart();
		$("#final_item_cart").empty().append(listing);
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



//|||||||||||||||||||||||||||||||||||||||||||||||||||||||
// CARD SELECTION ANIMATION
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||
function activate_card(){
	$('.card').click(function(){
		var card = $(this);
		var selected = $(card).attr("id");
		if(selected == "unselected"){
			select_card(card);			
		}else{
			deselect_card(card);
		}
		animate_card(card);
	});
}

function animate_card(card){
	setTimeout(function() {
		$(card).removeClass("animated bounce");
	}, 1000);
	$(card).addClass("animated bounce");
}

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||
// CARD SELECTION LOGIC
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||

function select_card(card){
	$(card).attr("id", "selected");
	// $(card).animate({background:"url('../images/success.svg')"});
	$(card).css("background-image","url('../images/success.svg')");
	$(card).css("background-size", "cover");
	$(card).css("background-position","center");
	$(card).css("background-color", "#25AE88");
	$(card).find(".card-image-container").css("opacity", ".5");
	$(card).find(".card-content").css("opacity", ".5");
	push_item_to_cart(card);
}

function push_item_to_cart(card){
	//recording of item-id is necessary, additional data is obtained from database
	var row = $(card).attr('class').split(" ")[0].split("-")[0];
	item_cart.push(row);
	$(".checkout_items").empty().append(item_cart.length);
	// display_cart();
}

function display_cart(){
	var listing = "";
	for(var i = 0; i < item_cart.length; i++){
		var item_id = "."+item_cart[i]+"-item";
		var name = $(item_id).find(".card-title").html();
		var available = $(item_id).find(".item_available").html().split(" ")[0];
		listing += create_cart_item(name, available);
	}
	return listing;
}

function create_cart_item(name, available){
	var list_item = `
		<div class="col s12 m3 center-align">
	      <div class="card cart-card small"><div class="card-content">
	          <p class="card-title">`+name+`</p>
	          <div class="input-field col s4 push-s4">
		        <label class="active" for="amount">`+available+` Max</label>
		        <input value="1" id="amount" name="AMOUNT" type="number" class="validate" required>
		      </div>		
	        </div></div>
	    </div>
	`;
	return list_item;
}

function check_out(){
	//Ajax call to push items to database
}

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||
// CARD UNSELECTION LOGIC
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||
function deselect_card(card){
	$(card).attr("id", "unselected");
	$(card).css("background-image","");
	$(card).css("background-color", "");
	$(card).find(".card-image-container").css("opacity", "1");
	$(card).find(".card-content").css("opacity", "1");
	pop_item_to_cart(card);
}

function pop_item_to_cart(card){
	//recording of item-id is necessary, additional data is obtained from database
	var row = $(card).attr('class').split(" ")[0].split("-")[0];
	var position = item_cart.indexOf(row);
	if(position != -1){
		item_cart.splice(position, 1);
	}
	$(".checkout_items").empty().append(item_cart.length);
	// display_cart();
}