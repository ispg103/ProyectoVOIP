import uploadTextStyle from "./uploadText.css"

class UploadText extends HTMLElement {

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

                    <h3 class="text">Upload your designs here</h3>

                `;
            }

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = uploadTextStyle;
            this.shadowRoot?.appendChild(css);

            
        }
}

customElements.define("upload-text", UploadText);
export default UploadText;