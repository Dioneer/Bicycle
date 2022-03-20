//Рабочий flex на Explorer 11===================================================================================================
/*$(window).resize(function (event) {
	mainblock();

});
function mainblock() {
	var h = $(window).outerHeight();
	$('.mainblock').css("min-height", h);
}
mainblock();*/

//картинка фоном========================================================================================================================
function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();
