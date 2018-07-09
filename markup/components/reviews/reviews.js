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
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        dots: false
      }
    },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          dots: false
        }
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
          dots: false
        }
      }]

  });
})();
