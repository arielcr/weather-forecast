// SERVICES
weatherApp.service('cityService', function(){

  this.city = "New York, NY";

});

weatherApp.service('weatherService', ['$resource', function($resource){

  this.GetWeather = function(city, days){

    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=75db36ddfe1e0a431c54fa221abd3359",
    { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } } );

    return weatherAPI.get({q: city, cnt: days});

  };  

}]);
