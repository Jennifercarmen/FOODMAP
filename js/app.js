jQuery(document).ready(function () {
	$(".logo").animate({ "left": "+=28%" }, "slow");
	$('h4').animate({ 'font-size': 24, 'border-width': 5 }, 1800);
	$( ".main" ).hide();
	setTimeout(function () {
		$( ".splash" ).hide();
		$( ".main" ).show();
	}, 2000);
})