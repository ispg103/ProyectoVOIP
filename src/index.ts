import "./components/export"
import "./screens/login/login"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {

        const window = this.ownerDocument.createElement('my-login');
        this.shadowRoot?.appendChild(window);
    }
}

customElements.define('app-container', AppContainer)