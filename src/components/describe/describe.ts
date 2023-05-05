import describeStyle from "./describe.css"

class Describe extends HTMLElement {

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

                    <p class="text">Describe your design</p>

                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = describeStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("my-describe", Describe);
export default Describe;