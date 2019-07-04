import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)

	document.getElementById('weather').innerHTML = `
    	<div class="row text-center">
    	  <div class="col-4">
    	    <h3>${_weatherService.Weather.city}</h3>
    	  </div>

    	  <div class="col-4">
    	    <h3>${_weatherService.Weather.farenheit}°F</h3>
    	  </div>

		  <div class="col-4">
    	    <h3>${_weatherService.Weather.sky[0].main}</h3>
    	  </div>
    	</div>
    `;
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
