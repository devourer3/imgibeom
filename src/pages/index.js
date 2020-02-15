import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/base.scss"
import { useStore } from "../stores/useStore"
import {About} from "../components/about"
import { Skills } from "../components/skills"
import { Career } from "../components/career"
import { Projects } from "../components/projects"
import { Contact } from "../components/contact"
import { Helmet } from "react-helmet/es/Helmet"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Introduce"/>
      <About/>
      <Skills/>
      <Career/>
      <Projects/>
      <Contact/>
    </Layout>
  )
}

export default IndexPage
