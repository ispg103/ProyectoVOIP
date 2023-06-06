import { dispatch } from "../../store";
import { savePost } from "../../store/actions";
import { Posts } from "../../types/post";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import styles from "./photoform.css";

const postInput: Posts = {
    image: "",
}

class photoform extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    changeWindow(){
        dispatch(navigate(Screens.HOME))
      }

    render() {
        const formContainer = this.ownerDocument.createElement('article')

        const lImage = this.ownerDocument.createElement('label');
        lImage.textContent = "Image (URL)"
        const image = this.ownerDocument.createElement('input');
        image.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            postInput.image = e.target.value
        })

        const btn = this.ownerDocument.createElement('button')
        btn.textContent = "Submit Post"
        btn.addEventListener("click", async () => {
            console.log(postInput)
            dispatch(await savePost(postInput))
        })
        formContainer?.appendChild(lImage);
        formContainer?.appendChild(image);
        formContainer?.appendChild(btn);
        this.shadowRoot?.appendChild(formContainer);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define('photo-form', photoform)
export default photoform