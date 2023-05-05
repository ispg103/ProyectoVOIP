import searchBarStyle from "./searchBar.css"

class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    
        render() {

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = searchBarStyle;
            this.shadowRoot?.appendChild(css);

            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
               
                <input class="search" placeholder="Search">

                `;
            }

        }
}

customElements.define("search-bar", SearchBar);
export default SearchBar;