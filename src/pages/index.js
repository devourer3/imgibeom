import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/base.scss"
import { useStore } from "../stores/useStore"
import { About } from "../components/about"
import { Skills } from "../components/skills"
import { Career } from "../components/career"
import { Projects } from "../components/projects"
import { Contact } from "../components/contact"
import { Popup } from "../components/popup"
import { useObserver } from "mobx-react-lite"
import smoothscroll from "smoothscroll-polyfill"

const IndexPage = () => {
  const store = useStore()
  smoothscroll.polyfill();
  return useObserver(() => (
    <Layout>
      <SEO title="Introduce"/>
      <About/>
      <Skills/>
      <Career/>
      <Projects/>
      <Contact/>
      {
        store.base.popupOpt.popupOn === true &&
        <Popup/>
      }
    </Layout>
  ))
}
export default IndexPage
