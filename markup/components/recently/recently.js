(function () {
  const productSlider = $('.js-products-slider-recently');
  productSlider.slick(
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
          breakpoint: 1344,
          settings: {
            rows: 1,
            arrows: true,
            slidesToShow: 5,
            dots: false
          }
        }],
    }
  );

})();


