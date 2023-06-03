import loginAStyle from "./loginA.css"

class LoginA extends HTMLElement {

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
                <section>
                <a href="" class="login">Login</a>
                </section>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = loginAStyle;
            this.shadowRoot?.appendChild(css);
           
        }
}

customElements.define("login-a", LoginA);
export default LoginA;