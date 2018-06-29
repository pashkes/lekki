
(function () {
  const productSlider = $('.js-popular-slider');
  const advantageSliderSettigs = {
    slidesToShow: 5,
    nextArrow: $('.js-popular-product-prev'),
    prevArrow: $('.js-popular-product-next')
  };

  $(window).on('load resize', function () {
    slickMobile(productSlider, advantageSliderSettigs);
  });

// включение слайдера на мобильном
  function slickMobile(slider, settings) {
    if ($(window).width() < 1344) {
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


