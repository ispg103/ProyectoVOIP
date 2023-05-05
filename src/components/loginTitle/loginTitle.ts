import loginTitleStyle from "./loginTitle.css"

class LoginTitle extends HTMLElement {

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
                <section class="section2">
                    <h1 class="title">Welcome</h1>
                </section>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = loginTitleStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("login-title", LoginTitle);
export default LoginTitle;