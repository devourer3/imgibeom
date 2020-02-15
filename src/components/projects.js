import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import React, { useState } from "react"
import { useStore } from "../stores/useStore"
import { DATA_URL } from "../stores/base-store"

export const PORT_IMG_URL = "https://gibeomport.s3.ap-northeast-2.amazonaws.com/portimage/android/swips/"

export const Projects = () => {
  const store = useStore()
  const [picNumber, setPic] = useState()
  const [descNumber, setDesc] = useState()
  const [category, setCategory] = useState("android")

  const clickTabs = (cat) => {
    setCategory(cat)
  }

  const renderProjects = () => {
    const data = store.base.data.projects
    let view = []
    if (data !== null) {
      data.map((item, index1) => {
        let picture = []
        item.p_image.map((pic, index2) => {
          picture.push(
            <div
              className="pic-wrapper"
              key={index2}>
              <img
                className="proj-img"
                src={PORT_IMG_URL + pic}
                alt=""
                onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
            </div>,
          )
        })
        if (item.category === category) {
          view.push(
            <li
              key={"proj-" + index1}
              className="proj-item">
              {
                (picNumber === "proj-" + index1) &&
                <div className="carousel-wrapper">
                  <Carousel
                    axis={"horizontal"}
                    className="proj-carousel"
                    autoPlay={true}
                    showThumbs={false}
                    swipeable={true}
                    emulateTouch={true}
                    showStatus={false}
                    infiniteLoop={true}
                    showIndicators={false}>
                    {picture}
                  </Carousel>
                </div>
              }
              <img
                className="proj-thumbnail"
                src={DATA_URL + item.p_thumbnail}
                alt=""
                onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
              <span className="proj-name">{item.p_name}</span>
              {item.commercial === true &&
              <a
                target="_blank"
                className="proj-link"
                href={item.url}>
                <img
                  className={"proj-link-thumb"}
                  src={DATA_URL + item.url_icon}
                  alt=""
                  onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
              </a>
              }
              {
                (descNumber === "proj-" + index1) &&
                <div className="proj-desc-con">
                  <span className="proj-lang">{item.language}</span>
                  <span className="proj-lib">{item.library}</span>
                </div>
              }
            </li>,
          )
        }
      })
    }
    return (
      <ul className="proj-list">{view}</ul>
    )
  }

  return (
    <div className="projects">
      <div className="proj-idx">
        <span className="proj-text">
          {store.base.str.W0006}
        </span>
      </div>
      <hr className="proj-sec"/>
      <div className="proj-tabs">
        <span
          className={category === "android" ? "tab active" : "tab inActive"}
          onClick={e => clickTabs("android")}>
          {store.base.str.W0024}
        </span>
        <span
          className={category === "react" ? "tab active" : "tab inActive"}
          onClick={e => clickTabs("react")}>
          {store.base.str.W0025}
        </span>
        <span
          className={category === "private" ? "tab active" : "tab inActive"}
          onClick={e => clickTabs("private")}>
          {store.base.str.W0026}
        </span>
      </div>
      {renderProjects()}
    </div>
  )


}