(function () {
  //Переключение текста внутри кнопки которая показывает карту на странице оформление заказа
  var toggleTextButton = function () {
    var click = 1;
    $('.js-toggle-map').on('click', function () {
      if (click % 2 == 0) {
        $(this).text('Скрыть карту');
      } else {
        $(this).text('Показать карту');
      }
      ;
      click = click + 1;
    });
  };

  if ($('.js-toggle-map').length) {
    toggleTextButton();
  }

  // Показать блок с картой
  var showMapOnButtonClick = function() {
    $('.js-show-map').on('click', function () {
      $('.js-map').slideDown();
    });
  };

  // Скрыть текущий блок и перейти к доставке курьером
  var hiddenCurrentAndShowCourier = function () {
    $('.js-go-to-courier').on('click', function (evt) {
      evt.preventDefault();
      $('.js-delivery-courier').prop('checked', true);
      hideBlocksPickupDelivery();
      showBlocksCourier();
    });
  };
  var showBlocksCourier = function () {
    $('.order__courier').slideDown();
    $('.js-pay-courier').slideDown();
  };
  var hideBlocksCourier = function () {
    $('.order__courier').slideUp();
    $('.js-pay-courier').slideUp();
  };
  var hideBlocksPickupDelivery = function () {
    $('.js-delivery-pickup-section').slideUp();
    $('.js-map').slideUp();
    $('.order__pay-order').slideUp();
  };
  // Отслеживание измениния радио баттонов и показывать нужный блок доставки в зависимости от выбранного
  var changeRadioOrder = function () {
    var deliveryRadio = $('.js-pickup-delivery');
    var deliveryRadioCourier = $('.js-delivery-courier');

    deliveryRadio.on('change', function () {
      if ($(this).prop('checked')) {
        $('.js-delivery-pickup-section').slideDown();
        hideBlocksCourier();
        $('.order__pay-order').slideDown();
      }
    });
    deliveryRadioCourier.on('change', function () {
      if ($(this).prop('checked')) {
        hideBlocksPickupDelivery();
        showBlocksCourier();
      }
    });
  };
  var showSurrended = function () {
    $('.js-pay-cash').on('change', function () {
        $('.js-surrended').slideDown();
    });
    $('.js-pay-card').on('change', function () {
      $('.js-surrended').slideUp();
    })
  };
  if ($('.js-pickup-delivery')) {
    changeRadioOrder();
    showMapOnButtonClick();
    hiddenCurrentAndShowCourier();
    showSurrended();
  }

})();
