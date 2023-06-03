class Dog extends HTMLElement {

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
                    <img class="dog" src="/images/image2.png">
                </section>
                `;
            }

        }
}

customElements.define("my-dog", Dog);
export default Dog;