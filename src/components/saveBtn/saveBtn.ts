import saveBtnStyle from "./saveBtn.css"

class SaveButton extends HTMLElement {
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
        this.button.className = "saveButton"
        this.button.textContent = 'Save';
        this.button.addEventListener("click", this.onButtonClicked);
    }

    render() {
        
        this.shadowRoot?.appendChild(this.button!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = saveBtnStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("save-button", SaveButton);
export default SaveButton;