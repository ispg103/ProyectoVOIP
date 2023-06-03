class Square extends HTMLElement {

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
                    <img class="square" src="/images/square.png">
                </section>
                `;
            }

        }
}

customElements.define("my-square", Square);
export default Square;