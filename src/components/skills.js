import React, { useState } from "react"
import { useStore } from "../stores/useStore"
import { DATA_URL } from "../stores/base-store"
import { Line } from "rc-progress"

export const Skills = () => {
  const store = useStore()
  const [hover, setHover] = useState(false)
  const [hoverId, setHoverId] = useState("")
  const onMouseEnter = (e, listType) => {
    e.preventDefault()
    setHoverId(e.target.id)
  }
  const onMouseLeave = (e) => {
    e.preventDefault()
    setHoverId("")
  }
  const renderLang = () => {
    const data = store.base.data.language
    let view = []
    if (data !== null) {
      data.map((item, index) => {
        view.push(
          <li
            id={"lg-" + index}
            className="lg-item"
            onMouseEnter={event => onMouseEnter(event, "lg-")}
            onMouseLeave={event => onMouseLeave(event)}
            key={index}>
            <img
              className="sk-image"
              src={DATA_URL + item.l_image}
              alt=""
              onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
            <span className="sk-name">
              {item.name}
            </span>
            {
              (hoverId === ("lg-" + index)) &&
              <div
                className="sk-desc-con">
                <span className="sk-title">
                  {item.d_name}
                </span>
                <span className="sk-desc">
                  {item.desc}
                </span>
                <div className="progress-con">
                  <span className="skd-title">
                  {store.base.str.W0016}
                </span>
                  <Line
                    className="sk-desc-percent"
                    percent={item.percent}
                    strokeLinecap="round"
                    strokeColor={item.per_color}
                    strokeWidth="2"
                    trailWidth="2"
                    trailColor="#424242"/>
                </div>
              </div>
            }
          </li>
        )
      })
      return (
        <>
          <span className="lg-title">{store.base.str.W0011}</span>
          <ul className="lg-list">{view}</ul>
        </>
      )
    }
  }
  const renderPlatform = () => {
    const data = store.base.data.platform
    let view = []
    if (data !== null) {
      data.map((item, index) => {
        view.push(
          <li
            id={"pf-" + index}
            className="pf-item"
            onMouseEnter={event => onMouseEnter(event, "pf-")}
            onMouseLeave={event => onMouseLeave(event)}
            key={index}>
            <img
              className="sk-image"
              src={DATA_URL + item.p_image}
              alt=""
              onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
            <span className="sk-name">
              {item.name}
            </span>
            {
              (hoverId === ("pf-" + index)) &&
              <div
                className="sk-desc-con">
                <span className="sk-title">
                  {item.d_name}
                </span>
                <span className="sk-desc">
                  {item.desc}
                </span>
                <div className="progress-con">
                  <span className="skd-title">
                  {store.base.str.W0016}
                </span>
                  <Line
                    className="sk-desc-percent"
                    percent={item.percent}
                    strokeLinecap="round"
                    strokeColor={item.per_color}
                    strokeWidth="2"
                    trailWidth="2"
                    trailColor="#424242"/>
                </div>
              </div>
            }
          </li>,
        )
      })
      return (
        <>
          <span className="pf-title">{store.base.str.W0012}</span>
          <ul className="pf-list">{view}</ul>
        </>
      )
    }
  }
  const renderLibrary = () => {
    const data = store.base.data.library
    let view = []
    if (data !== null) {
      data.map((item, index) => {
        view.push(
          <li
            id={"li-" + index}
            className="li-item"
            onMouseEnter={event => onMouseEnter(event, "pf-")}
            onMouseLeave={event => onMouseLeave(event)}
            key={index}>
            <img
              className="sk-image"
              src={DATA_URL + item.li_image}
              alt=""
              onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
            <span className="sk-name">
              {item.name}
            </span>
            {
              (hoverId === ("li-" + index)) &&
              <div
                className="sk-desc-con">
                <span className="sk-title">
                  {item.d_name}
                </span>
                <span className="sk-desc">
                  {item.desc}
                </span>
                <div className="progress-con">
                  <span className="skd-title">
                  {store.base.str.W0016}
                </span>
                  <Line
                    className="sk-desc-percent"
                    percent={item.percent}
                    strokeLinecap="round"
                    strokeColor={item.per_color}
                    strokeWidth="2"
                    trailWidth="2"
                    trailColor="#424242"/>
                </div>
              </div>
            }
          </li>,
        )
      })
      return (
        <>
          <span className="li-title">{store.base.str.W0013}</span>
          <ul className="li-list">{view}</ul>
        </>
      )
    }
  }
  const renderTool = () => {
    const data = store.base.data.tools
    let view = []
    if (data !== null) {
      data.map((item, index) => {
        view.push(
          <li
            id={"to-" + index}
            className="to-item"
            onMouseEnter={event => onMouseEnter(event, "to-")}
            onMouseLeave={event => onMouseLeave(event)}
            key={index}>
            <img
              className="sk-image"
              src={DATA_URL + item.to_image}
              alt=""
              onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
            <span className="sk-name">
              {item.name}
            </span>
            {
              (hoverId === ("to-" + index) && item.popup === true) &&
              <div
                className="sk-desc-con">
                <span className="sk-title">
                  {item.d_name}
                </span>
                <span className="sk-desc">
                  {item.desc}
                </span>
                <div className="progress-con">
                  <span className="skd-title">
                  {store.base.str.W0016}
                </span>
                  <Line
                    className="sk-desc-percent"
                    percent={item.percent}
                    strokeLinecap="round"
                    strokeColor={item.per_color}
                    strokeWidth="2"
                    trailWidth="2"
                    trailColor="#424242"/>
                </div>
              </div>
            }
          </li>,
        )
      })
      return (
        <>
          <span className="to-title">{store.base.str.W0015}</span>
          <ul className="to-list">{view}</ul>
        </>
      )
    }
  }

  return (
    <div className="skills">
      <div className="skl-idx">
        <span className="skl-text">
          {store.base.str.W0009}
        </span>
      </div>
      <hr className="sec-skl"/>
      <div className="lg-con">
        {renderLang()}
      </div>
      <div className="pf-con">
        {renderPlatform()}
      </div>
      <div className="li-con">
        {renderLibrary()}
      </div>
      <div className="to-con">
        {renderTool()}
      </div>
    </div>
  )
}