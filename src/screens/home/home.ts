import homeStyle from "./home.css";


import Logo from "../../components/logo/logo"
import SearchBar from "../../components/searchBar/searchBar"
import Logout from "../../components/logout/logout"
import Add from "../../components/add/add"
import Heart from "../../components/heart/heart"
import Profile from "../../components/profile/profile"
import Homes, {homeAttribute} from "../../components/homes/homes";
import { addObserver, appState, dispatch } from "../../store/index";
import { getPost } from "../../store/actions";
import { getHome } from "../../store/actions";

export class Home extends HTMLElement{
    List: Homes[] = [];

    constructor (){
        super();
        this.attachShadow ({mode:"open"});
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
          
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = homeStyle;
            this.shadowRoot?.appendChild(css);
        }

        const logo = this.ownerDocument.createElement("logo")
        logo.className = 'Logo'
        const Logo = this.ownerDocument.createElement("my-logo") as Logo;
        logo.appendChild(Logo)
        this.shadowRoot?.appendChild(logo);

        const searchBar = this.ownerDocument.createElement("section")
        searchBar.className = 'SearchBar'
        const SearchBar = this.ownerDocument.createElement("search-bar") as SearchBar;
        searchBar.appendChild(SearchBar)
        this.shadowRoot?.appendChild(searchBar);

        const logout = this.ownerDocument.createElement("p")
        logout.className = 'Logout'
        const Logout = this.ownerDocument.createElement("my-logout") as Logout;
        logout.appendChild(Logout)
        this.shadowRoot?.appendChild(logout);

        const image = this.ownerDocument.createElement("image")
        image.className = 'Add'
        const Add = this.ownerDocument.createElement("my-add") as Add;
        image.appendChild(Add)
        this.shadowRoot?.appendChild(image);

        const image2 = this.ownerDocument.createElement("image")
        image2.className = 'Heart'
        const Heart = this.ownerDocument.createElement("my-heart") as Heart;
        image2.appendChild(Heart)
        this.shadowRoot?.appendChild(image2);

        const image3 = this.ownerDocument.createElement("image")
        image3.className = 'Profile'
        const Profile = this.ownerDocument.createElement("my-profile") as Profile;
        image3.appendChild(Profile)
        this.shadowRoot?.appendChild(image3);



        const dataHome = appState.post.filter((user)=>{
        })
    
        dataHome.forEach((data) => {
          const Card = this.ownerDocument.createElement("my-home") as Homes;
          Card.setAttribute(homeAttribute.image, data.image);
              this.List.push(Card);
        });
      


    }

}

customElements.define("my-home", Home);
    