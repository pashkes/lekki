(function () {
  var btnCart = $('.js-cart-list');
  var overlay = $('.cart .modal-backdrop');
  var productsCart = $('.js-cart');
  var closeBtn = $('.js-close-cart');

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

