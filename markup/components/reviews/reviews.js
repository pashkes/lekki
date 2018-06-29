(function () {
  $('.js-slider-reviews').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },{
      breakpoint: 1343,
      settings: {
        slidesToShow: 3
      }
    }]

  });
})();
