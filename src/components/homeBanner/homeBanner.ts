class HomeBanner extends HTMLElement {

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
                    <img src="/images/mountain.png">
                </section>
                `;
            }

        }
}

customElements.define("home-banner", HomeBanner);
export default HomeBanner;