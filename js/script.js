//burger
let burger = document.querySelector("#burger-icon");
            let header = document.querySelector("#header");
            burger.onclick = function () {
                header.classList.toggle("menu-open");
            };
//slider
$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		adaptiveHeight:true,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		easing:'ease',
		
	});
});