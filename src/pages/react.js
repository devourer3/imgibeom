import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStore } from "../stores/useStore"

const ReactPage = () => {
  const store = useStore();
  return (
    <Layout>
      <SEO title="REACT" />
      <span>{store.base.str.S0003}</span>
    </Layout>
  )
}

export default ReactPage
