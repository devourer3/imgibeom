/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import { useStore } from "../stores/useStore"
import IeWarning from "./iewarning"

const Layout = ({ children }) => {

  // const isIeBrowser = () => {
  //   let agent = window.navigator.userAgent.toLowerCase()
  //   return (window.navigator.appName === "Netscape" && agent.search("Trident") !== -1) || (agent.indexOf("msie") !== -1)
  // }

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  //`)

  return (
    <Fragment>
      <IeWarning/>
      <Header/>
      <main className="main">
        {children}
      </main>
      <Footer/>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
