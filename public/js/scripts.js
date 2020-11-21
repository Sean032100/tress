/* 
   Author: MONACILLO, RILAN, NAZ
   Created: 2020
   Description: FOR WEBAPP
*/
// For notification delete at mainclient //
function notifdel(){
    var list = document.getElementById("notiflist");
    var count = document.getElementById("notifcount");
    list.innerHTML = "";
    count.innerHTML = "";
}

// For Work Done Verification Delete at mainstudent //
function notifdel2(){
    var list = document.getElementById("mdlist");
    list.remove();
}

// For Feedback notif delete at mainclient //
function wdvdel(){
    var list = document.getElementById('wdlist');
    var btn = document.getElementById('feedsub');
    var btn2 = document.getElementById('feedres');
    btn.remove();
    btn2.remove();
    list.remove();
    alert("Your Feedback has been sent to the seller.");
    return false;
}

// For button remove of Mark as Done at mainstudent //
function mdsubmit(){
    var btn = document.getElementById('mdbtn');
    btn.remove();
    alert("Your response has been sent to the client. Please wait for the client to verify");
    return false;
}

// For changing value or replace value of profile settings at mainclient //
function pset(){
    var fullname = document.getElementById('fname').value;
    var company = document.getElementById('comp').value;
    var address = document.getElementById('addre').value;
    var contactno = document.getElementById('cont').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('pswrd').value;
    var email = document.getElementById('email').value;
    var description = document.getElementById('desc').value;
    console.log(fullname)

    document.getElementById("fnamess").innerHTML = fullname;
    document.getElementById("compss").innerHTML = company;
    document.getElementById("descss").innerHTML = description;

    document.getElementById("fnames").value = fullname;
    document.getElementById("comps").value = company;
    document.getElementById("addres").value = address;
    document.getElementById("emails").value = email;

    document.getElementById("fname").innerHTML = fullname;
    document.getElementById("comp").innerHTML = company;
    document.getElementById("addre").innerHTML = address;
    document.getElementById("cont").innerHTML = contactno;
    document.getElementById("username").innerHTML = username;
    document.getElementById("pswrd").innerHTML = password;
    document.getElementById("email").innerHTML = email;
    document.getElementById("desc").innerHTML = description;
    alert("Your Profile has been saved.");
    return false;
}

(function($) {
    "use strict"; 
	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 250;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 250);
		}
		hidePreloader();
	});

	/* Navbar Scripts */
	// jQuery to collapse the navbar on scroll
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    /* Rotating Text - Morphtext */
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "fadeIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 2000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
    });

    /* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
            delay: 4000,
            disableOnInteraction: false
		},
        loop: true,
        navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		slidesPerView: 3,
		spaceBetween: 20,
        breakpoints: {
            // when window is <= 992px
            992: {
                slidesPerView: 2
            },
            // when window is <= 768px
            768: {
                slidesPerView: 1
            } 
        }
    });

    
    /* Lightbox - Magnific Popup */
	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
    });
    

    /* Filter - Isotope */
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    
    // filter items on button click
    $('.filters-button-group').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });	
    });

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="body" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 700;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });

	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);

