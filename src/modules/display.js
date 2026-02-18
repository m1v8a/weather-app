import { formatTime } from "./date.js";
import clearDay from "../asset/images/clear-day.png";
import clearNight from "../asset/images/clear-night.png";
import cloudyDay from "../asset/images/cloudy-day.png";
import cloudyNight from "../asset/images/cloudy-night.png";
import rainyDay from "../asset/images/rainy-day.png";
import rainyNight from "../asset/images/rainy-night.png";
import snowyDay from "../asset/images/snowy-day.png";
import snowyNight from "../asset/images/snowy-night.png";
import thunderstorm from "../asset/images/thunderstorm.png";

const metric = "<span class='text-sm bold'>&deg;c</span>";
const speedMetric = " <span class='txt-sm bold'>km/h</span>";

const locationEl = document.querySelector("#location");
const conditionEl = document.querySelector("#condition");
const descriptionEl = document.querySelector("#description");
const conditionIconEl = document.querySelector("#condition-icon");
const currentTempEl = document.querySelector("#current-temp");
const feelslikeEl = document.querySelector("#feels-like");
const windDirEl = document.querySelector("#wind-dir");
const windSpeedEl = document.querySelector("#wind-speed");
const windGustEl = document.querySelector("#wind-gust");
const sunriseEl = document.querySelector("#sunrise-time");
const sunsetEl = document.querySelector("#sunset-time");
const rootEl = document.querySelector("#root");

export function displayLocation(location) {
  locationEl.textContent = location;
}

export function displayWeatherCondition(condition, description, conditionIcon) {
  conditionEl.textContent = condition;
  descriptionEl.textContent = description;
  import(`../asset/icons/weather-conditions/${conditionIcon}.svg`).then(
    (icon) => {
      conditionIconEl.src = icon.default;
    }
  );
}

export function displayTemperature(current, feelslike) {
  currentTempEl.innerHTML = `<span>${current} <span class="txt-sm bold">${metric}</span></span>`;
  feelslikeEl.innerHTML = `<span>${feelslike} <span class="txt-sm bold">${metric}</span></span>`;
}

export function displayWind(direction, speed, gust) {
  windDirEl.style.rotate = direction + "deg";
  windSpeedEl.innerHTML = speed + speedMetric;
  windSpeedEl.innerHTML = `<span>${speed} ${speedMetric}</span>`;
  windGustEl.innerHTML = `<span>${gust} ${speedMetric}</span>`;
}

export function displayTwilight(sunrise, sunset) {
  const sunriseTime = formatTime(sunrise);
  const sunsetTime = formatTime(sunset);
  sunriseEl.innerHTML = `<span>${sunriseTime.hour}:${sunriseTime.minutes} <span class="txt-sm bold">${sunriseTime.meridiem}</span></span>`;
  sunsetEl.innerHTML = `<span>${sunsetTime.hour}:${sunsetTime.minutes} <span class="txt-sm bold">${sunsetTime.meridiem}</span></span>`;
}

export function displayBackground(icon, time) {
  console.log(icon);
  console.log(time);
  const { meridiem } = formatTime(time);
  let timeofday;
  if (meridiem === "am") {
    timeofday = "day";
  } else {
    timeofday = "night";
  }
  switch (icon) {
    case "clear-day":
    case "wind":
    case "clear-night":
      if (timeofday === "day") {
        rootEl.style.backgroundImage = `url('${clearDay}')`;
      } else {
        rootEl.style.backgroundImage = `url('${clearNight}')`;
      }
      break;
    case "cloudy":
    case "fog":
    case "partly-cloudy-day":
    case "partly-cloudy-night":
      if (timeofday === "day") {
        rootEl.style.backgroundImage = `url('${cloudyDay}')`;
      } else {
        rootEl.style.backgroundImage = `url('${cloudyNight}')`;
      }
      break;
    case "rain":
    case "showers-day":
    case "showers-night":
      if (timeofday === "day") {
        rootEl.style.backgroundImage = `url('${rainyDay}')`;
      } else {
        rootEl.style.backgroundImage = `url('${rainyNight}')`;
      }
      break;
    case "thunder":
    case "thunder-rain":
    case "thunder-showers-day":
    case "thunder-showers-night":
      rootEl.style.backgroundImage = `url('${thunderstorm}')`;
      break;
    case "snow":
    case "sleet":
    case "hail":
    case "rain-snow":
    case "snow-showers-day":
    case "snow-showers-night":
    case "rain-snow-showers-night":
    case "rain-snow-showers-day":
      if (timeofday === "day") {
        rootEl.style.backgroundImage = `url('${snowyDay}')`;
      } else {
        rootEl.style.backgroundImage = `url('${snowyNight}')`;
      }
      break;
  }
}
