import headerStyles from './header.css'

class Header extends HTMLElement {
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
        
    render() {

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                
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

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = headerStyles;
            this.shadowRoot?.appendChild(css);

        }

    }

    customElements.define("my-header", Header);
    export default Header;