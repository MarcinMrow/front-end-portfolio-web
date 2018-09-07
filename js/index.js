// initialize 'about me - more info' button
function aboutMe() {
  console.log('more about me');
  document.getElementById("moreAboutMeBox").classList.toggle("show-info");
}

// When the user clicks on the button, toggle between hiding and showing the dropdown content 
// initialize featured projects button
function myProjects() {
  console.log('projects list');
  document.getElementById("myDropdownProjects").classList.toggle("show");
}

// initialize skills button
function mySkills() {
  console.log('skills list');
  document.getElementById("mySkillsList").classList.toggle("show-skills");
}

// map variable
var map;
// initialize the map
function initMap() {
  // use a constructor to create a new map JS object 
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 51.107885, 
      lng: 17.038538
    },
    zoom: 4
  });
  var position = {lat: 51.107885, lng: 17.038538};
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    title: 'Click me to see my location',
    animation: google.maps.Animation.DROP,
    mapTypeControl: false
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'Hello! I live in Wroclaw, Poland.'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

/************* MODAL BOX *************/

// define variable: modal box
var modal = document.getElementById('myModal');

// define variable: button opens the modal box
var btn = document.getElementById("myButton");

// define variable: <span> element closes the modal box
var span = document.getElementsByClassName("close")[0];

// open the modal box when the user clicks the button
btn.onclick = function() {
  modal.style.display = "block";
}

// close the modal when the user clicks on (x)
span.onclick = function() {
  modal.style.display = "none";
}

// close the modal box when the user clicks anywhere
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/************* Add the Service Worker *************/

if ('serviceWorker' in navigator) {
  // Register a service worker hosted at the root of the site using a more restrictive scope.
  navigator.serviceWorker.register('./service-worker.js')
    .then(function(registration) {
      console.log('Service worker registration succeeded:', registration);
    }).catch(function(error) {
      console.log('Service worker registration failed:', error);
    });
} else {
  console.log('Service workers are not supported.');
}

/************* BUTTON - SCROLL TO TOP *************/

// The button is shown when users scrolls down 20px from the top of the document
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("backToTopArrow").style.display = "block";
  } else {
    document.getElementById("backToTopArrow").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topButton() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}