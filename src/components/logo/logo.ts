import logoStyle from "./logo.css"

class Logo extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = logoStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `

                    <img class="logo" src="/images/voip.png">

                `;
            }

        }
}

customElements.define("my-logo", Logo);
export default Logo;