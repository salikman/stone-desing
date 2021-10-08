"use strict";

(function($) {
    $('.header__collapse').click(() => {
        $('.header').toggleClass('open-menu');
    });

    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
    ////////////////////////////////
    // Swiper
    new Swiper(".home-slider-js", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        grabCursor: true,
    });
})(jQuery)
