
(function () {
  var productSlider = $('.js-popular-slider');
  var advantageSliderSettigs = {
    slidesToShow: 5,
    nextArrow: $('.js-popular-product-next'),
    prevArrow: $('.js-popular-product-prev'),
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1600,
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


