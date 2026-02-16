import { fetchWeather } from "../modules/fetchWeather.js";

export default class SearchBar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <div>
      <input id="search-input"type="search">
      <button id="search-button">${this.getAttribute("button-text")}</button>
    </div>
    `;
  }

  connectedCallback() {
    document
      .querySelector("#search-button")
      .addEventListener("click", async () => {
        try {
          const loc = document.querySelector("#search-input").value;
          if (!loc) throw Error("Location is not specified");

          fetchWeather({ loc }, (data) => {
            document.querySelector("general-details").getDetails(data);
          });
        } catch (err) {
          console.error(err);
        }
      });
  }
}
