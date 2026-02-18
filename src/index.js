import {
  displayBackground,
  displayLocation,
  displayTemperature,
  displayTwilight,
  displayWeatherCondition,
  displayWind,
} from "./modules/display.js";
import fetchWeather from "./modules/fetchWeather.js";
import showHide from "./modules/showHide.js";
import "./style.css";

const content = document.querySelector("#content");
const getWeatherBtn = document.querySelector("#get-weather-button");
const locationInput = document.querySelector("#location-input");
const loadingScreen = document.querySelector("#loading-screen");

// Hide both
showHide("", content);
showHide("", loadingScreen);

// get the weather data and then displays it to the appropriate section
getWeatherBtn.addEventListener("click", () => {
  if (!locationInput.value) return;

  // show loading screen and hide content
  showHide(loadingScreen, content);

  fetchWeather({ loc: locationInput.value }, (data) => {
    console.log(data);
    displayLocation(data.resolvedAddress);
    displayWeatherCondition(
      data.currentConditions.conditions,
      data.description,
      data.currentConditions.icon
    );
    displayTemperature(
      data.currentConditions.temp,
      data.currentConditions.feelslike
    );

    const wind = {
      speed: data.currentConditions.windspeed,
      dir: data.currentConditions.winddir,
      gust: data.currentConditions.windgust,
    };

    displayWind(wind.dir, wind.speed, wind.gust);
    displayTwilight(
      data.currentConditions.sunrise,
      data.currentConditions.sunset
    );
    displayBackground(
      data.currentConditions.icon,
      data.currentConditions.datetime
    );
    // after the data is received, show content and hide loading screen
    showHide(content, loadingScreen);
  });
});
