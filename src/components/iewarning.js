import { Link } from "gatsby"
import React from "react"
import { useStore } from "../stores/useStore"

const IeWarning = () => {
  const store = useStore()
  let agent = navigator.userAgent.toLowerCase();
  if ( (navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1) || (agent.indexOf("msie") !== -1) ) {
    return (
      <section className="ie-warning-section">
        <div className="w-entity">
          <span className="announce">{store.base.str.S0017} <a href="https://www.google.com/chrome/" target="_blank">{store.base.str.S0018}</a></span>
        </div>
      </section>
    )
  } else {
    return false;
  }
}
export default IeWarning;