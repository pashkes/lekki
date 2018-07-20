$(function () {
  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 4000,
    values: [195, 3000],
    slide: function (event, ui) {
      $('.js-from-cost').val(ui.values[0]);
      $('.js-to-cost').val(ui.values[1])
    }
  });
  $('.js-from-cost').val($('#slider-range').slider('values', 0));
  $('.js-to-cost').val($('#slider-range').slider('values', 1));

});
(function () {
  const btnFilter = $('.js-show-filter-mobile');
  const overlayFilter = $('.filter .modal-backdrop');
  const filter = $('.js-filter');
  const closeFilter = $('.js-close-filter');

  btnFilter.on('click', function () {
    overlayFilter.addClass('show');
    filter.addClass('show');
  });
  closeFilter.on('click', function () {
    overlayFilter.removeClass('show');
    filter.removeClass('show');
  });
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".filter__inner").length == 0) {
      filter.removeClass('show');
      overlayFilter.removeClass('show');
    }
  });

  const toggleTextButton = function () {
    $('.js-toggle-filter-btn').on('click', function () {
      $(this).toggleClass('active');
      var text = $(this).find('i').text();
      $(this).find('i').text(function(i, text){
        return text === "Показать все" ? "Скрыть" : "Показать все";
      })
    });
  };
  toggleTextButton();
})();

