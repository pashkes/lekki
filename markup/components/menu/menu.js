(function () {
  var btnToggleMenuShow = $('.js-show-menu');
  var menu = $('.js-menu');

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
    menu.find('.menu__sub-lists').hide();
    menu.find('.menu__sub-lists').eq(0).show();
  });
  var item = $('.menu__item');
  item.on('mouseover', function () {
    if (!$(this).data('id')) {
      return false;
    }
    var idList = $(this).data('id');
    menu.find('.menu__sub-lists').hide();
    menu.find('#' + idList).show();
  });
})();
