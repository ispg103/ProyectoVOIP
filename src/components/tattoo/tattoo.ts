import tattooStyle from "./tattoo.css"

class Tattoo extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = tattooStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
                    <img class="exit" src="/images/image1.png">
                </section>
                `;
            }

        }
}

customElements.define("my-tattoo", Tattoo);
export default Tattoo;