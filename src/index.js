import { getWeatherData, parseWeatherData } from "./modules/weather.js";
import "./style.css";

getWeatherData((data) => {
  console.log(data);
});
