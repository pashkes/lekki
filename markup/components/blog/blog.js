(function () {
  $('.js-blog-slider').slick({
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
      {
        breakpoint: 1344,
        settings: {
          slidesToShow: 3
        }
      }]
  });
})();
