import { addObserver, appState, dispatch } from "../../store";
import styles from "./photolist.css";


class photolist extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ''

        appState.Post.forEach((e: any) => {
            const formContainer = this.ownerDocument.createElement('article')
            
            const lImage = this.ownerDocument.createElement('img');
            lImage.src = e.image

            

            formContainer?.appendChild(lImage);
            this.shadowRoot?.appendChild(formContainer);

        const css = this.ownerDocument.createElement("style");
        css.innerHTML = styles;
        this.shadowRoot?.appendChild(css);
        })

    }
}

customElements.define('photo-list', photolist)
export default photolist