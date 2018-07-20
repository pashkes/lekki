(function () {
  if ($('.js-sort').length) {

    $('.js-toggle-sort-mobile').on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }
    });

    $('.js-sort').on('click', function () {
     if ($(this).hasClass('active')) {
       $(this).toggleClass('down');
     }
      $('.js-sort').removeClass('active');
      $(this).addClass('active');
    });
  }
})();
