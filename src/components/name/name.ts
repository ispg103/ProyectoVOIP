import nameStyle from "./name.css"

class Name extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = nameStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
               
                <input type="name" class="name" placeholder="Name">

                `;
            }

        }
}

customElements.define("my-name", Name);
export default Name;