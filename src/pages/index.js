import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/base.scss"
import { useStore } from "../stores/useStore"
import {About} from "../components/about"
import { DATA_URL } from "../stores/base-store"

const IndexPage = () => {
  const store = useStore()
  return (
    <Layout>
      <SEO title="Introduce"/>
      <About/>
    </Layout>
  )
}

export default IndexPage
