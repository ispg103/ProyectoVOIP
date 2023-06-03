import inspireStyle from "./inspire.css"

class Inspire extends HTMLElement {

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
                    <h1>Here to inspire you</h1>
                </section>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = inspireStyle;
            this.shadowRoot?.appendChild(css);

        }
}

customElements.define("my-inspire", Inspire);
export default Inspire;