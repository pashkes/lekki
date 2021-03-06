(function () {
  $('.js-custom-select-date').SumoSelect({
    nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
    placeholder: 'Дата',
    floatWidth: 144
  });
  $('.js-custom-select-month').SumoSelect({
    nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
    placeholder: 'Месяц',
    floatWidth: 144
  });


  $('.js-show-hide-password').on('click', function () {
    $(this).toggleClass('active');
    if ($(this).prev().attr('type') === 'password') {
      $(this).prev().attr('type', 'text')
    } else {
      $(this).prev().attr('type', 'password')
    }
  })
})();
var selectYear;
$(document).ready(function () {
  selectYear = $('.js-custom-select-year').SumoSelect({
    nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
    placeholder: 'Год',
    floatWidth: 144
  });
  var yearScroll;
  if ($('.cabinet .options').length) {
    new SimpleBar($('.cabinet .options')[0],
      {autoHide: false});
    new SimpleBar($('.cabinet .options')[1],
      {autoHide: false});
    yearScroll = new SimpleBar($('.cabinet .options')[2],
      {autoHide: false});
  }

  $('.cabinet__select--year').find('.SelectBox').on('click', function () {
    yearScroll.getScrollElement().scrollTop = 731;
  });

});


