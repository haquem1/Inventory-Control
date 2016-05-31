$(document).ready(function () {
    button_selection();
});

function button_selection() {
    $(".btn-custom").click(function () {
        var selection = $(this).attr("id");
        if (selection == "selected") {
            deselect($(this));
        } else {
            select($(this));
        }
    });
}


function select(item) {
    animate_button(item);
    $(item).attr("id", "selected");
    $(item).css({
        background: "url('../images/success.svg')"
    });
    $(item).children().first().css({
        opacity: ".2"
    });
    create_item_list(item);
}

function deselect(item) {
    animate_button(item);
    $(item).attr("id", "");
    $(item).css({
        background: ""
    });
    $(item).children().first().css({
        opacity: "1"
    });
}

function animate_button(item) {
    $(item).addClass("animated flip");
    setTimeout(function () {
        $(item).removeClass("animated flip");
    }, 700);
}

function create_item_list(selected) {
    var item = $(selected).children().first().attr("id");
    //alert("the selected item was a " + item);
}

function destroy_item_list(selected) {
    var item = $(selected).children().first().attr("id");
}