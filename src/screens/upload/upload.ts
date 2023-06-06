import uploadStyle from "./upload.css"

import { savePost, navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase";
import Logo from "../../components/logo/logo"
import Logout from "../../components/logout/logout"
import Add from "../../components/add/add"
import Heart from "../../components/heart/heart"
import Profile from "../../components/profile/profile"
import Exit from "../../components/exit/exit"
import { Posts } from "../../types/post";


const formData: Posts = {
    image: "",
  };

export default class Upload extends HTMLElement{
    constructor (){
        super();
        this.attachShadow ({mode:"open"})
    }

    connectedCallback(){
        this.render();
     }

     logoutWindow(){
        dispatch(navigate(Screens.DASHBOARD))
      } 

      nextWindow(){
        dispatch(navigate(Screens.HOME))
      }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
          
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = uploadStyle;
            this.shadowRoot?.appendChild(css);
        }

        const logo = this.ownerDocument.createElement("button")
        logo.className = 'Logo'
        const Logo = this.ownerDocument.createElement("my-logo") as Logo;
        logo.appendChild(Logo)
        this.shadowRoot?.appendChild(logo);

        const searchBar = this.ownerDocument.createElement("input")
        searchBar.placeholder = "Search"
        searchBar.className = 'SearchBar'
        this.shadowRoot?.appendChild(searchBar);

        const logout = this.ownerDocument.createElement("p")
        logout.className = 'Logout'
        const Logout = this.ownerDocument.createElement("my-logout") as Logout;
        logout.appendChild(Logout)
        logout.addEventListener("click", this.logoutWindow)
        this.shadowRoot?.appendChild(logout);

        const image = this.ownerDocument.createElement("button")
        image.className = 'Add'
        const Add = this.ownerDocument.createElement("my-add") as Add;
        image.appendChild(Add)
        this.shadowRoot?.appendChild(image);

        const image2 = this.ownerDocument.createElement("button")
        image2.className = 'Heart'
        const Heart = this.ownerDocument.createElement("my-heart") as Heart;
        image2.appendChild(Heart)
        this.shadowRoot?.appendChild(image2);

        const image3 = this.ownerDocument.createElement("button")
        image3.className = 'Profile'
        const Profile = this.ownerDocument.createElement("my-profile") as Profile;
        image3.appendChild(Profile)
        this.shadowRoot?.appendChild(image3);
        
        const exit = this.ownerDocument.createElement("image")
        exit.className = 'Exit'
        const Exit = this.ownerDocument.createElement("my-exit") as Exit;
        exit.appendChild(Exit)
        exit.addEventListener("click", this.nextWindow)
        this.shadowRoot?.appendChild(exit);
        
        const photoform = this.ownerDocument.createElement('photo-form');
        photoform.className = "PhotoForm"
        this.shadowRoot?.appendChild(photoform);

    }

}

customElements.define("my-upload", Upload);