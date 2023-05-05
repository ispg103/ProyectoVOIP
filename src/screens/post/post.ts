import uploadStyle from "./post.css"

import Logo from "../../components/logo/logo"
import SearchBar from "../../components/searchBar/searchBar"
import Logout from "../../components/logout/logout"
import Add from "../../components/add/add"
import Heart from "../../components/heart/heart"
import Profile from "../../components/profile/profile"
import BigSquare from "../../components/bigSquare/bigSquare"
import Dog from "../../components/dog/dog"
import SaveButton from "../../components/saveBtn/saveBtn"
import AddTitle from "../../components/addTitle/addTitle"
import UName from "../../components/uName/uName"
import Describe from "../../components/describe/describe"
import Exit from "../../components/exit/exit"

export class Post extends HTMLElement{
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

        const dog = this.ownerDocument.createElement("image")
        dog.className = 'Dog'
        const Dog = this.ownerDocument.createElement("my-dog") as Dog;
        dog.appendChild(Dog)
        this.shadowRoot?.appendChild(dog);

        const saveBtn = this.ownerDocument.createElement("section")
        saveBtn.className = 'SaveButton'
        const SaveButton = this.ownerDocument.createElement("save-button") as SaveButton;
        saveBtn.appendChild(SaveButton)
        this.shadowRoot?.appendChild(saveBtn);

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

customElements.define("my-post", Post);