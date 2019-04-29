$(function() {
    $(".center").slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });
    $(".visual-slider").slick({
        fade: true,
        speed: 2000
    });
});