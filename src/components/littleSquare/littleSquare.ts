import littleSquareStyle from "./littleSquare.css"

class LittleSquare extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = littleSquareStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
                    <img class="littleSquare" src="/images/Lsquare.png">
                </section>
                `;
            }

        }
}

customElements.define("little-square", LittleSquare);
export default LittleSquare;