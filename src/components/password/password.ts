import passwordStyle from "./password.css"

class Password extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = passwordStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
               
                <input type="password" class="password" placeholder="Password">

                `;
            }

        }
}

customElements.define("my-password", Password);
export default Password;