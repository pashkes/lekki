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
  var btnFilter = $('.js-show-filter-mobile');
  var overlayFilter = $('.filter .modal-backdrop');
  var filter = $('.js-filter');
  var closeFilter = $('.js-close-filter');
  $('.js-show-filter-mobile').on('click', function () {
    $(this).addClass('active');
  });
  btnFilter.on('click', function () {
    overlayFilter.addClass('show');
    filter.addClass('show');
  });
  closeFilter.on('click', function () {
    overlayFilter.removeClass('show');
    filter.removeClass('show');
    $('.js-show-filter-mobile').removeClass('active');

  });
  $(document).mouseup(function (e) {
    if ($(e.target).closest(".filter__inner").length == 0) {
      filter.removeClass('show');
      overlayFilter.removeClass('show');
      $('.js-show-filter-mobile').removeClass('active');
    }
  });

  var toggleTextButton = function () {
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

