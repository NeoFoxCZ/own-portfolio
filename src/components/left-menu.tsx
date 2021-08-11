import * as React from 'react';
import "../styles/left-menu.sass";
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";

const LeftMenu = () => (
    <div className={"left-menu"}>
        <StaticImage className={"left-menu__image"} src={"../images/mulu.png"} alt={"logo"}/>
        <Link to={"/"} title={"O mne"} className={"left-menu__item"}>
            O Mne
        </Link>
        <Link to={"/blog"} title={"blog"} className={"left-menu__item"}>
            Blog
        </Link>
        <Link to={"/kontakt"} title={"kontakt"} className={"left-menu__item"}>
            Kontakt
        </Link>
    </div>
)

export default LeftMenu
