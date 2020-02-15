import { useStore } from "../stores/useStore"
import { DATA_URL } from "../stores/base-store"
import React, { useState } from "react"

export const About = () => {
  const store = useStore()
  // let [percent, setPercent] = useState(0)
  // const increase = (fixPercent) => {
  //   if(percent >= fixPercent) {
  //     clearTimeout();
  //     return;
  //   }
  //   setPercent(percent);
  //   setTimeout(increase, 10);
  // }
  // const clearTimeOut = () => {
  //   setPercent(0)
  // }
  return (
    <div className="about">
      <div className="ab-idx">
        <span className="ab-text">
          {store.base.str.W0004}
        </span>
      </div>
      <hr className="ab-sec" />
      <div className="ma-about">
        <div className="pf-image-con">
          <img className="pf-image"
               alt={""}
               src={DATA_URL + "pic_example.svg"}
               onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}>
          </img>
        </div>
        <div className="pf-desc-con">
          <span className="desc-1">
            {store.base.str.S0008}
          </span>
          <span className="desc-2">
            {store.base.str.S0009}
          </span>
        </div>
      </div>
    </div>
  )
}

