class Tattoo extends HTMLElement {

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
                    <img class="exit" src="/images/image1.png">
                </section>
                `;
            }

        }
}

customElements.define("my-tattoo", Tattoo);
export default Tattoo;