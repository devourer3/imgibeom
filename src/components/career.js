import { useStore } from "../stores/useStore"
import React, { useState } from "react"
import { DATA_URL } from "../stores/base-store"

export const Career = () => {
  const store = useStore();
  const [infoHover, setHover] = useState(false);
  const onMouseEnter = (e, listType) => {
    e.preventDefault();
    setHover(true);
  }
  const onMouseLeave = (e) => {
    e.preventDefault();
    setHover(false);
  }
  const careerRender = () => {
    const data = store.base.data.career;
    let view = [];
    if (data !== null) {
      data.map((item, index) => {
        view.push(
          <li
            id={"carr-" + index}
            className="carr-item"
            key={index}>
            <img
              className="carr-img"
              src={DATA_URL + item.company_image}
              alt=""
              onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}/>
            <button
              className="info-btn"
              onMouseEnter={event => onMouseEnter(event, "-")}
              onMouseLeave={event => onMouseLeave(event)}/>
            {
              (infoHover === true) &&
              <span className="desc">{item.desc}</span>
            }
            <span className="carr-title">{item.company}</span>
            <span className="position">{item.position}</span>
            <span className="service-year">{item.year_service}</span>
          </li>,
        )
      })
    }
    return (
      <ul className="carr-list">{view}</ul>
    )
  }

  return (
    <div className="career">
      <div className="carr-idx">
        <span className="carr-text">
          {store.base.str.W0005}
        </span>
      </div>
      <hr className="sec-carr"/>
      {careerRender()}
    </div>
  )
}