(function () {
  const btnCart = $('.js-cart-list');
  const overlay = $('.modal-backdrop');
  const productsCart = $('.js-cart');
  const closeBtn = $('.js-close-cart');

  btnCart.on('click', function () {
    overlay.toggleClass('show');
    productsCart.toggleClass('show');
  });
  closeBtn.on('click', function () {
    overlay.removeClass('show');
    productsCart.removeClass('show');
  });
  $(document).mouseup(function (e) {
    if ($('.header-cart__wrapper').has(e.target).length === 0) {
      productsCart.removeClass('show');
      overlay.removeClass('show');

    }
  });

})();

