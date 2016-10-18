$(document).ready(function() {

	// ВЫравнивание блоков по высоте
	$(".service-item a span").equalHeights(); 
	$(".info-item").equalHeights(); 
	$(".cards .card").equalHeights(); 
	$(".sect7-item .s7-items p").equalHeights(); 
	$(".info-item-wrap").equalHeights();

//перевороты карточек
	$(".sect4").waypoint(function() {

		$(".sect4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.removeClass("card-off").addClass("card-on");
			}, 200*index);
		});

	}, {
		offset : "20%"
	});

//toggle-menu
	$(".toggle-mnu").click(function(){
		$(this).toggleClass("on");
		$(".top-menu").slideToggle();
		return false;
	});


//scroll
	$("footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});

	$(".top").click(function(){
		$("html, body").animate({scrollTop: 0 }, "slow");
		return false;
	});

	$(".arrow-wrap-bottom").click(function(){
		$("html, body").animate({scrollTop: $(".main-head").height()+140 }, "slow");
		return false;
	});

//анимация при скроле
//	$(".section-head h2, .section-head p").animated("fadeIn");
//	$(".info-item-wrap").animated("fadeInUp");
//	$(".slider").animated("fadeIn");
//	$(".homesect.section_8 .forms").animated("fadeInRight");
//	$(".homesect.section_8 .p").animated("fadeIn");


//carouselka
	var owl = $(".slider");

	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: "true",
		navText: "", 
		autoplay: true,
		autoplayHoverPause: true,
		fluidSpeed: 600,
		autoplaySpeed: 1000,
		navSpeed: 600,
		dotsSpeed: 600,
		dragEndSpeed: 600
	});
	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	});

	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	});

	//Главное меню
	$(".top-line .sf-menu").superfish({
		hoverClass: "no-calss",
		delay: 200
	});

	//Слайдер
	var owl = $(".slider");

	owl.owlCarousel({
		loop: true,
		items: 1,
		itemClass: "slide-wrap",
		nav: "true",
		navText: ""
	});
	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	});

	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	});

	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


});

