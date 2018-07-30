(function () {
  $('.js-done-request').on('click',function () {
    $('#fast-order-modal').modal('hide');
    setTimeout(function () {
      $('#done-request').modal('show')
    }, 1000)
  });
})();
