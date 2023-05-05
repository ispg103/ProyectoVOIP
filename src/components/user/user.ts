import userStyle from "./user.css"

class User extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = userStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
               
                <input type="email" class="user" placeholder="Email">

                `;
            }

        }
}

customElements.define("my-user", User);
export default User;