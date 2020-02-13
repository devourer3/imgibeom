import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStore } from "../stores/useStore"

const LegacyPage = () =>{
  const store = useStore();
  return(
    <Layout>
      <SEO title="LEGACY" />
      <span>{store.base.str.S0004}</span>
    </Layout>
  )
}

export default LegacyPage
