import { formatTime } from "./time.js";
import arrowIcon from "../asset/icons/arrow.svg";

export function displayDetails(data) {
  const container = document.querySelector("#details-container");
  const currentConditions = data.currentConditions;

  const heading = document.createElement("div");
  const descriptionCont = document.createElement("div");
  const conditionCont = document.createElement("div");
  const iconCont = document.createElement("div");
  const descriptionEl = document.createElement("p");
  const addressEl = document.createElement("h1");
  const conditionsEl = document.createElement("p");
  const datetimeEl = document.createElement("p");
  const iconImg = document.createElement("img");

  heading.className = "heading";
  descriptionCont.className = "description-cont";
  conditionCont.className = "condition-cont";
  iconCont.className = "icon-cont";

  descriptionEl.className = "description";
  addressEl.className = "address";
  datetimeEl.className = "datetime";
  conditionsEl.className = "conditions";
  iconImg.className = "icon-main";

  descriptionEl.innerText = data.description;
  addressEl.innerText = data.resolvedAddress;
  conditionsEl.innerText = currentConditions.conditions;
  datetimeEl.innerText = formatTime(currentConditions.datetime.slice(0, -3));
  import(`../asset/icons/${currentConditions.icon}.svg`).then((value) => {
    iconImg.src = value.default;
  });

  heading.append(addressEl, datetimeEl);
  descriptionCont.append(descriptionEl);
  iconCont.append(iconImg);
  conditionCont.append(iconCont, conditionsEl);

  container.innerHTML = "";
  container.append(heading, conditionCont, descriptionCont);
}

export function displayMeasurements(data) {
  const container = document.querySelector("#measurements-container");
  const table = document.createElement("table");

  const currentConditions = data.currentConditions;

  const temp = currentConditions.temp;
  const feelsLike = currentConditions.feelslike;
  const snow = currentConditions.snow;
  const humidity = currentConditions.humidity;
  const visibility = currentConditions.visibility;
  const windspeed = currentConditions.windspeed;
  const winddir = currentConditions.winddir;
  const windgust = currentConditions.windgust;
  const sunrise = currentConditions.surise;
  const sunset = currentConditions.sunset;

  const windDirectionEl = document.createElement("img");
  windDirectionEl.className = "icon-med";
  windDirectionEl.src = arrowIcon;
  console.log(winddir);
  windDirectionEl.style.rotate = winddir + "deg";

  table.innerHTML = `
    <table>
      <tbody>
        <tr>
          <th>Temp:</th>
          <th>Feels Like:</th>
          <th>Humidity:</th>
          <th>Visibility:</th>
          <th>Snow:</th>
        </tr>
        <tr>
          <td>${temp}</td>
          <td>${feelsLike}</td>
          <td>${humidity}</td>
          <td>${visibility}</td>
          <td>${snow}</td>
        <tr>
          <th>Wind Speed:</th>
          <th>Wind Gust:</th>
          <th>Wind Direction:</th>
        </tr>
        <tr>
          <td>${windspeed}</td>
          <td>${windgust}</td>
          <td>${windDirectionEl.outerHTML}</td>
        </tr>
      </tbody>
    </table>
  `;

  container.innerHTML = "";
  container.append(table);
}
