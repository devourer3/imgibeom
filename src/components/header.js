import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/base.scss"
import { useStore } from "../stores/useStore"


// device: 1(desktop), 2(tablet), 3(mobile)
const scrollMoveTo = (e, topPosition) => {
  // e.preventDefault();
  window.scrollTo({ top: topPosition, left: 0, behavior: "smooth" });
}

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
        <div className="desc-con desktop">
          <span
            className="h-about"
            onClick={(e) => scrollMoveTo(e, 100)}>
          {store.base.str.W0004}</span>
          <span
            className="h-skills"
            onClick={(e) => scrollMoveTo(e, 440)}>
          {store.base.str.W0022}</span>
          <span
            className="h-career"
            onClick={(e) => scrollMoveTo(e, 2050)}>
          {store.base.str.W0005}</span>
          <span
            className="h-projects"
            onClick={(e) => scrollMoveTo(e, 2500)}>
          {store.base.str.W0006}</span>
          <span
            className="h-contact"
            onClick={(e) => scrollMoveTo(e, 3000)}>
          {store.base.str.W0007}</span>
        </div>
        <div className="desc-con tablet">
          <span
            className="h-about"
            onClick={(e) => scrollMoveTo(e, 40)}>
          {store.base.str.W0004}</span>
          <span
            className="h-skills"
            onClick={(e) => scrollMoveTo(e, 410)}>
          {store.base.str.W0022}</span>
          <span
            className="h-career"
            onClick={(e) => scrollMoveTo(e, 1780)}>
          {store.base.str.W0005}</span>
          <span
            className="h-projects"
            onClick={(e) => scrollMoveTo(e, 2120)}>
          {store.base.str.W0006}</span>
          <span
            className="h-contact"
            onClick={(e) => scrollMoveTo(e, 2400)}>
          {store.base.str.W0007}</span>
        </div>
      </div>
    </header>
  )
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
