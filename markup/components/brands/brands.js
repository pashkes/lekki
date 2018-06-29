(function () {
  $('.js-brands-slider').slick({
    arrows: false,
    dots: true,
    variableWidth: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1343,
        settings: {
          variableWidth: false,
          slidesToShow: 9
        }
      }
    ]
  });
})();



