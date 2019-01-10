// Main
$(document).ready(function () {
	// Phần Slider
	$('.home-slider .owl-carousel').owlCarousel({
		items: 1,
		autoplay: true,
		nav: true,
		autoplayHoverPause: true,
		loop: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 1,
			},
			// breakpoint from 768 up
			768: {
				items: 1,
			},
			// breakpoint from 992 up
			992: {
				items: 1,
				nav: false,
				dots: true
			}
		}
	});
	// Phần Clients
	// $('.home-clients .owl-carousel').owlCarousel({
	// 	items: 1,
	// 	nav: true,
	// 	dots: false,
	// 	navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
	// 	responsive: {
	// 		// breakpoint from 480 up
	// 		480: {
	// 			items: 2,
	// 		},
	// 		// breakpoint from 768 up
	// 		768: {
	// 			items: 4,
	// 		},
	// 		// breakpoint from 992 up
	// 		992: {
	// 			items: 6,
	// 		}
	// 	}
	// });
	//phan brother
	
	$('.son .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 1,
			},
			// breakpoint from 768 up
			768: {
				items: 1,
			},
			// breakpoint from 992 up
			992: {
				items: 1,
			}
		}
	});
	$('.home-sister .owl-carousel').owlCarousel({
		items: 1,
		nav: true,
		loop: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 1,
			},
			// breakpoint from 768 up
			768: {
				items: 1,
			},
			// breakpoint from 992 up
			992: {
				items: 1,
			}
		}
	});
});


AOS.init();
