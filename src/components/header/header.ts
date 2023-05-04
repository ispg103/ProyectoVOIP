import styles from './header.css'

export enum headerAttribute {
    "image" = "image",
}

class Header extends HTMLElement {
    image?: string;

    static get observedAttributes() {
        const attrs: Record<headerAttribute, null> = {
           image: null,
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(propName: headerAttribute, oldValue: undefined, newValue: string){
        switch(propName){
        default:
        this[propName] = newValue;
        this.render();
        break;
        }
        this.render()
    }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <style>
                ${styles}
                </style>
                
                <section class="bar">
                <img src="./src/images/voip.png" class="image">
                <input placeholder="Search"></input>
                
                <section class="icons">
                <a href="" class="logout">Log out</a>
                <img src="./src/images/plus.png" class="plus">
                <img src="./src/images/like.png" class="like">
                <img src="./src/images/message.png" class="message">
                <img src="./src/images/profile.png" class="profile">
                </section>

                </section>
                `;
            }
        }
    }

    customElements.define("my-header", Header);
    export default Header;