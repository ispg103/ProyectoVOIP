import loginStyle from "./login.css";

import LoginTitle from "../../components/loginTitle/loginTitle";
import LoginButton from "../../components/loginButton/loginButton";
import User from "../../components/user/user";
import Password from "../../components/password/password";
import LoginText from "../../components/loginText/loginText";
import BG from "../../components/background/background";
import Logo from "../../components/logo/logo"

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

        const text = this.ownerDocument.createElement("a")
        text.className = 'Text'
        const LoginText = this.ownerDocument.createElement("login-text") as LoginText;
        text.appendChild(LoginText)
        this.shadowRoot?.appendChild(text);

        const user = this.ownerDocument.createElement("form")
        user.className = 'User'
        const User = this.ownerDocument.createElement("my-user") as User;
        user.appendChild(User)
        this.shadowRoot?.appendChild(user);

        const password = this.ownerDocument.createElement("form")
        password.className = 'Password'
        const Password = this.ownerDocument.createElement("my-password") as Password;
        password.appendChild(Password)
        this.shadowRoot?.appendChild(password);

        const button = this.ownerDocument.createElement("section")
        button.className = 'Button'
        const LoginButton = this.ownerDocument.createElement("login-button") as LoginButton;
        button.appendChild(LoginButton)
        this.shadowRoot?.appendChild(button);

        const logo = this.ownerDocument.createElement("logo")
        logo.className = 'Logo'
        const Logo = this.ownerDocument.createElement("my-logo") as Logo;
        logo.appendChild(Logo)
        this.shadowRoot?.appendChild(logo);

        const image = this.ownerDocument.createElement("image")
        image.className = 'Background'
        const BG = this.ownerDocument.createElement("my-bg") as BG;
        image.appendChild(BG)
        this.shadowRoot?.appendChild(image);

    }

}

customElements.define("my-login", Login);
    