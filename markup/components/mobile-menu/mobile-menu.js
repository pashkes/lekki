(function () {
  var mobileMenu = $('.js-mobile-menu');
  var closeMenu = mobileMenu.find('.js-close-mobile-menu');
  var showMenu = mobileMenu.find('.js-menu-show-mobile');
  var backHome = mobileMenu.find('.js-back-home');
  var itemsMenu = mobileMenu.find('.mobile-menu__link');
  var category = mobileMenu.find('.mobile-menu__category');

  showMenu.on('click', function () {
    mobileMenu.addClass('active');
    mobileMenu.find('.mobile-menu__content').show();
    category.removeClass('active');
  });
  backHome.on('click', function () {
    mobileMenu.find('.mobile-menu__content').show();
    category.removeClass('active');
    mobileMenu.find('.mobile-menu__sub-list').hide();
  });
  closeMenu.on('click', function () {
    mobileMenu.removeClass('active');
    category.addClass('active');
    mobileMenu.find('.mobile-menu__sub-list').hide();
  });

  itemsMenu.on('click', function (evt) {
    evt.preventDefault();
    var href = $(this).attr('href');
    var sliceHref = href.slice(1);
    mobileMenu.find('.mobile-menu__sub-list').hide();
    mobileMenu.find('#' + sliceHref).show();
    category.addClass('active');
    mobileMenu.find('.mobile-menu__content').hide();
  });

  $(document).mouseup(function (e) {
    if ($(e.target).closest(".mobile-menu__inner").length == 0) {
      mobileMenu.removeClass('active');
      category.addClass('active');
      mobileMenu.find('.mobile-menu__sub-list').hide();
    }
  });

})();
