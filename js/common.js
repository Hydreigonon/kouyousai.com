$(function(){
    $("#js-slider-1").slick({
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        dots: true,
        appendDots: $(".dots-1"),
        speed: 800,
        slideToShow: 1,
        centerMode: true,
        variableWidth: true,
        pauseOnHover: false,
    });
});
