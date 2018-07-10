$(function () {
  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 4000,
    values: [195, 3000],
    slide: function (event, ui) {
      $('.js-from-cost').val(ui.values[0] + ' \u20BD');
      $('.js-to-cost').val(ui.values[1] + ' \u20BD')
    }
  });
  $('.js-from-cost').val($('#slider-range').slider('values', 0) + ' \u20BD');
  $('.js-to-cost').val($('#slider-range').slider('values', 1) + ' \u20BD');

});
(function () {
  const btnCart = $('.js-show-filter-mobile');
  const overlay = $('.filter .modal-backdrop');
  const productsCart = $('.js-filter');
  const closeBtn = $('.js-close-filter');

  btnCart.on('click', function () {
    overlay.toggleClass('show');
    productsCart.toggleClass('show');
  });
  closeBtn.on('click', function () {
    overlay.removeClass('show');
    productsCart.removeClass('show');
  });
  $(document).mouseup(function (e) {
    if ($('.filter__inner').has(e.target).length === 0) {
      productsCart.removeClass('show');
      overlay.removeClass('show');
    }
  });

})();

