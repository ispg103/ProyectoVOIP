import profileStyle from "./profile.css"

class Profile extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = profileStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
                    <img class="profile" src="/images/profile.png">
                </section>
                `;
            }

        }
}

customElements.define("my-profile", Profile);
export default Profile;