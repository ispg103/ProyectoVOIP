import "./components/export"
import "./screens/export"
import { addObserver, appState} from "./store/index";
import { Screens } from "./types/navigation";


class AppContainer extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = "";
    
        switch (appState.screens) {
            
        case Screens.LOGIN:
            const Login = this.ownerDocument.createElement("my-login");
            this.shadowRoot?.appendChild(Login);
            break;
    
        case Screens.REGISTER:
            const Register = this.ownerDocument.createElement("my-register");
            this.shadowRoot?.appendChild(Register);
            break;

        case Screens.DASHBOARD:
            const Dashboard = this.ownerDocument.createElement("my-dashboard");
            this.shadowRoot?.appendChild(Dashboard);
            break;

        case Screens.HOME:
            const Homex = this.ownerDocument.createElement("my-homex");
            this.shadowRoot?.appendChild(Homex);
            break;

        case Screens.UPLOAD:
            const Upload = this.ownerDocument.createElement("my-upload");
            this.shadowRoot?.appendChild(Upload);
            break;            
        
            default:
            break;
        }
    }
}

customElements.define('app-container', AppContainer)