import loginFormStyle from "./loginForm.css"

class LoginForm extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = loginFormStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
                
                <form class="space">
                    <input placeholder = "User">
                </form>

                <form class="space">
                    <input placeholder = "Password">
                </form>

                </section>
                `;
            }

        }
}

customElements.define("login-form", LoginForm);
export default LoginForm;