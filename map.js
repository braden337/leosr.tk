// This example creates circles on the map, representing
// populations in North America.

// First, create an object containing LatLng and population for each city.
var citymap = {};
citymap['mcgillivray'] = {
  center: new google.maps.LatLng(49.794831, -97.277491),
  cell: true
};
citymap['lasalle'] = {
  center: new google.maps.LatLng(49.712267, -97.260414),
  cell: true
};
citymap['tailleau'] = {
  center: new google.maps.LatLng(49.859289, -97.360818),
  cell: true
};
citymap['leos'] = {
  center: new google.maps.LatLng(49.990947, -97.276556),
  cell: true
};
citymap['sturgeon'] = {
  center: new google.maps.LatLng(49.928006, -97.423651)
};
citymap['comberbach'] = {
  center: new google.maps.LatLng(50.133318, -97.463086)
};
citymap['bracken'] = {
  center: new google.maps.LatLng(50.266756, -96.970863),
  cell: true
};
citymap['interlake'] = {
  center: new google.maps.LatLng(50.427171, -97.152156),
  cell: true
};
citymap['loewen'] = {
  center: new google.maps.LatLng(50.974926, -97.012017),
  cell: true
};
citymap['pyziak'] = {
  center: new google.maps.LatLng(50.995276, -97.507920),
  cell: true
};
citymap['dugald'] = {
  center: new google.maps.LatLng(49.887039, -96.837452)
};
citymap['baker'] = {
  center: new google.maps.LatLng(50.131870, -96.495725)
};
citymap['greenwald'] = {
  center: new google.maps.LatLng(50.306750, -96.510706)
};
citymap['brightstone'] = {
  center: new google.maps.LatLng(50.306946, -96.267369)
};
citymap['whiteshell'] = {
  center: new google.maps.LatLng(49.954404, -95.954884)
};


var cityCircle;
var marker;

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 9,
    center: new google.maps.LatLng(50.277613, -96.994983),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var city in citymap) {
    var color;
    if(citymap[city].cell == true) {
      color = 'cadetblue';
    }
    else {
      color = 'red';
    }

    var populationOptions = {
      strokeColor: color,
      strokeOpacity: 0.5,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: 12874.8
    };
    var markerOptions = {
      center: citymap[city].center
    };
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);
  //   marker = new google.maps.Marker({
  //     position: citymap[city].center,
  //     map: map
  // });

}
}

google.maps.event.addDomListener(window, 'load', initialize);
