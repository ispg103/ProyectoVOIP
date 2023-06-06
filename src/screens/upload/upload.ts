import uploadStyle from "./upload.css"

import { SavePost, navigate } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import { Screens } from "../../types/navigation";
import firebase from "../../utils/firebase";
import Logo from "../../components/logo/logo"
import Logout from "../../components/logout/logout"
import Add from "../../components/add/add"
import Heart from "../../components/heart/heart"
import Profile from "../../components/profile/profile"
import BigSquare from "../../components/bigSquare/bigSquare"
import LittleSquare from "../../components/littleSquare/littleSquare"
import UploadButton from "../../components/uploadBtn/uploadBtn"
import UploadImg from "../../components/uploadimg/uploadimg"
import Exit from "../../components/exit/exit"
import { Posts } from "../../types/post";


const formData: Posts = {
    id: "",
    image: "",
    title: "",
    name: "",
    description: "",
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

      changeTitle(e: any) {
        formData.title = e?.target?.value;
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



        const bigSquare = this.ownerDocument.createElement("image")
        bigSquare.className = 'BigSquare'
        const BigSquare = this.ownerDocument.createElement("big-square") as BigSquare;
        bigSquare.appendChild(BigSquare)
        this.shadowRoot?.appendChild(bigSquare);
        
        const exit = this.ownerDocument.createElement("button")
        exit.className = 'Exit'
        const Exit = this.ownerDocument.createElement("my-exit") as Exit;
        exit.appendChild(Exit)
        exit.addEventListener("click", this.nextWindow)
        this.shadowRoot?.appendChild(exit);
        

        const littleSquare = this.ownerDocument.createElement("image")
        littleSquare.className = 'LittleSquare'
        const LittleSquare = this.ownerDocument.createElement("little-square") as LittleSquare;
        littleSquare.appendChild(LittleSquare)
        this.shadowRoot?.appendChild(littleSquare);

        const uploadBtn = this.ownerDocument.createElement("section")
        uploadBtn.className = 'UploadButton'
        const UploadButton = this.ownerDocument.createElement("upload-button") as UploadButton;
        uploadBtn.appendChild(UploadButton)
        exit.addEventListener("click", async () => {
            dispatch(await SavePost(formData))
        })
        this.shadowRoot?.appendChild(uploadBtn);

        const addTitle = this.ownerDocument.createElement("input")
        addTitle.className = 'AddTitle'
        addTitle.placeholder = "Add a title"
        addTitle.addEventListener("change", this.changeTitle);
        this.shadowRoot?.appendChild(addTitle);

        const uName = this.ownerDocument.createElement("input")
        uName.className = 'UName'
        uName.placeholder = "Write your name"
        this.shadowRoot?.appendChild(uName);

        const describe = this.ownerDocument.createElement("input")
        describe.className = 'Describe'
        describe.placeholder = "Describe your desing"
        this.shadowRoot?.appendChild(describe);

        const uploadText = this.ownerDocument.createElement("input")
        uploadText.type = "file"
        uploadText.className = 'UploadText'
        uploadText.placeholder = "Upload your design"
        uploadText.addEventListener("change", async () =>{
            const file = uploadText.files?.[0];
            if (file) await firebase.uploadFile(file);
            console.log(file?.name);
            if (file) {
              const image = await firebase.getFile(file.name);
              console.log("img", image);
              const src = String(image)
              formData.image = src
          }
          });
      
        this.shadowRoot?.appendChild(uploadText);

        const uploadImg = this.ownerDocument.createElement("image")
        uploadImg.className = 'UploadImg'
        const UploadImg = this.ownerDocument.createElement("upload-img") as UploadImg;
        uploadImg.appendChild(UploadImg)
        this.shadowRoot?.appendChild(uploadImg);

    }

}

customElements.define("my-upload", Upload);