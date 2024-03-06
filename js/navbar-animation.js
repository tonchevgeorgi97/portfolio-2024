const navbarTemplate = document.createElement('template');

class Navbar extends HTMLElement {
  src = "";
  html = "";
  constructor(){
    super();
  }

  async connectedCallback() {
    this.src = this.getAttribute('src');
    await this.downloadNavbarHtml();
    const navbarTemplate = document.createElement('template');
    navbarTemplate.innerHTML = this.html;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(navbarTemplate.content);
    shadowRoot.getElementById("navbar-close-button").addEventListener("click", () => {
      this.closeNavBar(shadowRoot);
    });
    shadowRoot.getElementById("m-projects-button").addEventListener("click", () => {
      const element = document.getElementById("m-projects-section");
      this.closeNavBar(shadowRoot);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    shadowRoot.getElementById("m-experience-button").addEventListener("click", () => {
      const element = document.getElementById("m-experience-section");
      this.closeNavBar(shadowRoot);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    shadowRoot.getElementById("m-skills-button").addEventListener("click", () => {
      const element = document.getElementById("m-skills-section");
      this.closeNavBar(shadowRoot);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  closeNavBar(shadowRoot){
    shadowRoot.getElementById("navbar").classList.add("close");
    document.getElementsByTagName("html")[0].classList.remove("no-scroll");
  }

  async downloadNavbarHtml(){
    const response = await fetch(this.src);
    this.html = await response.text();
  }
}

customElements.define('m-navbar', Navbar);


