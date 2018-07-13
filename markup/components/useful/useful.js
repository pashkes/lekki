
(function () {
  $('.js-products-slider-useful').slick(
    {
      mobileFirst: true,
      arrows: false,
      rows: 2,
      nextArrow: $('.js-useful-product-prev'),
      prevArrow: $('.js-useful-product-next'),
      dots: true,
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
        {
          breakpoint: 1199,
          settings: {
            rows: 1,
            arrows: true,
            slidesToShow: 5,
            dots: false
          }
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 6,
            rows: 1,
            arrows: true,
            dots: false
          }
        },
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 8,
            rows: 1,
            arrows: true,
            dots: false
          }
        }
      ]
    }
  );

})();
