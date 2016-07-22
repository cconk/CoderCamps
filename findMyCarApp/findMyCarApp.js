
var btn = document.getElementById('markCarLocation');
btn.addEventListener('click',markCarLocation);

var btn2 = document.getElementById('findCarLocation');
btn2.addEventListener('click',findCar);

function markCarLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
  var curLat = position.coords.latitude;
  var curLong = position.coords.longitude;
  var accuracy = position.coords.accuracy; // in meters
  var message = 'You are located at ' + curLat + ', ' + curLong
    + ' with an accuracy of ' + accuracy + ' meters ';
  console.log(message);
  var mapUrl = 'http://maps.googleapis.com/maps/api/staticmap'
    + '?center=' + curLat + ',' + curLong
    +' &zoom=18'
    + '&size=500x500'
    + '&markers=color:red|' + curLat + ',' + curLong
    + '&sensor=false';
    document.getElementById('map').src = mapUrl;

    var newCarLocation = {
      carLocationLat: curLat,
      carLocationLong: curLong
    };

    console.log(newCarLocation);
    var carLocationArray = [];
    carLocationArray.push({carLatitude: newCarLocation.carLocationLat, carLongitude:newCarLocation.carLocationLong});
    var newCarLocationString = JSON.stringify(carLocationArray);
    console.log(newCarLocationString);
    localStorage.setItem('newCarLocationStore',newCarLocationString);

  });
}

function findCar(){
  var curCarLocationString = localStorage.getItem('newCarLocationStore');
  var curCarLocation = JSON.parse(curCarLocationString);

  var mapUrl = 'http://maps.googleapis.com/maps/api/staticmap'
    + '?center=' + curCarLocation[0].carLatitude + ',' + curCarLocation[0].carLongitude
    +' &zoom=18'
    + '&size=500x500'
    + '&markers=color:red|' + curCarLocation[0].carLatitude + ',' + curCarLocation[0].carLongitude
    + '&sensor=false';
    document.getElementById('map').src = mapUrl;

}
