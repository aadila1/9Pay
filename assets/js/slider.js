$(document).ready(function () {
    console.log("ready")
    if ($(window).width() <= 768) { // check if screen width is less than 768px
        $('.slick-track-tog').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            // autoplay: true,
            autoplaySpeed: 0, // Play without delay
            // speed: 3000, // Speed of scroll
            cssEase: 'linear',
            // infinite: true,
            initialSlide: 0,
            arrows: true,
            draggable: false,
            // pauseOnHover: false,
            // pauseOnFocus: false,
            dots: true,
            swipe: true,
            touchMove: false,
            variableWidth: true,
        });
    }

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        adaptiveHeight: true
    });

    $('.slider-center__carousel-step').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        infinite: true,
        vertical: true
    });

    // When clicking on a step, slide the main slider to the corresponding slide
    $('.slider-center__carousel-step').on('afterChange', function (event, slick, currentSlide) {
        $('.slider').slick('slickGoTo', currentSlide);
    });

    // When main slider changes, update the active state of the step without sliding it
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.slider-center__carousel-step').find('.slick-slide').removeClass('slick-current slick-active');
        $('.slider-center__carousel-step').find('.slick-slide[data-slick-index="' + nextSlide + '"]').addClass('slick-current slick-active');
    });

    $('.slide-track-1').slick({
        slidesToShow: 1,
        slidesToScroll: 9,
        autoplay: true,
        autoplaySpeed: 0,
        variableWidth: true,
        arrows: false,
        variableHeight: true,
        speed: 9500,
        cssEase: 'linear',
        infinite: true, adaptiveHeight: true,
    });

    $('.slide-track-2').slick({
        slidesToShow: 1,
        slidesToScroll: 9,
        autoplay: true,
        autoplaySpeed: 500,
        variableWidth: true,
        arrows: false,
        variableHeight: true,
        speed: 11000,
        cssEase: 'linear',
        infinite: true, adaptiveHeight: true,
    });


    var lastScrollTop = 0;
    $(window).scroll(function () {
        var currentScrollTop = $(this).scrollTop();
        if (currentScrollTop > lastScrollTop) {
            // Scrolling down
            $(".download-shop").addClass("hidden");
        } else {
            // Scrolling up
            $(".download-shop").removeClass("hidden");
        }
        lastScrollTop = currentScrollTop;
    });


})


document.addEventListener("DOMContentLoaded", function () {
    const firstImg = document.querySelector(".first-img");
    const otherImgs = document.querySelectorAll(".other-img");

    function resetAnimations() {
        firstImg.style.animation = 'none';
        otherImgs.forEach(img => img.style.animation = 'none');

        // Force reflow to make new animations take effect
        void firstImg.offsetWidth;

        firstImg.style.animation = 'slideIn 1s forwards, vanish 1s 9s forwards';
        otherImgs[0].style.animation = 'popup 0.5s 1s forwards, vanish 1s 9s forwards';
        otherImgs[1].style.animation = 'popup 0.5s 1.5s forwards, vanish 1s 9s forwards';
        otherImgs[2].style.animation = 'popup 0.5s 2s forwards, vanish 1s 9s forwards';
        otherImgs[3].style.animation = 'popup 0.5s 2.5s forwards, vanish 1s 9s forwards';
        otherImgs[4].style.animation = 'popup 0.5s 3s forwards, vanish 1s 9s forwards';
    }

    // Reset animations every 10 seconds
    setInterval(resetAnimations, 10000);
});

// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('section:not(.no-hide > section)'); // This excludes sections within elements having a 'no-hide' class.
//     const navbarCollapse = document.getElementById('navbarSupportedContent');

//     navbarCollapse.addEventListener('show.bs.collapse', () => {
//         sections.forEach(section => {
//             section.style.display = 'none';
//         });
//     });

//     navbarCollapse.addEventListener('hide.bs.collapse', () => {
//         sections.forEach(section => {
//             section.style.display = 'block';
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    // Select sections and footers to hide
    const sectionsToHide = document.querySelectorAll(
        '.navbar-collapse, .section_banner, .section_payment, .deploy__connect, .customer__pay, .section_img_payment, .section_faq, .section_form_contact, #footer-main'
    );
    const mobileNavbar = document.querySelector('.mobile-navbar');
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    navbarCollapse.addEventListener('show.bs.collapse', () => {
        sectionsToHide.forEach(section => {
            section.style.display = 'none';
        });
        mobileNavbar.style.display = 'block'; // Ensure mobile navbar is visible
    });

    navbarCollapse.addEventListener('hide.bs.collapse', () => {
        sectionsToHide.forEach(section => {
            section.style.display = '';  // This will revert back to the initial CSS display value (default state)
        });
        mobileNavbar.style.display = '';  // Revert mobile navbar to its default state as well
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const menuIcon = document.querySelector('.menu-icon');

    navbarToggler.addEventListener('click', () => {
        if (menuIcon.classList.contains('active')) {
            menuIcon.classList.remove('active');
        } else {
            menuIcon.classList.add('active');
        }
    });
    document.body.style.zoom = "90%";

});

$(document).ready(function () {
    $("#drop3").click(function (event) {
        event.stopPropagation();
        $(".submenu-wrapper").slideToggle();
    });

    $(document).click(function () {
        $(".submenu-wrapper").slideUp();
    });
});

$(document).ready(function () {
    $("#drop4").click(function (event) {
        event.stopPropagation();
        $(".submenu-wrapper4").slideToggle();
    });

    $(document).click(function () {
        $(".submenu-wrapper4").slideUp();
    });
});


$(document).ready(function () {
    $("#drop5").click(function (event) {
        event.stopPropagation();
        $(".submenu-wrapper5").slideToggle();
    });

    $(document).click(function () {
        $(".submenu-wrapper5").slideUp();
    });
});





