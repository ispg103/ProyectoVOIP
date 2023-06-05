import ideasStyle from "./ideas.css"

class Ideas extends HTMLElement {

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
                    <h2>Ideas</h2>
                </section>
                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = ideasStyle;
            this.shadowRoot?.appendChild(css);

        }
}

customElements.define("my-ideas", Ideas);
export default Ideas;