import registerButtonStyle from "./registerButton.css"

class RegisterButton extends HTMLElement {
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
        this.button.className = "registerButton"
        this.button.textContent = 'Create';
        this.button.addEventListener("click", this.onButtonClicked);
    }

    render() {
        
        this.shadowRoot?.appendChild(this.button!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = registerButtonStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("register-button", RegisterButton);
export default RegisterButton;