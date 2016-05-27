var yes="YES";
var no="NO";

$( document ).ready(function() {
    $(".cart").toggle();
});

$(".audio-btn").click(function(){
	$(".audio-btn, .audio-btn2").toggle();
	$("#audio").val("YES");
});

$(".audio-btn2").click(function(){
	$(".audio-btn2, .audio-btn").toggle();
	$("#audio").val("NO");
});

$(".cameras-btn").click(function(){
	$(".cameras-btn, .cameras-btn2").toggle();
	$("#cameras").val("YES");
});

$(".cameras-btn2").click(function(){
	$(".cameras-btn2, .cameras-btn").toggle();
	$("#cameras").val("NO");
});
$(".lenses-btn").click(function(){
	$(".lenses-btn, .lenses-btn2").toggle();
	$("#lenses").val("YES");
});

$(".lenses-btn2").click(function(){
	$(".lenses-btn2, .lenses-btn").toggle();
	$("#lenses").val("NO");
});
$(".gear-btn").click(function(){
	$(".gear-btn, .gear-btn2").toggle();
	$("#gear").val("YES");
});

$(".gear-btn2").click(function(){
	$(".gear-btn2, .gear-btn").toggle();
	$("#gear").val("NO");
});
$(".lighting-btn").click(function(){
	$(".lighting-btn, .lighting-btn2").toggle();
	$("#lighting").val("YES");
});

$(".lighting-btn2").click(function(){
	$(".lighting-btn2, .lighting-btn").toggle();
	$("#lighting").val("NO");
});
$(".cables-btn").click(function(){
	$(".cables-btn, .cables-btn2").toggle();
	$("#cables").val("YES");
});

$(".cables-btn2").click(function(){
	$(".cables-btn2, .cables-btn").toggle();
	$("#cables").val("NO");
});
$(".card_charge-btn").click(function(){
	$(".card_charge-btn, .card_charge-btn2").toggle();
	$("#card_charge").val("YES");
});

$(".card_charge-btn2").click(function(){
	$(".card_charge-btn2, .card_charge-btn").toggle();
	$("#card_charge").val("NO");
});
$(".batteries-btn").click(function(){
	$(".batteries-btn, .batteries-btn2").toggle();
	$("#batteries").val("YES");
});

$(".batteries-btn2").click(function(){
	$(".batteries-btn2, .batteries-btn").toggle();
	$("#batteries").val("NO");
});

$(".software-btn").click(function(){
	$(".software-btn, .software-btn2").toggle();
	$("#software").val("YES");
});

$(".software-btn2").click(function(){
	$(".software-btn2, .software-btn").toggle();
	$("#software").val("YES");
});