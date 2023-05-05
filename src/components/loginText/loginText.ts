import loginTextStyle from "./loginText.css"

class LoginText extends HTMLElement {

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

                    <a class="text">Create an account</a>

                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = loginTextStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("login-text", LoginText);
export default LoginText;