import registerStyle from "./register.css";

import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";
import Firebase from "../../utils/firebase";
import RegisterTitle from "../../components/registerTitle/registerTitle";
import RegisterButton from "../../components/registerButton/registerButton";
import BG from "../../components/background/background";
import Logo from "../../components/logo/logo"

const credentials = { 
  uid: "",
  name: "",
  lastName: "",
  email: "", 
  password: "",
  confirm: "", 
};

export default class Register extends HTMLElement{
    constructor (){
        super();
        this.attachShadow ({mode:"open"})
        addObserver(this);
    }

    connectedCallback(){
        this.render();
     }

     changeWindow(){
        dispatch(navigate(Screens.HOME))
      }

      async handleRegisterButton() {
        Firebase.registerUser(credentials);
        console.log(appState.user)
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

        const name = this.ownerDocument.createElement("input")
        name.className = 'Name'
        name.placeholder = "Name"
        this.shadowRoot?.appendChild(name);

        const lastname = this.ownerDocument.createElement("input")
        lastname.className = 'LastName'
        lastname.placeholder = "Last Name"
        this.shadowRoot?.appendChild(lastname);

        const email = this.ownerDocument.createElement("input")
        email.className = 'User'
        email.placeholder = "Email"
        email.type = "email"
        this.shadowRoot?.appendChild(email);
        email.addEventListener(
            "change",
            (e: any) => (credentials.email = e.target.value)
          );
          this.shadowRoot?.appendChild(email);

        const password = this.ownerDocument.createElement("input")
        password.className = 'Password'
        password.placeholder = "Password"
        password.type = "password";
        this.shadowRoot?.appendChild(password);
        password.addEventListener(
            "change",
            (e: any) => (credentials.password = e.target.value)
          );
          this.shadowRoot?.appendChild(password);

        const cpassword = this.ownerDocument.createElement("input")
        cpassword.className = 'CPassword'
        cpassword.placeholder = "Confirm Password"
        cpassword.type = "password"
        this.shadowRoot?.appendChild(cpassword);

        const button = this.ownerDocument.createElement("section")
        button.className = 'Button'
        const RegisterButton = this.ownerDocument.createElement("register-button") as RegisterButton;
        button.addEventListener("click", this.changeWindow);
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
    