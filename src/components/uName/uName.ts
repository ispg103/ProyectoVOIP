import uNameStyle from "./uName.css"

class UName extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }
    
    render() {

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `

                    <p class="text">Your name</p>

                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = uNameStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("your-name", UName);
export default UName;