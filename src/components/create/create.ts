import createStyle from "./create.css"

class Create extends HTMLElement {

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
                    <h1>Here to help you create</h1>
                </section>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = createStyle;
            this.shadowRoot?.appendChild(css);

        }
}

customElements.define("my-create", Create);
export default Create;