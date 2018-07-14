(function () {
  const btnToggleMenuShow = $('.js-show-menu');
  const menu = $('.js-menu');

  btnToggleMenuShow.on('click', function () {
    $(this).toggleClass('active');
    menu.toggleClass('active');
  });

  menu.find('.menu__link').hover(function () {
    menu.find('.menu__item').removeClass('active');
    $(this).parent().addClass('active')
  });
  menu.on('mouseleave', function () {
    btnToggleMenuShow.removeClass('active');
    menu.removeClass('active');
  });
})();
