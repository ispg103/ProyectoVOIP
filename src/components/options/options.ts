class Options extends HTMLElement {

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
                    <img src="/images/options.png">
                </section>
                `;
            }

        }
}

customElements.define("my-options", Options);
export default Options;