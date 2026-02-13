import {
  displayDetails,
  displayForecasts,
  displayMeasurements,
} from "./modules/display.js";
import { getWeatherData } from "./modules/weather.js";
import "./style.css";

const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");

searchButton.addEventListener("click", () => {
  if (!searchInput.value) return;
  getWeatherData({ location: searchInput.value }, (data) => {
    displayDetails(data);
    displayMeasurements(data);
    displayForecasts(data);
  });
});

getWeatherData({ location: "Morrocco" }, (data) => {
  console.log(data);
});
