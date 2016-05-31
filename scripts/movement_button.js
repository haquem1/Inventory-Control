$(document).ready(function () {
    next();
});

function next() {
    $('.next-custom').click(function () {
        $(".application-wrapper").animate({
            left: "-100%"
        }, 800);
    });
}

function previous() {

}