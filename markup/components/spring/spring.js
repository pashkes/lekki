(function () {
  const productSlider = $('.js-products-slider');
  const advantageSliderSettigs = {
    slidesToShow: 5,
    nextArrow: $('.js-spring-product-prev'),
    prevArrow: $('.js-spring-product-next'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8
        }
      }
    ]
  };

  $(window).on('load resize', function () {
    slickMobile(productSlider, advantageSliderSettigs);
  });

// включение слайдера на мобильном
  function slickMobile(slider, settings) {
    if ($(window).width() < 1200) {
      if (slider.hasClass('slick-initialized')) {
        slider.slick('unslick');
      }
      return
    }
    if (!slider.hasClass('slick-initialized')) {
      return slider.slick(settings);
    }
  };

})();


