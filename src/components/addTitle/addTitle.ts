import addTitleStyle from "./addTitle.css"

class AddTitle extends HTMLElement {

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

                    <h3 class="text">Add a title</h3>

                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = addTitleStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("add-title", AddTitle);
export default AddTitle;