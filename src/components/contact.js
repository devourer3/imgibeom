import { useStore } from "../stores/useStore"
import { DATA_URL } from "../stores/base-store"
import React, { useState } from "react"
import "../styles/contact.scss"

export const Contact = () => {
  const store = useStore()
  const [mail, setMail] = useState(false)
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [email, setEmail] = useState("")

  const [thxPopup, setPopup] = useState(false)

  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   content: ""
  // })

  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const handleClick = (e) => {

    if (email.length === 0 || name.length === 0 || content.length === 0 || emailRegex.test(email) === false) {
      alert("알 수 없는 오류가 발생했습니다!");
      return false
    } else {
      let form = {
        "name": name,
        "message": content,
        "email": email,
      }
      // sending through xhr as axios won't work (CORS)
      const xhr = new XMLHttpRequest()
      xhr.open("POST", "https://script.google.com/macros/s/AKfycbwh-oQWql26HNiPWOe1guT93xSHXxdZypYAXvJTzZ-vzHF0MOwn/exec")
      // xhr.withCredentials = true
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
      xhr.onreadystatechange = function xhrGo() {
        setName("")
        setEmail("")
        setContent("")
      }
      const encoded = Object
        .keys(form)
        .map(k => {
          return `${encodeURIComponent(k)}=${encodeURIComponent(form[k])}`
        })
        .join("&")
      // sending
      xhr.send(encoded)
      store.base.setPopupOption("popupMsg", store.base.str.S0016)
      store.base.setPopupOption("popupOn", true)
      return true
    }
  }

  return (
    <>
      <div className="contact">
        <div className="cont-idx">
        <span className="cont-text">
          {store.base.str.W0007}
        </span>
        </div>
        <hr className="cont-sec"/>
        {
          mail === false &&
          <div className="contact-container">
            <div className="con-image-con">
              <img className="mail-img"
                   alt={""}
                   src={DATA_URL + "gmail.svg"}
                   onError={(e) => e.target.setAttribute("src", DATA_URL + "construction.png")}>
              </img>
            </div>
            <span className="mail-to-me">
            {store.base.str.S0011}
          </span>
            <button
              className="btn-sendMail"
              onClick={(event) => {
                setMail(true)
              }}
            >
              {store.base.str.W0027}
            </button>
          </div>
        }
        {
          mail === true &&
          <div className="mail-form-container">
            <div className={"name-field"}>
              <span className="name-txt">{store.base.str.W0028}</span>
              <input
                className="name-form"
                id={"name"}
                name={"name"}
                type={"text"}
                placeholder={store.base.str.S0012}
                value={name}
                onChange={(e) => {
                  onChangeName(e)
                }}
              />
            </div>
            <fieldset className="email-field">
              <span className="email-txt">{store.base.str.W0029}</span>
              <input
                className="email-form"
                name={"email"}
                id={"email"}
                type={"email"}
                placeholder={store.base.str.S0013}
                value={email}
                onChange={(e) => {
                  onChangeEmail(e)
                }}
              />
            </fieldset>
            <fieldset className="content-field">
              <span className="content-txt">{store.base.str.W0030}</span>
              <textarea
                className="content-form"
                name={"message"}
                type={"text"}
                placeholder={store.base.str.S0014}
                value={content}
                onChange={(e) => {
                  onChangeContent(e)
                }}
              />
            </fieldset>
            <div className="send-btn-con">
              <button
                className={
                  (email.length !== 0 && name.length !== 0 && content.length !== 0 && emailRegex.test(email) === true)
                    ? "send-btn active" : "send-btn inActive"}
                onClick={(e) => {
                  handleClick(e)
                }}>
                {store.base.str.W0031}
              </button>
            </div>
          </div>
        }
      </div>
    </>
  )
}