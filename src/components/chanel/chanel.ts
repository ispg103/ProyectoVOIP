import chanelStyle from "./chanel.css"

class Chanel extends HTMLElement {

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
                    <img src="/images/chanel.jpg">
                </section>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = chanelStyle;
            this.shadowRoot?.appendChild(css);

        }
}

customElements.define("my-chanel", Chanel);
export default Chanel;