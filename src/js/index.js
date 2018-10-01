import _ from "lodash";
import "jquery";
import "../styles/main.css";

function init() {

}

var map;
var marker;
function initMap() {
   var position = {
      lat: 1.300193,
      lng: 103.860676,
   };

   var mapOptions = {
      center: position,
      zoom: 17,
   };

   map = new google.maps.Map(document.getElementById("map"), mapOptions);

   var markerOptions = {
      position,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "ParkRoyal on Beach Road",
   };

   marker = new google.maps.Marker(markerOptions);
}

init();
window.initMap = initMap;