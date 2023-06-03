class HomeText extends HTMLElement {

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
                <section>
                    <h1>Create your dreams</h1>
                </section>
                `;
            }

           
        }
}

customElements.define("home-text", HomeText);
export default HomeText;