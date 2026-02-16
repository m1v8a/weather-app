import locationIcon from "../asset/icons/ui/location-dot.svg";
import sunsetIcon from "../asset/icons/ui/sunset.svg";
import sunriseIcon from "../asset/icons/ui/sunrise.svg";
import { formatTime } from "../modules/date.js";

export default class GeneralDetails extends HTMLElement {
  constructor() {
    super();
    this.hidden = true;

    this.setAttribute("hidden", "");
    this.innerHTML = `
    <section class="heading">
      <div class="basic-details">
        <div class="location-container">
          <img src=${locationIcon} class="icon-small" alt="#">
          <p id="location"></p>
        </div>
        <div class="condition-container">
          <h1 id="condition"></h1>
          <span id="icon" class="icon-large"></span>
        </div>
        <p id="description"></p>
      </div>
      <div class="sunrise-sunset-details">
        <div class="sunrise-container">
          <img class="icon-x-large" src=${sunriseIcon} alt="Sunrise">
          <p id="sunrise"></p>
        </div>
        <div class="sunset-container"> 
          <img class="icon-x-large" src=${sunsetIcon} alt="Sunset">
          <p id="sunset"></p>
        </div>
      </div>
    </section>
    `;
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["location", "condition", "icon", "description"];
  }

  render() {
    if (this.hidden) {
      this.style.display = "none";
    } else {
      this.removeAttribute("style");
    }

    this.querySelector("#location").textContent = this.location;
    this.querySelector("#condition").textContent = this.condition;
    this.querySelector("#description").textContent = this.description;
    this.querySelector("#sunrise").textContent =
      this.sunrise && formatTime(this.sunrise);
    this.querySelector("#sunset").textContent =
      this.sunset && formatTime(this.sunset);
    (async () => {
      if (!this.icon) return;
      const imgSrc = await import(
        `../asset/icons/weather-conditions/${this.icon}.svg`
      );
      const res = await fetch(imgSrc.default);
      const svg = await res.text();
      this.querySelector("#icon").innerHTML = svg;
    })();
  }

  getDetails(data) {
    if (data) this.hidden = false;
    this.location = data.resolvedAddress;
    this.condition = data.currentConditions.conditions;
    this.icon = data.currentConditions.icon;
    this.description = data.description;
    this.sunrise = data.currentConditions.sunrise;
    this.sunset = data.currentConditions.sunset;

    this.render();
  }
}
