import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/base.scss"
import { useStore } from "../stores/useStore"
import scrollTo from 'gatsby-plugin-smoothscroll';

// device: 1(desktop), 2(tablet), 3(mobile)
const scrollMoveTo = (e, id) => {
  // e.preventDefault();
  // window.scrollTo({ top: topPosition, left: 0, behavior: "smooth" })
  // scrollTo({ top: topPosition, left: 0, behavior: "smooth" });
  scrollTo(id);
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
            onClick={(e) => scrollMoveTo(e, '#id-about')}>
          {store.base.str.W0004}</span>
          <span
            className="h-skills"
            onClick={(e) => scrollMoveTo(e, '#id-skills')}>
          {store.base.str.W0022}</span>
          <span
            className="h-career"
            onClick={(e) => scrollMoveTo(e, '#id-career')}>
          {store.base.str.W0005}</span>
          <span
            className="h-projects"
            onClick={(e) => scrollMoveTo(e, '#id-projects')}>
          {store.base.str.W0006}</span>
          <span
            className="h-contact"
            onClick={(e) => scrollMoveTo(e, '#id-contact')}>
          {store.base.str.W0007}</span>
        </div>
        <div className="desc-con tablet">
          <span
            className="h-about"
            onClick={(e) => scrollMoveTo(e, '#id-about')}>
          {store.base.str.W0004}</span>
          <span
            className="h-skills"
            onClick={(e) => scrollMoveTo(e, '#id-skills')}>
          {store.base.str.W0022}</span>
          <span
            className="h-career"
            onClick={(e) => scrollMoveTo(e, '#id-career')}>
          {store.base.str.W0005}</span>
          <span
            className="h-projects"
            onClick={(e) => scrollMoveTo(e, '#id-projects')}>
          {store.base.str.W0006}</span>
          <span
            className="h-contact"
            onClick={(e) => scrollMoveTo(e, '#id-contact')}>
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
