(function () {
  $('.js-open-modal-sign-in').on('click', function () {
    $('#registration-modal').modal('show');
  });
  $('.js-open-tooltip').on('click', function () {
    $('.js-custom-tooltip').addClass('show');
    $(this).addClass('active');
  });
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".js-custom-tooltip").length == 0) {
      $('.js-custom-tooltip').removeClass('show');
      $('.js-open-tooltip').removeClass('active');
    }
  });
if ($('.header')) {
  $('.js-custom-select-location').SumoSelect();
  $('.js-custom-select-location-mobile').SumoSelect();
}

})();
