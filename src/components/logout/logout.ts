import logoutStyle from "./logout.css"

class Logout extends HTMLElement {

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

                    <a href="" class="logout">Log out</a>

                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = logoutStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("my-logout", Logout);
export default Logout;