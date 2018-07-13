(function () {
  $('.js-counter').on('click', function(event){
    var $target = $(event.target);
    var start =Number($(this).find('.js-counter-field').val());
    if($target.hasClass('js-counter-up') && start >= 1) {
      start--;
      $(this).find('.js-counter-field').val(start);
    } else if ($target.hasClass('js-counter-down')) {
      start++;
      $(this).find('.js-counter-field').val(start);
    }
  });
})();
