(function($) { "use strict";

	$(document).ready(function() {


			/* slider revolution */

					var tpj=jQuery;
					var revapi42;
					tpj(document).ready(function() {
						if(tpj("#rev_slider_42_1").revolution == undefined){
							revslider_showDoubleJqueryError("#rev_slider_42_1");
						}else{
							revapi42 = tpj("#rev_slider_42_1").show().revolution({
								sliderType:"hero",
								jsFileLocation:"../js/",
								sliderLayout:"fullscreen",
								dottedOverlay:"none",
								delay:9000,
								navigation: {
								},
								viewPort: {
									enable:true,
									outof:"pause",
									visible_area:"80%"
								},
								responsiveLevels:[1240,1024,778,480],
								gridwidth:[1240,1024,778,480],
								gridheight:[500,450,400,350],
								lazyType:"none",
								parallax: {
									type:"scroll",
									origo:"enterpoint",
									speed:400,
									levels:[5,10,15,20,25,30,35,40,45,50],
								},
								shadow:0,
								spinner:"off",
								autoHeight:"off",
								disableProgressBar:"on",
								hideThumbsOnMobile:"off",
								hideSliderAtLimit:0,
								hideCaptionAtLimit:0,
								hideAllCaptionAtLilmit:0,
								debugMode:false,
								fallbacks: {
									simplifyAll:"off",
									disableFocusListener:false,
								}
							});
						}
					});	/*ready*/





	
		// The function actually applying the offset
function offsetAnchor() {
  if (location.hash.length !== 0) {
    $(window).scrollTo($(window).scrollX, $(window).scrollY - 100);
  }
}

// Captures click events of all <a> elements with href starting with #
$(document).on('click', 'a[href^="#"]', function(event) {
  // Click events are captured before hashchanges. Timeout
  // causes offsetAnchor to be called after the page jump.
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

// Set the offset when entering page with hash present in the url
window.setTimeout(offsetAnchor, 0);



		// /* Quote Carousels */

		$("#owl-sep-1").owlCarousel({
			navigation: false,
			pagination : true,
			transitionStyle : "fade",
			slideSpeed : 1000,
			paginationSpeed : 500,
			singleItem:true,
			autoPlay: 5000
		});

			/* Logos Carousel */

		$("#owl-logos").owlCarousel({
			items : 5,
			itemsDesktop : [1000,4],
			itemsDesktopSmall : [900,3],
			itemsTablet: [600,2],
			itemsMobile : false,
			navigation: false,
			pagination : false,
			autoPlay : 3000,
			slideSpeed : 300
		});


		//Fancybox

		$(".fancybox").fancybox({
			maxWidth	: 1400,
			maxHeight	: 800,
			fitToView	: true,
			width		: '80%',
			height		: '80%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'elastic',
			closeEffect	: 'none'
		});


		//Parallax

		// $('#myDiv2').parallax("50%", 0.2);

		//Video

		// $(".video-section").fitVids();

				//Tooltip

		// $(".tipped").tipper();

			/* Portfolio Sorting */

		(function ($) {


			var container = $('#projects-grid');


			function getNumbColumns() {
				var winWidth = $(window).width(),
					columnNumb = 1;


				if (winWidth > 1500) {
					columnNumb = 2;
				} else if (winWidth > 1200) {
					columnNumb = 2;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 600) {
					columnNumb = 2;
				} else if (winWidth > 300) {
					columnNumb = 1;
				}

				return columnNumb;
			}


			function setColumnWidth() {
				var winWidth = $(window).width(),
					columnNumb = getNumbColumns(),
					postWidth = Math.floor(winWidth / columnNumb);

			}

			$('#portfolio-filter #filter a').click(function () {
				var selector = $(this).attr('data-filter');

				$(this).parent().parent().find('a').removeClass('current');
				$(this).addClass('current');

				container.isotope( {
					filter : selector
				});

				setTimeout(function () {
					reArrangeProjects();
				}, 300);


				return false;
			});

			function reArrangeProjects() {
				setColumnWidth();
				container.isotope('reLayout');
			}


			container.imagesLoaded(function () {
				setColumnWidth();


				container.isotope( {
					itemSelector : '.portfolio-box-1',
					layoutMode : 'masonry',
					resizable : false
				} );
			} );





			$(window).on('debouncedresize', function () {
				reArrangeProjects();

			} );


		} )(jQuery);

	});

		/* DebouncedResize Function */
		(function ($) {
			var $event = $.event,
				$special,
				resizeTimeout;


			$special = $event.special.debouncedresize = {
				setup : function () {
					$(this).on('resize', $special.handler);
				},
				teardown : function () {
					$(this).off('resize', $special.handler);
				},
				handler : function (event, execAsap) {
					var context = this,
						args = arguments,
						dispatch = function () {
							event.type = 'debouncedresize';

							$event.dispatch.apply(context, args);
						};


					if (resizeTimeout) {
						clearTimeout(resizeTimeout);
					}


					execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
				},
				threshold : 150
			};
		} )(jQuery);


})(jQuery);



































