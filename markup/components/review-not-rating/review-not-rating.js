(function () {
  $('.js-done-review-not-rating').on('click', function () {
    $('#write-review-not-rating-modal').modal('hide');
    setTimeout(function () {
      $('#done-write-review').modal('show');
    }, 1000)
  })
})();
