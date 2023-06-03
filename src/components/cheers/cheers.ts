import cheersStyle from "./cheers.css"

class Cheers extends HTMLElement {

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
                    <img src="/images/cheers.jpg">
                </section>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = cheersStyle;
            this.shadowRoot?.appendChild(css);

        }
}

customElements.define("my-cheers", Cheers);
export default Cheers;