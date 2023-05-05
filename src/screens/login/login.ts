import loginStyle from "./login.css";

import LoginTitle from "../../components/loginTitle/loginTitle";
import LoginButton from "../../components/loginButton/loginButton";
import LoginForm from "../../components/loginForm/loginForm";
import BG from "../../components/background/background";

export class Login extends HTMLElement{
    constructor (){
        super();
        this.attachShadow ({mode:"open"})
    }

    connectedCallback(){
        this.render();
     }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
          
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = loginStyle;
            this.shadowRoot?.appendChild(css);
        }

        const h1 = this.ownerDocument.createElement("h1")
        h1.className = 'Title'
        const LoginTitle = this.ownerDocument.createElement("login-title") as LoginTitle;
        h1.appendChild(LoginTitle)
        this.shadowRoot?.appendChild(h1);

        const form = this.ownerDocument.createElement("form")
        form.className = 'Form'
        const LoginForm = this.ownerDocument.createElement("login-form") as LoginForm;
        form.appendChild(LoginForm)
        this.shadowRoot?.appendChild(form);

        const button = this.ownerDocument.createElement("section")
        button.className = 'Button'
        const LoginButton = this.ownerDocument.createElement("login-button") as LoginButton;
        button.appendChild(LoginButton)
        this.shadowRoot?.appendChild(button);

        const image = this.ownerDocument.createElement("image")
        image.className = 'Background'
        const BG = this.ownerDocument.createElement("my-bg") as BG;
        image.appendChild(BG)
        this.shadowRoot?.appendChild(image);

    }

}

customElements.define("my-login", Login);
    