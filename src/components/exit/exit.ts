class Exit extends HTMLElement {

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
                    <img class="exit" src="/images/x.png">
                </section>
                `;
            }

        }
}

customElements.define("my-exit", Exit);
export default Exit;