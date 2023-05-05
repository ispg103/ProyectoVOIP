import registerTitleStyle from "./registerTitle.css"

class RegisterTitle extends HTMLElement {

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
                    <h1 class="title">Register</h1>
                </section>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = registerTitleStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("register-title", RegisterTitle);
export default RegisterTitle;