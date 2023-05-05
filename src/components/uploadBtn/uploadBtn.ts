import uploadButtonStyle from "./uploadBtn.css"

class UploadButton extends HTMLElement {
    button?: HTMLElement;

    onButtonClicked() {
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.button = this.ownerDocument.createElement('button');
        this.button.className = "uploadButton"
        this.button.textContent = 'Upload';
        this.button.addEventListener("click", this.onButtonClicked);
    }

    render() {
        
        this.shadowRoot?.appendChild(this.button!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = uploadButtonStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("upload-button", UploadButton);
export default UploadButton;