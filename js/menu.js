$(function() {
    // ======= Manubar toggle
    $('.open').on('click', function() {
        $('.toggle_navbar').toggleClass("show");
    });
    $('.close').on('click', function() {
        $('.toggle_navbar').toggleClass("show");
    });

    // ======= Sticky menu
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header_area").removeClass("sticky");
        } else {
            $(".header_area").addClass("sticky");
        }
    });


});