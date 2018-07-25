(function () {

  var myMap, data = [];


  function fromString(val) {
    var parts = val.split(',');
    return [parseFloat(parts[1]), parseFloat(parts[0])];
  }

  var init = function () {
    data[0] = {
      name: 'ГОРЗДРАВ Аптека №1392',
      text: '<span class="map-name">ГОРЗДРАВ Аптека №1392</span>' +
      '<span class="map-address">Климентовский переулок 12, строение 1</span>' +
      '<span class="map-time">09:00—21:00</span>' +
      '<span class="map-phone">+7 (495) 797-63-36, </span>' +
      '<span class="map-phone">+7 (495) 797-63-36,</span>',
      coords: '37.751188,55.716701',
      geodata: 'ул. Васильцовский Стан, д.11'
    };

    function center() {
      if (window.innerWidth < 767) {
        return '37.636635, 55.719936'
      } else {
        return '37.209218, 55.753559'
      }
    };

    myMap = new ymaps.Map("map-list", {
      center: fromString(center()),
      zoom: ((data[0]['coords'] !== undefined) ? 10 : 10)
    }, {suppressMapOpenBlock: true});

    var myCollection = new ymaps.GeoObjectCollection({}, {
      iconLayout: 'default#image',
      iconImageHref: 'static/img/general/pin.svg',
      iconImageSize: [26, 36],
      iconImageOffset: [-10, -10]
    });

    for (var i = 0; i < data.length; i++) {
      myCollection.add(
        new ymaps.Placemark(
          fromString(data[i]['coords']),
          {
            iconContent: data[i].address,
            balloonContentHeader: data[i].address,
            balloonContentBody: data[i].text,
            hintContent: data[i].address
          }
        )
      );
    }

    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable("scrollZoom");
    myMap.controls.remove('searchControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('mapTools');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('rulerControl');
  };
  if (typeof ymaps === 'undefined') {
    return false
  } else {
    if ($('#map-list').length)  {
      ymaps.ready(init);
    }
  }

})();
