import registerStyle from "./register.css";

import RegisterTitle from "../../components/registerTitle/registerTitle";
import RegisterButton from "../../components/registerButton/registerButton";
import User from "../../components/user/user";
import Password from "../../components/password/password";
import BG from "../../components/background/background";
import Logo from "../../components/logo/logo"
import Name from "../../components/name/name"
import LastName from "../../components/lastname/lastname"
import CPassword from "../../components/cPassword/cPassword";

export class Register extends HTMLElement{
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
            css.innerHTML = registerStyle;
            this.shadowRoot?.appendChild(css);
        }

        const h1 = this.ownerDocument.createElement("h1")
        h1.className = 'Title'
        const RegisterTitle = this.ownerDocument.createElement("register-title") as RegisterTitle;
        h1.appendChild(RegisterTitle)
        this.shadowRoot?.appendChild(h1);

        const name = this.ownerDocument.createElement("form")
        name.className = 'Name'
        const Name = this.ownerDocument.createElement("my-name") as Name;
        name.appendChild(Name)
        this.shadowRoot?.appendChild(name);

        const lastname = this.ownerDocument.createElement("form")
        lastname.className = 'LastName'
        const LastName = this.ownerDocument.createElement("last-name") as LastName;
        lastname.appendChild(LastName)
        this.shadowRoot?.appendChild(lastname);

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

        const cpassword = this.ownerDocument.createElement("form")
        cpassword.className = 'CPassword'
        const CPassword = this.ownerDocument.createElement("confirm-password") as CPassword;
        cpassword.appendChild(CPassword)
        this.shadowRoot?.appendChild(cpassword);

        const button = this.ownerDocument.createElement("section")
        button.className = 'Button'
        const RegisterButton = this.ownerDocument.createElement("register-button") as RegisterButton;
        button.appendChild(RegisterButton)
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

customElements.define("my-register", Register);
    