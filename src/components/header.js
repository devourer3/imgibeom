import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/base.scss"
import { observer } from "mobx-react-lite"
import { useStore } from "../stores/useStore"
import { useObserver } from "mobx-react-lite"

const Header = () => {
  const store = useStore()
  return (
    <header>
      <div className="header-entity">
        <div className="home-con">
          <Link
            className="home"
            to="/">
            {store.base.str.W0000}
          </Link>
        </div>
        <div className="desc-con">
          <span
            className="about"
            onClick={(e) => scrollMoveTo(e, 100)}>
          {store.base.str.W0004}</span>
          <span
            className="career"
            onClick={(e) => scrollMoveTo(e, 100)}>
          {store.base.str.W0005}</span>
          <span
            className="projects"
            onClick={(e) => scrollMoveTo(e, 200)}>
          {store.base.str.W0006}</span>
          <span
            className="contact"
            onClick={(e) => scrollMoveTo(e, 500)}>
          {store.base.str.W0007}</span>
        </div>
      </div>
    </header>
  )
}

const scrollMoveTo = (e, topPosition) => {
  // e.preventDefault();
  window.scrollTo({ top: topPosition, left: 0, behavior: "smooth" })
}

// inject('stores')
// (observer((({stores}) => (

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
