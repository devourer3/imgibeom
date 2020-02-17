import { Link } from "gatsby"
import React from "react"
import { useStore } from "../stores/useStore"
import { DATA_URL } from "../stores/base-store"

const Footer = () => {
  const store = useStore();
  return (
    <footer>
      <div className="foot-con">
        <div className="foot-and">
          <Link
            className="and-link"
            to="/android">
            <img
              className="and-icon"
              src={DATA_URL + 'android.svg'}>
            </img>
            <span className="and-title">
            {store.base.str.W0001}
            </span>
          </Link>
        </div>
        <div className="foot-react">
          <Link
            className="react-link"
            to="/react">
            <img
              className="react-icon"
              src={DATA_URL + 'react.svg'}>
            </img>
            <span className="react-title">
            {store.base.str.W0002}
            </span>
          </Link>
        </div>
        <div className="foot-legacy">
          <Link
            className="legacy-link"
            to="/legacy">
            <img
              className="legacy-icon"
              src={DATA_URL + 'legacy.svg'}>
            </img>
            <span className="legacy-title">
            {store.base.str.W0003}
            </span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
