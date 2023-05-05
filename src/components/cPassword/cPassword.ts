import cPasswordStyle from "./cPassword.css"

class CPassword extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = cPasswordStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
               
                <input type="password" class="password" placeholder="Confirm Password">

                `;
            }

        }
}

customElements.define("confirm-password", CPassword);
export default CPassword;