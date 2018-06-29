(function () {
  const productSlider = $('.js-products-slider-disease');
  const advantageSliderSettigs = {
    slidesToShow: 5,
    nextArrow: $('.js-disease-product-prev'),
    prevArrow: $('.js-disease-product-next')
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
  var msnry = new Masonry( '.js-grid', {
    percentPosition: true,
    columnWidth: '.js-col'
  });
})();

