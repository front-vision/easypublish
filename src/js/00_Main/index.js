// TOP BANNER
$(function() {
    $('.top_banner_close').click(function(){
        $('.top_banner').slideUp();
    });
});

// MAIN VISUAL
$(function() {
    $(".visual_slider").slick({
        dots: true,
        arrows: false,
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 1000
    })
});

// BOOK LIST
$(function() {
    $(".book_slider").slick({
        arrows: false,
        autoplay: true,
        speed: 700,
        centerMode: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3
    })
});
