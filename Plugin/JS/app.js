$(document).ready(function(){
  $(".progress-bar").loading();
   
  $(".brand-carousel").owlCarousel({
    loop: true,
    dots: true,
    margin: 15,
    slideSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    resonsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
        0 : {
            items: 3
        },
        768 : {
            items:3
        },
        1000 : {
            items: 5
        },
        1200 : {
            items: 5
        },
        1920 : {
            items: 5
        }
    }
  })


  $(".work-carousel").owlCarousel({
    loop: true,
    dots: true,
    margin: 15,
    slideSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    resonsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
        0 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1000 : {
            items: 3
        },
        1200 : {
            items: 4
        },
        1920 : {
            items: 4
        }
    }
  })


  $(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 100) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});


$(".testimonials-section").owlCarousel({
    loop: true,
    dots: true,
    margin: 15,
    slideSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    resonsiveClass: true,
    responsiveRefreshRate: true,
    responsive: {
        0 : {
            items: 1
        },
        768 : {
            items: 2
        },
        1000 : {
            items: 2
        },
        1200 : {
            items: 3
        },
        1920 : {
            items: 3
        }
    }
  })



});
