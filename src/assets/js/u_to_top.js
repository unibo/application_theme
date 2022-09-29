import $ from 'jquery';

$(function(){
	$(document).on( 'scroll', function(){
 
		if ($(window).scrollTop() > 100) {
			$('.u-to-top').addClass('show');
		} else {
			$('.u-to-top').removeClass('show');
		}
	});
 
	$('.u-to-top').on('click', scrollToTop);
});
 
function scrollToTop() {
	var verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	var element = $('body');
	var offset = element.offset();
	var offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
