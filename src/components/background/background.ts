class BG extends HTMLElement {

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
                    <img class="background" src="/images/background1.png">
                </section>
                `;
            }

        }
}

customElements.define("my-bg", BG);
export default BG;