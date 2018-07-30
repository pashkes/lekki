(function () {
  $('.js-done-write-review').on('click', function () {
    $('#write-review-modal').modal('hide');
    setTimeout(function () {
      $('#done-write-review').modal('show')
    }, 1000)
  });
})();
