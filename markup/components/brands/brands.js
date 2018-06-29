(function () {
  const productSlider = $('.js-brands-slider');
  const advantageSliderSettigs = {
    arrows: false,
    dots: true,
    variableWidth: true,
    infinite: false
  };

  $(window).on('load resize', function () {
    slickMobile(productSlider, advantageSliderSettigs);
  });

// включение слайдера на мобильном
  function slickMobile(slider, settings) {
    if ($(window).width() > 1343) {
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



