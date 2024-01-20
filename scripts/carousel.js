 // init slick carousel
 $('.carousel-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.custom-prev-arrow'),
    nextArrow: $('.custom-next-arrow'),
    arrows: true,
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
});

 $('.carousel-container .img-border img').on('click', function() {
    showOverlay(this.src);
});

