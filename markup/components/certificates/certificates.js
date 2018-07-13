(function () {
  $('.js-slider-certificate').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    slidesToShow: 2,
    infinite: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 4
      }
    },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5
        }
      }]
  });
})();
