import exitStyle from "./exit.css"

class Exit extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = exitStyle;
            this.shadowRoot?.appendChild(css);

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