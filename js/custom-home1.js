(function($) { "use strict";

	//Preloader
	Royal_Preloader.config({
			mode           : 'logo',
			background     : 'black',
			showProgress   : false,
			showPercentage : false
		});

	function fallback(video)
{
  var img = video.querySelector('img');
  if (img)
    video.parentNode.replaceChild(img, video);
}

	//Home text fade on scroll

	// $(window).scroll(function () {
 //        var $Fade = $('.fade-elements');
 //        //Get scroll position of window
 //        var windowScroll = $(this).scrollTop();
 //        //Slow scroll and fade it out
 //        $Fade.css({
 //            'margin-top': -(windowScroll / 0) + "px",
 //            'opacity': 1 - (windowScroll / 300)
 //        });
 //    });


	/* Icons Animation */


	// var options = {
	//   duration: 200,
	//   type: 'oneByOne',
	//   animTimingFunction: Vivus.EASE
	// };

 //  var vivus = new Vivus('svg-icon-1', options, onComplete);
	// new Vivus('svg-icon-2',	options, onComplete);
	// new Vivus('svg-icon-3',	options, onComplete);
	// new Vivus('svg-icon-4',	options, onComplete);
	// new Vivus('svg-icon-5',	options, onComplete);
	// new Vivus('svg-icon-6',	options, onComplete);
	// new Vivus('svg-icon-7',	options, onComplete);
	// new Vivus('svg-icon-8',	options, onComplete);
	// new Vivus('svg-icon-9',	options, onComplete);


	function onComplete() {

	};



	/* Scroll animations */

	window.scrollReveal = new scrollReveal();


	/* Scroll Too */

	$(window).load(function(){"use strict";

		/* Page Scroll to id fn call */
		$("ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:"ul.slimmenu li a",
			offset: -50,
			scrollSpeed:1250,
			scrollEasing: "easeInOutCubic"
		});
		$(this).scrollTop(-100);

		/* demo functions */
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});

	});




	$(document).ready(function() {

		/* fix on scroll */

		if ($(window).width() > 1200) {
			$(".portfolio-filter").stick_in_parent({offset_top: 100});
		}


		//TaurusMenu

		"use strict";

		$('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
		//Checks if li has sub (ul) and adds class for toggle icon - just an UI

		$(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"></a>");

		//Adds menu-mobile class (for mobile toggle menu) before the normal menu
		//Mobile menu is hidden if width is more then 1199px, but normal menu is displayed
		//Normal menu is hidden if width is below 1199px, and jquery adds mobile menu
		//Done this way so it can be used with wordpress without any trouble

		// $('.menu > ul > li').hover(function() {
		// 	if ($(window).width() > 1183) {
		// 		$(this).children("ul").stop(true, false).toggleClass('active');
		// 		e.preventDefault();
		// 	}
		// });

		$(".menu > ul > li").click(function(e){
			if ($(window).width() < 1183) {
				var $me = $(this),
					width = $me.outerWidth(),
					height = $me.outerHeight(),
					top = $me.position().top,
					left = $me.position().left;

				var len = Math.sqrt(Math.pow(width - e.offsetX, 2) + Math.pow(e.offsetY, 2));

				if (len < 50)
					$(this).children("ul").stop(true, false).toggleClass('active');
			}
		});

		//2nd dropdown
		$(".menu > ul > li > ul.normal-sub > li").hover(function (e) {
			if ($(window).width() > 1183) {
				$(this).children("ul").stop(true, false).fadeToggle(300);
				e.preventDefault();
			}
		});
		//If width is more than 1183px 2nd dropdowns are displayed on hover

		$(".menu-mobile").on('click', function (e) {
			$(".menu > ul").toggleClass('show-on-mobile');
			e.preventDefault();
		});
		//when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story


		//Tooltip

		$(".tipped").tipper();

		/* Case study images */			
		
		$('.case-study-name:nth-child(1)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(5)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(5)').addClass("show");
			$('.case-study-name:nth-child(5)').addClass('active');
		})
		
		$('.case-study-name:nth-child(6)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(6)').addClass("show");
			$('.case-study-name:nth-child(6)').addClass('active');
		})
		$('.case-study-name:nth-child(7)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(7)').addClass("show");
			$('.case-study-name:nth-child(7)').addClass('active');
		})
		$('.case-study-name:nth-child(8)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(8)').addClass("show");
			$('.case-study-name:nth-child(8)').addClass('active');
		})
		$('.case-study-name:nth-child(9)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(9)').addClass("show");
			$('.case-study-name:nth-child(9)').addClass('active');
		})
		$('.case-study-name:nth-child(10)').on('mouseenter', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(10)').addClass("show");
			$('.case-study-name:nth-child(10)').addClass('active');
		})
	
		$('.case-study-name:nth-child(1)').trigger('mouseenter')	


		/* Logos Carousel */

		// $("#owl-logos").owlCarousel({
		// 	items : 5,
		// 	itemsDesktop : [1000,4],
		// 	itemsDesktopSmall : [900,3],
		// 	itemsTablet: [600,2],
		// 	itemsMobile : false,
		// 	navigation: false,
		// 	pagination : false,
		// 	autoPlay : 3000,
		// 	slideSpeed : 300
		// });


		/* Quote Carousels */

		// $("#owl-sep-1").owlCarousel({
		// 	navigation: false,
		// 	pagination : true,
		// 	transitionStyle : "fade",
		// 	slideSpeed : 500,
		// 	paginationSpeed : 500,
		// 	singleItem:true,
		// 	autoPlay: 5000
		// });


		//Parallax

		// $('.parallax-1').parallax("50%", 0.1);


		//Facts Counter

        // $('.counter-numb').counterUp({
        //     delay: 100,
        //     time: 2000
        // });


		//Video

		// $(".video-section").fitVids();


	});





})(jQuery);


































