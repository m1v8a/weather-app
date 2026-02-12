import { formatTime } from "./time.js";

export function displayDetails(data) {
  const currentConditions = data.currentConditions;

  const descriptionEl = document.createElement("p");
  const addressEl = document.createElement("h1");
  const conditionsEl = document.createElement("p");
  const datetimeEl = document.createElement("p");

  descriptionEl.innerText = data.description;
  addressEl.innerText = data.resolvedAddress;
  conditionsEl.innerText = currentConditions.conditions;
  datetimeEl.innerText = formatTime(currentConditions.datetime.slice(0, -3));

  document
    .querySelector("#details-container")
    .append(addressEl, datetimeEl, conditionsEl, descriptionEl);
}
