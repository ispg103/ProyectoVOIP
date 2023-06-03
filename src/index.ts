import "./components/export"
import "./screens/login/login"
import "./screens/upload/upload"
import "./screens/photo/photo"
import "./screens/register/register"
import "./screens/post/post"
import "./screens/homex/homex"
import "./screens/dashboard/dashboard"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const window = this.ownerDocument.createElement('my-homex');
        this.shadowRoot?.appendChild(window);
    }
}

customElements.define('app-container', AppContainer)