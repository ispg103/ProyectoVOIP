class Logo extends HTMLElement {

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

                    <img class="logo" src="/images/voip.png">

                `;
            }

        }
}

customElements.define("my-logo", Logo);
export default Logo;