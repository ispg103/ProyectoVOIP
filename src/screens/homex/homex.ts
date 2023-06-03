import homeStyle from "./homex.css";


import Logo from "../../components/logo/logo";
import Search  from "../../components/search/search";
import Options from "../../components/options/options";
import HomeBanner from "../../components/homeBanner/homeBanner"
import HomeText from "../../components/homeText/homeText"
import DarkLogo from "../../components/darkLogo/darkLogo"

export class Homex extends HTMLElement{

    constructor (){
        super();
        this.attachShadow ({mode:"open"});
    }

    connectedCallback(){
        this.render();
     }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
          
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = homeStyle;
            this.shadowRoot?.appendChild(css);
        }

        const logo = this.ownerDocument.createElement("image")
        logo.className = 'Logo'
        const Logo = this.ownerDocument.createElement("my-logo") as Logo;
        logo.appendChild(Logo)
        this.shadowRoot?.appendChild(logo);

        const image = this.ownerDocument.createElement("image")
        image.className = 'Search'
        const Search = this.ownerDocument.createElement("my-search") as Search;
        image.appendChild(Search)
        this.shadowRoot?.appendChild(image);

        const image2 = this.ownerDocument.createElement("image")
        image2.className = 'Options'
        const Options = this.ownerDocument.createElement("my-options") as Options;
        image2.appendChild(Options)
        this.shadowRoot?.appendChild(image2);    

        const text = this.ownerDocument.createElement("h1")
        text.className = 'HomeText'
        const HomeText = this.ownerDocument.createElement("home-text") as HomeText;
        text.appendChild(HomeText)
        this.shadowRoot?.appendChild(text);  

        const darklogo = this.ownerDocument.createElement("image")
        darklogo.className = 'DarkLogo'
        const DarkLogo = this.ownerDocument.createElement("dark-logo") as DarkLogo;
        darklogo.appendChild(DarkLogo)
        this.shadowRoot?.appendChild(darklogo);
        
        const image3 = this.ownerDocument.createElement("image")
        image3.className = 'HomeBanner'
        const HomeBanner = this.ownerDocument.createElement("home-banner") as HomeBanner;
        image3.appendChild(HomeBanner)
        this.shadowRoot?.appendChild(image3);   

    }

}

customElements.define("my-homex", Homex);
    