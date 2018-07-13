(function () {
  $('.js-other-form-slider').slick(
    {
      mobileFirst: true,
      arrows: false,
      rows: 2,
      nextArrow: $('.js-other-form-prev'),
      prevArrow: $('.js-other-form-next'),
      infinite: false,
      adaptiveHeight: true,
      dots: true,
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          rows: 1,
        }
      },
        {
          breakpoint: 1199,
          settings: {
            rows: 1,
            slidesToShow: 3,
            arrows: true,
            dots: false
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            rows: 1,
            arrows: true,
            dots: false
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
            rows: 1,
            arrows: true,
            dots: false
          },

        },
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 6,
            rows: 1,
            arrows: true,
            dots: false
          }
        }

      ]
    }
  );

})();
