import * as React from "react"
import { Link } from "gatsby"
import "./header.sass"

const Header = ({ siteTitle }) => (
  <header className={"header"}>
    <div className={"container"}>
      <div className={"header__content"}>
        <div className={"header__block"}>
          <Link to="/" className={"header__logo"} title={siteTitle}/>
        </div>

        <div className={"header__block header__block--right"}>
          <div className={"header-contact"}>
            <Link to="mailto:info@scootland.cz" className={"header-contact__item"}>
              info@scootland.cz
            </Link>
            <Link to="tel:515535535" className={"header-contact__item"}>
              515-535-535
            </Link>
          </div>
        </div>

      </div>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
