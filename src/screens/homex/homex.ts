import homeStyle from "./homex.css";

import { navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";
import { SavePost, getPosts, setUserCredentials } from "../../store/actions";
import { Posts } from "../../types/post";
import Logo from "../../components/logo/logo"
import Logout from "../../components/logout/logout"
import Add from "../../components/add/add"
import Heart from "../../components/heart/heart"
import Profile from "../../components/profile/profile"
import Ideas from "../../components/ideas/ideas"

const formData: Posts = {
    id: "",
    image: "",
    title:"",
    name: "",
    description:"",
};

export default class Homex extends HTMLElement{

    constructor (){
        super();
        this.attachShadow ({mode:"open"});
        addObserver(this);
    }

    connectedCallback(){
        this.render();
     }

     logoutWindow(){
        dispatch(navigate(Screens.DASHBOARD))
      } 

      uploadWindow(){
        dispatch(navigate(Screens.UPLOAD))
      } 

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
          
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = homeStyle;
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
        image.addEventListener("click", this.uploadWindow)
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



        const ideas = this.ownerDocument.createElement("h1")
        ideas.className = 'Ideas'
        const Ideas = this.ownerDocument.createElement("my-ideas") as Ideas;
        ideas.appendChild(Ideas)
        this.shadowRoot?.appendChild(ideas);
    }

}

customElements.define("my-homex", Homex);
    