(function () {
  if ($('.js-toggle-sort').length) {
    $('.js-toggle-sort').on('click', function () {
      if (!$(this).hasClass('active')) {
        $('.js-toggle-sort').removeClass('active');
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
      const index = $(this).parent().index();
      $('.catalog__sort-element').eq(index).find('input').prop('checked', true);
    });
    $('.catalog__radio').on('change', function () {
      $('.js-toggle-sort').removeClass('active');
      const index = $(this).parents('li').index();
      $('.catalog__sort-element').eq(index).find('.js-toggle-sort').addClass('active');
    });
  }
})();
