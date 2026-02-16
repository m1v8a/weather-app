import GeneralDetails from "./components/GeneralDetails.js";
import SearchBar from "./components/SearchBar.js";
import "./style.css";

customElements.define("search-bar", SearchBar);
customElements.define("general-details", GeneralDetails);

const html = `
<search-bar button-text="Get Weather"></search-bar>
<general-details></general-details>    
`;

document.querySelector("#root").innerHTML = html;
