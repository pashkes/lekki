(function () {
  $('.js-brands-slider').slick({
    arrows: false,
    dots: true,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          variableWidth: false,
          slidesToShow: 9
        }
      }
    ]
  });
})();



