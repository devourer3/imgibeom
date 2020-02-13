import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../styles/base.scss'
import { useStore } from "../stores/useStore"

const AndroidPage = () => {
  const store = useStore();
  return (
    <Layout>
      <SEO title="ANDROID" />
      <span>{store.base.str.S0002}</span>
    </Layout>
  )
}

export default AndroidPage
