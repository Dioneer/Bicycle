//SLIDERS
//initialization
$(document).ready(function () {
	$('.slider__body').slick({
		dots: true,
		arrows: false,
		adaptiveHeight: true,
		accessibility: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: true,
		autoplay: false,
	});
});