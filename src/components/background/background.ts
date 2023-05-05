import BgStyle from "./background.css"

class BG extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = BgStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
                    <img class="background" src="/images/background.png">
                </section>
                `;
            }

        }
}

customElements.define("my-bg", BG);
export default BG;