import { useStore } from "../stores/useStore"
import React, { useState } from "react"
import "../styles/popup.scss"

export const Popup = () => {
  const store = useStore()
  // const [popup, setPopup] = useState(true);
  const onClickPopup = (e) => {
    store.base.setPopupOption("popupOn", false)
    store.base.setPopupOption("popupMsg", "");
  }
  return (
    <>
      <div className="popup-entire">
        <div className="popupWrapper">
          <div className="popup-con">
            <div className="msg-con">
              <span className="pop-msg">{store.base.popupOpt.popupMsg}</span>
            </div>
            <div className="confirm-con"
                 onClick={(e) => {
                   onClickPopup(e)
                 }}>
            <span className="confirm-msg">
              {store.base.str.W0032}
            </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

