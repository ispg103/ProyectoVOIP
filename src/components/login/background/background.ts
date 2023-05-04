import styles from './background.css'

export enum backgroundAttribute {
    "image" = "image",
}

class Background extends HTMLElement {
    image?: string;

    static get observedAttributes() {
        const attrs: Record<backgroundAttribute, null> = {
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
    
    attributeChangedCallback(propName: backgroundAttribute, oldValue: undefined, newValue: string){
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

                <section>
                <img src="./src/images/background.png">
                </section>
                `;
            }
        }
    }

    customElements.define("my-background", Background);
    export default Background;