import lastnameStyle from "./lastname.css"

class LastName extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = lastnameStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
               
                <input type="name" class="lastname" placeholder="Last Name">

                `;
            }

        }
}

customElements.define("last-name", LastName);
export default LastName;