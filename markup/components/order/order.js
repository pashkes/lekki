(function () {
  //Переключение текста внутри кнопки которая показывает карту на странице оформление заказа
  const toggleTextButton = function () {
    let click = 1;
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
  const showMapOnButtonClick = function() {
    $('.js-show-map').on('click', function () {
      $('.js-map').slideDown();
    });
  };

  // Скрыть текущий блок и перейти к доставке курьером
  const hiddenCurrentAndShowCourier = function () {
    $('.js-go-to-courier').on('click', function (evt) {
      evt.preventDefault();
      $('.js-delivery-courier').prop('checked', true);
      hideBlocksPickupDelivery();
      showBlocksCourier();
    });
  };
  const showBlocksCourier = function () {
    $('.order__courier').slideDown();
    $('.js-pay-courier').slideDown();
  };
  const hideBlocksCourier = function () {
    $('.order__courier').slideUp();
    $('.js-pay-courier').slideUp();
  };
  const hideBlocksPickupDelivery = function () {
    $('.js-delivery-pickup-section').slideUp();
    $('.js-map').slideUp();
    $('.order__pay-order').slideUp();
  };
  // Отслеживание измениния радио баттонов и показывать нужный блок доставки в зависимости от выбранного
  const changeRadioOrder = function () {
    const deliveryRadio = $('.js-pickup-delivery');
    const deliveryRadioCourier = $('.js-delivery-courier');

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
  if ($('.js-pickup-delivery')) {
    changeRadioOrder();
    showMapOnButtonClick();
    hiddenCurrentAndShowCourier();
  }

})();
