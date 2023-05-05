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

        const Login = this.ownerDocument.createElement('my-login');
        this.shadowRoot?.appendChild(Login);
    }
}

customElements.define('app-container', AppContainer)