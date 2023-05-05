import "./components/export"
import "./screens/register/register"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const window = this.ownerDocument.createElement('my-register');
        this.shadowRoot?.appendChild(window);
    }
}

customElements.define('app-container', AppContainer)