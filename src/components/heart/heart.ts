import heartStyle from "./heart.css"

class Heart extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = heartStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
                    <img class="heart" src="/images/like.png">
                </section>
                `;
            }

        }
}

customElements.define("my-heart", Heart);
export default Heart;