export default class GeneralDetails extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="general-details-section" class="section">
      <div>
        <p>${this.getAttribute("location") || ""}</p> 
      </div>
      <div>
        <p>${this.getAttribute("condition") || ""}</p> 
        <img id="condition-icon" alt="">
      </div>
    </section>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ["location", "condition"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    this.render();
  }

  setProps(props) {
    for (const key in props) {
      if (key === "icon") {
        console.log("ran");
        this.setConditionIcon(props[key]);
      } else {
        this.setAttribute(key, props[key]);
      }
    }
  }

  async setConditionIcon(icon) {
    try {
      if (!icon) throw new Error(`Can't find ${icon}.svg`);
      const imgSrc = await import(`../asset/icons/${icon}.svg`);
      this.querySelector("#condition-icon").src = imgSrc.default;
    } catch (err) {
      console.warn(err);
    }
  }
}
