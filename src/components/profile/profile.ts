class Profile extends HTMLElement {

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
                    <img class="profile" src="/images/profile.png">
                </section>
                `;
            }

        }
}

customElements.define("my-profile", Profile);
export default Profile;