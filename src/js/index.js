import _ from "lodash";
import "jquery";
import "../js/scroll.js";
import "../styles/main.css";
// Images import
import "../img/wedding-1.jpg";
function init() {
	initDaysLeftDisplay();
	initGoogleMapScript();
}

var map;
var marker;
function initMap() {
	var position = {
		lat: 1.300193, lng: 103.860676,
	}
		;
	var mapOptions = {
		center: position, zoom: 17,
	}
		;
	map = new google.maps.Map(document.getElementById("map"), mapOptions);
	var markerOptions = {
		position,
		map: map, animation: google.maps.Animation.DROP, title: "ParkRoyal on Beach Road",
	}
		;
	marker = new google.maps.Marker(markerOptions);
}

function initGoogleMapScript() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDC-gf6dWwGkmYisLJiPPY_cSnI8pzsHSw&callback=initMap";
	script.async = "async";
	script.defer = "defer";
	$("body").append(script);
}

function initDaysLeftDisplay() {
	var today = new Date();
	var wedding = new Date("12/15/2018");
	var timeDiff = Math.abs(today.getTime() - wedding.getTime());
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	var daysLeftNumberText;
	var daysLeftText;
	var subText;
	switch (true) {
		case (diffDays > 1): daysLeftNumberText = diffDays;
			daysLeftText = "Days left to our big day.";
			subText = "We are really excited to have you there!";
			break;
		case (diffDays === 1): daysLeftNumberText = diffDays;
			daysLeftText = "Day left to our big day.";
			subText = "Are you excited as we are? See you there!";
			break;
		case (diffDays === 0): daysLeftNumberText = undefined;
			daysLeftText = "Today is the big day!";
			subText = "See you there at 7:00PM.";
			break;
		default: daysLeftNumberText = undefined;
			daysLeftText = "Thank you for coming!";
			subText = "It meant alot for us.";
			break;
	}
	if (daysLeftNumberText) {
		$("#days").text(daysLeftNumberText);
	}
	else {
		$("#days").hide();
	}
	$("#bigday").text(daysLeftText);
	$("#excited").text(subText);
}

init();
window.initMap = initMap;