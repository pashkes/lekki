(function () {
  $('.js-products-slider-recently').slick(
    {
      mobileFirst: true,
      arrows: false,
      rows: 2,
      nextArrow: $('.js-recently-product-prev'),
      prevArrow: $('.js-recently-product-next'),
      dots: true,
      responsive: [{
        breakpoint: 768,
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
          }
        },
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 8,
            rows: 1,
            arrows: true,
          }
        }
      ]
    }
  );

})();
