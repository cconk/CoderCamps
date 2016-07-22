function searchCity(){
  var city = document.getElementById('city').value;
  var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?API=&APPID=d43debb0b9a3919fef3f0f689e82583e&q='+city;

  var request = new XMLHttpRequest();

  request.open('GET', weatherAPI);

  request.addEventListener('load', function (e) {
    e.preventDefault();
   // parse the data from JSON
    var data = JSON.parse(request.responseText);
    var weatherIcon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    var weatherDescription = data.weather[0].description;

    console.dir(data);

    document.getElementById('icon').src = weatherIcon;
    document.getElementById('description').innerHTML = weatherDescription;
});

  request.send();

}

var search = document.getElementById('search');
search.addEventListener('click',searchCity);
