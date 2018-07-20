(function () {
  $('.js-slider-reviews').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 767,
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
        breakpoint: 1899,
        settings: {
          slidesToShow: 5,
          dots: false
        }
      }]

  });
})();
