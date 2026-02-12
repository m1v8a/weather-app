import { formatTime } from "./time.js";

export function displayDetails(data) {
  const currentConditions = data.currentConditions;

  const heading = document.createElement("div");
  const descriptionCont = document.createElement("div");
  const conditionCont = document.createElement("div");
  const descriptionEl = document.createElement("p");
  const addressEl = document.createElement("h1");
  const conditionsEl = document.createElement("p");
  const datetimeEl = document.createElement("p");
  const iconImg = document.createElement("img");

  heading.className = "heading";
  descriptionCont.className = "description-cont";
  conditionCont.className = "condition-cont";

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
  conditionCont.append(iconImg, conditionsEl);
  document
    .querySelector("#details-container")
    .append(heading, conditionCont, descriptionCont);
}
