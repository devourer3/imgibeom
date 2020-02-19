import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { useStore } from "../stores/useStore"
import { DATA_URL } from "../stores/base-store"

const Footer = () => {

  const store = useStore()
  const [footNumber, setFooter] = useState("fo-about")

  const clickFooter = (e, topPosition) => {
    // setFooter(e.target.id)
    window.scrollTo({ top: topPosition, left: 0, behavior: "smooth" })
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY >= 2320) {
        setFooter("fo-contact");
      } else if (window.scrollY < 2400 && window.scrollY >= 2180 ) {
        setFooter("fo-projects");
      } else if (window.scrollY < 2180 && window.scrollY >= 1840 ) {
        setFooter("fo-career");
      } else if (window.scrollY < 1840 && window.scrollY >= 340 ) {
        setFooter("fo-skills");
      } else {
        setFooter("fo-about");
      }
    })
    return () => {
      window.removeEventListener("scroll", () => {

      })
    }
  });

  return (
    <footer>
      <div className="foot-con">
        <div className="foot-about"
             id={"fo-about"}
             onClick={(e) => {
               clickFooter(e, 0);
             }}>
          <img
            id={"fo-about"}
            className="about-icon"
            src={footNumber === "fo-about" ? DATA_URL + "about_on.svg" : DATA_URL + "about_off.svg"}>
          </img>
          <span
            id={"fo-about"}
            className={footNumber === "fo-about" ? "about-txt active" : "about-txt inActive"}>
            {store.base.str.W0004}
          </span>
        </div>
        <div
          className="foot-skills"
          id={"fo-skills"}
          onClick={(e) => {
            clickFooter(e, 340);
          }}>
          <img
            id={"fo-skills"}
            className="skills-icon"
            src={footNumber === "fo-skills" ? DATA_URL + "skills_on.svg" : DATA_URL + "skills_off.svg"}>
          </img>
          <span
            id={"fo-skills"}
            className={footNumber === "fo-skills" ? "skills-txt active" : "skills-txt inActive"}>
            {store.base.str.W0009}
          </span>
        </div>
        <div
          className="foot-career"
          id={"fo-career"}
          onClick={(e) => {
            clickFooter(e, 1840);
          }}>
          <img
            id={"fo-career"}
            className="career-icon"
            src={footNumber === "fo-career" ? DATA_URL + "career_on.svg" : DATA_URL + "career_off.svg"}>
          </img>
          <span
            id={"fo-career"}
            className={footNumber === "fo-career" ? "career-txt active" : "career-txt inActive"}>
            {store.base.str.W0005}
          </span>
        </div>
        <div
          className="foot-projects"
          id={"fo-projects"}
          onClick={(e) => {
            clickFooter(e, 2180);
          }}>
          <img
            id={"fo-projects"}
            className="projects-icon"
            src={footNumber === "fo-projects" ? DATA_URL + "projects_on.svg" : DATA_URL + "projects_off.svg"}>
          </img>
          <span
            id={"fo-projects"}
            className={footNumber === "fo-projects" ? "projects-txt active" : "projects-txt inActive"}>
            {store.base.str.W0006}
          </span>
        </div>
        <div
          className="foot-contact"
          id={"fo-contact"}
          onClick={(e) => {
            clickFooter(e, 2460);
          }}>
          <img
            id={"fo-contact"}
            className="contact-icon"
            src={footNumber === "fo-contact" ? DATA_URL + "contact_on.svg" : DATA_URL + "contact_off.svg"}>
          </img>
          <span
            id={"fo-contact"}
            className={footNumber === "fo-contact" ? "contact-txt active" : "contact-txt inActive"}>
            {store.base.str.W0007}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
