class BigSquare extends HTMLElement {

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
                    <img class="bigSquare" src="/images/Bsquare.png">
                </section>
                `;
            }

        }
}

customElements.define("big-square", BigSquare);
export default BigSquare;