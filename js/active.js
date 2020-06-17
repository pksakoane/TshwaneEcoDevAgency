(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Newsticker Active Code
    $.simpleTicker($("#breakingNewsTicker"), {
        speed: 1000,
        delay: 3000,
        easing: 'swing',
        effectType: 'roll'
    });
    $.simpleTicker($("#internationalTicker"), {
        speed: 1000,
        delay: 4000,
        easing: 'swing',
        effectType: 'roll'
    });

    // Nav Active Code
    if ($.fn.classyNav) {
        $('#newspaperNav').classyNav();
    }


    //Media Queries
    $('.classy-navbar-toggler').on('click', function () {
        $('.classynav').attr('style', 'display: block !important');
        $('#toggler-nav').addClass('breakpoint-on classynav').parent().siblings().find('div').removeClass('breakpoint-off');
        $('.classy-menu').addClass('menu-on');
    });

    //Gallery Active Code
    if ($.fn.magnificPopup) {
        $('.videoPlayer').magnificPopup({
            type: 'iframe'
        });
    }

    //ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // CouterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Sticky Active Code
    if ($.fn.sticky) {
        $("#stickyMenu").sticky({
            topSpacing: 0
        });
    }

    // wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

    // prevent default a click
    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

})(jQuery);