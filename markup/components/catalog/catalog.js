(function () {
  if ($('.js-toggle-sort').length) {
    $('.js-sort').on('click', function () {
     if ($(this).hasClass('active')) {
       $(this).toggleClass('down');
     }
      $('.js-sort').removeClass('active');
      $(this).addClass('active');
    });
  }
})();
