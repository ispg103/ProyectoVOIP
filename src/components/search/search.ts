class Search extends HTMLElement {

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
                    <img src="/images/search.png">
                </section>
                `;
            }

        }
}

customElements.define("my-search", Search);
export default Search;