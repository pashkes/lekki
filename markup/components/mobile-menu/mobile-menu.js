(function () {
  const mobileMenu = $('.js-mobile-menu');
  const closeMenu = mobileMenu.find('.js-close-mobile-menu');
  const showMenu = mobileMenu.find('.js-menu-show-mobile');
  const backHome = mobileMenu.find('.js-back-home');
  const itemsMenu = mobileMenu.find('.mobile-menu__link');
  const category = mobileMenu.find('.mobile-menu__category');

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
    const href = $(this).attr('href');
    const sliceHref = href.slice(1);
    mobileMenu.find('.mobile-menu__sub-list').hide();
    mobileMenu.find('#' + sliceHref).show();
    category.addClass('active');
    mobileMenu.find('.mobile-menu__content').hide();
  });
})();
