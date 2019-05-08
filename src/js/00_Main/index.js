$(function() {
    // TOP BANNER
    $('.top_banner_close').click(function(){
        $('.top_banner').slideUp();
    });
    
    // MAIN VISUAL
    $(".visual_slider").slick({
        arrows: false,
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 1000
    });

    // BOOK LIST
    $(".book_slider").slick({
        arrows: false,
        autoplay: true,
        speed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3

    });
});



