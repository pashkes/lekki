
(function () {
  const productSlider = $('.js-popular-slider');
  const advantageSliderSettigs = {
    slidesToShow: 5,
    nextArrow: $('.js-popular-product-prev'),
    prevArrow: $('.js-popular-product-next'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1900,
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


