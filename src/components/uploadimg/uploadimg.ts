import uploadImgStyle from "./uploadimg.css"

class UploadImg extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = uploadImgStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <section>
                    <img class="upload" src="/images/upload.png">
                </section>
                `;
            }

        }
}

customElements.define("upload-img", UploadImg);
export default UploadImg;