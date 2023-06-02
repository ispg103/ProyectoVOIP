import "./components/export"
import "./screens/login/login"
import "./screens/upload/upload"
import "./screens/home/home"
import "./screens/photo/photo"
import "./screens/register/register"
import "./screens/post/post"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const window = this.ownerDocument.createElement('my-register');
        this.shadowRoot?.appendChild(window);
    }
}

customElements.define('app-container', AppContainer)