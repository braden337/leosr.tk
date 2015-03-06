//adapded from this example http://code.google.com/apis/maps/documentation/javascript/overlays.html#CustomOverlays
//text overlays
function TxtOverlay(pos, txt, cls, map){

	// Now initialize all properties.
	this.pos = pos;
	this.txt_ = txt;
	this.cls_ = cls;
	this.map_ = map;

	// We define a property to hold the image's
	// div. We'll actually create this div
	// upon receipt of the add() method so we'll
	// leave it null for now.
	this.div_ = null;

	// Explicitly call setMap() on this overlay
	this.setMap(map);
}

TxtOverlay.prototype = new google.maps.OverlayView();



TxtOverlay.prototype.onAdd = function(){

	// Note: an overlay's receipt of onAdd() indicates that
	// the map's panes are now available for attaching
	// the overlay to the map via the DOM.

	// Create the DIV and set some basic attributes.
	var div = document.createElement('DIV');
	div.className = this.cls_;

	div.innerHTML = this.txt_;

	// Set the overlay's div_ property to this DIV
	this.div_ = div;
	var overlayProjection = this.getProjection();
	var position = overlayProjection.fromLatLngToDivPixel(this.pos);
	div.style.left = position.x + 'px';
	div.style.top = position.y + 'px';
	// We add an overlay to a map via one of the map's panes.

	var panes = this.getPanes();
	panes.floatPane.appendChild(div);
}
TxtOverlay.prototype.draw = function(){


	var overlayProjection = this.getProjection();

	// Retrieve the southwest and northeast coordinates of this overlay
	// in latlngs and convert them to pixels coordinates.
	// We'll use these coordinates to resize the DIV.
	var position = overlayProjection.fromLatLngToDivPixel(this.pos);


	var div = this.div_;
	div.style.left = position.x + 'px';
	div.style.top = position.y + 'px';



}
	//Optional: helper methods for removing and toggling the text overlay.  
	TxtOverlay.prototype.onRemove = function(){
		this.div_.parentNode.removeChild(this.div_);
		this.div_ = null;
	}
	TxtOverlay.prototype.hide = function(){
		if (this.div_) {
			this.div_.style.visibility = "hidden";
		}
	}

	TxtOverlay.prototype.show = function(){
		if (this.div_) {
			this.div_.style.visibility = "visible";
		}
	}

	TxtOverlay.prototype.toggle = function(){
		if (this.div_) {
			if (this.div_.style.visibility == "hidden") {
				this.show();
			}
			else {
				this.hide();
			}
		}
	}

	TxtOverlay.prototype.toggleDOM = function(){
		if (this.getMap()) {
			this.setMap(null);
		}
		else {
			this.setMap(this.map_);
		}
	}


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

  customTxt = "
Whitemouth
"
  txt = new TxtOverlay(new google.maps.LatLng(49.954169, -95.975625),customTxt,"customBox",map )

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