import React, { useState } from "react"

import openIcon from "../../assets/images/icons/plusIcon.png"
import plusIconWhite from "../../assets/images/icons/plusIconWhite.png"
import NDBWrapper from "../wrapper"

const Accordion = ({
  data,
  accordionTitle,
  accordionDescription,
  style,
  darkTheme,
  type,
  mobile,
  width,
}) => {
  const [clicked, setClicked] = useState(false)

  const toggle = index => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }
  const mountedStyle = {
    animation: "inAnimation 250ms ease-in",
  }
  return (
    <NDBWrapper width={width && width} mobile={mobile && mobile}>
      <div className={`accordion-section ${style}`}>
        <div className={`w-100 `}>
          <p className="accordion-title">{accordionTitle}</p>
          <p className="accordion-description">
            {accordionDescription && accordionDescription}
          </p>
          {data.map((item, index) => (
            <div className="accordion-section__item" key={index}>
              <div
                className={`accordion-section__title ${clicked === index ? "is-active" : ""
                  }`}
                onClick={() => toggle(index)}
              >
                <p>{item.title}</p>
                <img
                  src={darkTheme ? plusIconWhite : openIcon}
                  className={`title-icon ${clicked === index ? " rotate" : ""}`}
                  alt=""
                />
              </div>
              {clicked === index ? (
                <div
                  className="accordion-section__content"
                  style={clicked === index && mountedStyle}
                >
                  {item.content}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </NDBWrapper>
  )
}

export default Accordion
