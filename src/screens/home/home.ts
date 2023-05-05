import homeStyle from "./home.css";

import Header from "../../components/header/header";
import Homes, {homeAttribute} from "../../components/homes/homes";
import { addObserver, appState, dispatch } from "../../store/index";
import { getPost } from "../../store/actions";
import { getHome } from "../../store/actions";

export class Home extends HTMLElement{
    List: Homes[] = [];

    constructor (){
        super();
        this.attachShadow ({mode:"open"});
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
          
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = homeStyle;
            this.shadowRoot?.appendChild(css);
        }

        const section1 = this.ownerDocument.createElement("section")
        section1.className = 'Section1'
        const Header = this.ownerDocument.createElement("my-header") as Header;
        section1.appendChild(Header)
        this.shadowRoot?.appendChild(section1);

        const dataHome = appState.post.filter((user)=>{
        })
    
        dataHome.forEach((data) => {
          const Card = this.ownerDocument.createElement("my-home") as Homes;
          Card.setAttribute(homeAttribute.image, data.image);
              this.List.push(Card);
        });
      


    }

}

customElements.define("my-home", Home);
    