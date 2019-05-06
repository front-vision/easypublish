// jQuery
$(function() {
    $('.t_banner_close').click(function(){
        console.log('hi');
        $('.top_banner').slideUp();
    });
});

// slick
$(function() {
    $(".visual_slider").slick({
        fade: true,
        speed: 2000
    });
    $(".center").slick({
        dots: false,
        infinite: true, 
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
    });
});