import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import React, { useState } from "react"
import { useStore } from "../stores/useStore"
import { DATA_URL } from "../stores/base-store"
import "../styles/projects.scss"

export const Projects = () => {
  const store = useStore()
  const [picNumber, setPic] = useState()
  const [descNumber, setDesc] = useState()
  const [category, setCategory] = useState("android")
  const [detailNum, setDetailNum] = useState("")

  const clickDetail = (e) => {
    setDetailNum(e.target.id)
  }

  const clickTabs = (cat) => {
    setCategory(cat)
  }

  const renderProjects = () => {
    const data = store.base.data.projects
    let view = []
    if (data !== null) {
      data.map((item, index1) => {
        let picture = []
        if (item.category === category) {
          view.push(
            <li
              key={"proj-" + index1}
              className="proj-item">
              {
                detailNum === "det-" + index1 &&
                <div className="proj-detail-entire">
                  <div className="detail-wrapper">
                    <div className="close-wrapper">
                      <img
                        className={"det-close"}
                        src={DATA_URL + "close.svg"}
                        alt=""
                        onClick={(e) => {
                          clickDetail(e)
                        }}
                        onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
                    </div>
                    <div className="det-pic-con">
                      {
                        item.p_image.map((pic, index2) => {
                          picture.push(
                            <div
                              className="pic-wrapper"
                              key={index2}>
                              <img
                                className="proj-img"
                                src={DATA_URL + pic}
                                alt=""
                                onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}>
                              </img>
                              <span className="proj-desc">
                                {item.p_image_desc[index2]}
                              </span>
                            </div>,
                          )
                        })
                      }
                      <div className="carousel-wrapper">
                        <Carousel
                          axis={"horizontal"}
                          className="proj-carousel"
                          autoPlay={false}
                          showThumbs={false}
                          swipeable={true}
                          emulateTouch={true}
                          showStatus={false}
                          infiniteLoop={true}
                          dynamicHeight={true}
                          showIndicators={false}>
                          {picture}
                        </Carousel>
                      </div>
                    </div>
                    <div className="desc-entire">
                      <div className="det-name-con">
                        <span className="name-title">앱 이름</span>
                        <span className="det-name">- {item.p_name}</span>
                      </div>
                      <div className="det-lang-con">
                        <span className="lang-title">개발 언어</span>
                        <span className="det-language">- {item.language}</span>
                      </div>
                      {
                        item.pattern !== undefined &&
                        <div className="det-pat-con">
                          <span className="pat-title">디자인 패턴</span>
                          <span className="det-pattern">- {item.pattern}</span>
                        </div>
                      }
                      {
                        item.server !== undefined &&
                        <div className="det-db-con">
                          <span className="db-title">웹 서버</span>
                          <span className="pat-library">- {item.server}</span>
                        </div>
                      }
                      {
                        item.database !== undefined &&
                        <div className="det-db-con">
                          <span className="db-title">데이터베이스</span>
                          <span className="pat-library">- {item.database}</span>
                        </div>
                      }
                      <div className="det-lib-con">
                        <span className="lib-title">사용 라이브러리</span>
                        <span className="det-library">- {item.library}</span>
                      </div>
                      {
                        item.period !== undefined &&
                        <div className="det-prd-con">
                          <span className="prd-title">개발 기간</span>
                          <span className="det-period">- {item.period}</span>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              }
              <img
                className="proj-thumbnail"
                src={DATA_URL + item.p_thumbnail}
                alt=""
                onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
              {
                item.det_cat === "android" &&
                <div className="proj-detail-con"
                     onClick={(e) => {
                       clickDetail(e)
                     }}>
                  <img
                    className={"proj-detail"}
                    id={"det-" + index1}
                    src={DATA_URL + "magnify.svg"}
                    alt=""
                    onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
                </div>
              }
              <span className="proj-name">{item.p_name}</span>
              <div className="proj-link-con">
                {
                  item.commercial === true &&
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
                  item.git_url !== undefined &&
                  <a
                    target="_blank"
                    className="proj-git"
                    href={item.git_url}>
                    <img
                      className={"proj-git-thumb"}
                      src={DATA_URL + "github.svg"}
                      alt=""
                      onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
                  </a>
                }
                {
                  item.apk_url !== undefined &&
                  <a
                    target="_blank"
                    className="proj-apk"
                    href={item.apk_url}>
                    <img
                      className={"proj-apk-thumb"}
                      src={DATA_URL + "apk.svg"}
                      alt=""
                      onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
                  </a>
                }
              </div>
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
    <>
      <div className="projects" id={"id-projects"}>
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
    </>
  )
}