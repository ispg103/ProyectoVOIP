import uploadStyle from "./photo.css"

import Logo from "../../components/logo/logo"
import Logout from "../../components/logout/logout"
import Add from "../../components/add/add"
import Heart from "../../components/heart/heart"
import Profile from "../../components/profile/profile"
import BigSquare from "../../components/bigSquare/bigSquare"
import Tattoo from "../../components/tattoo/tattoo"
import AddTitle from "../../components/addTitle/addTitle"
import UName from "../../components/uName/uName"
import Describe from "../../components/describe/describe"
import Exit from "../../components/exit/exit"

export class Photo extends HTMLElement{
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



        const bigSquare = this.ownerDocument.createElement("image")
        bigSquare.className = 'BigSquare'
        const BigSquare = this.ownerDocument.createElement("big-square") as BigSquare;
        bigSquare.appendChild(BigSquare)
        this.shadowRoot?.appendChild(bigSquare);

        const exit = this.ownerDocument.createElement("image")
        exit.className = 'Exit'
        const Exit = this.ownerDocument.createElement("my-exit") as Exit;
        exit.appendChild(Exit)
        this.shadowRoot?.appendChild(exit);

        const tattoo = this.ownerDocument.createElement("image")
        tattoo.className = 'Tattoo'
        const Tattoo = this.ownerDocument.createElement("my-tattoo") as Tattoo;
        tattoo.appendChild(Tattoo)
        this.shadowRoot?.appendChild(tattoo);

        const addTitle = this.ownerDocument.createElement("h3")
        addTitle.className = 'AddTitle'
        const AddTitle = this.ownerDocument.createElement("add-title") as AddTitle;
        addTitle.appendChild(AddTitle)
        this.shadowRoot?.appendChild(addTitle);

        const uName = this.ownerDocument.createElement("p")
        uName.className = 'UName'
        const UName = this.ownerDocument.createElement("your-name") as UName;
        uName.appendChild(UName)
        this.shadowRoot?.appendChild(uName);

        const describe = this.ownerDocument.createElement("p")
        describe.className = 'Describe'
        const Describe = this.ownerDocument.createElement("my-describe") as Describe;
        describe.appendChild(Describe)
        this.shadowRoot?.appendChild(describe);

    }

}

customElements.define("my-photo", Photo);