class DarkLogo extends HTMLElement {

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

                    <img src="/images/darklogo.png">

                `;
            }

        }
}

customElements.define("dark-logo", DarkLogo);
export default DarkLogo;