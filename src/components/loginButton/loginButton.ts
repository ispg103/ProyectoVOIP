import loginButtonStyle from "./loginButton.css"

class LoginButton extends HTMLElement {
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
        this.button.className = "loginButton"
        this.button.textContent = 'Login';
        this.button.addEventListener("click", this.onButtonClicked);
    }

    render() {
        
        this.shadowRoot?.appendChild(this.button!);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = loginButtonStyle;
        this.shadowRoot?.appendChild(css);
        
    }
}

customElements.define("login-button", LoginButton);
export default LoginButton;