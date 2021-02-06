$(function() {



    // ======= Updates Slides 
    //$('.updates_slide').slick({
    //    infinite: true,
    //    slidesToShow: 2,
    //    slidesToScroll: 1,
    //    arrows: true,
    //    nextArrow: '.arrow_right',
    //    prevArrow: '.arrow_left',
    //    responsive: [{
    //            breakpoint: 768,
    //            settings: {
    //                slidesToShow: 1,
    //            }
    //        },
    //        {
    //            breakpoint: 575,
    //            settings: {
    //                slidesToShow: 1,
    //            }
    //        }
    //    ]
    //
    //});



    // ======= Back to top
    $(window).on('scroll', function(event) {
            if ($(this).scrollTop() > 600) {
                $('.back_to_top').fadeIn(200)
            } else {
                $('.back_to_top').fadeOut(200)
            }
        })
        // ======= Animate the scroll to top
    $('.back_to_top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1000)

    });

});