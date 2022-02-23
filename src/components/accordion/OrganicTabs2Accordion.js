import React, { useState } from "react"

import openIcon from "../../assets/images/icons/plusIcon.png"
import plusIconWhite from "../../assets/images/icons/plusIconWhite.png"
import NDBWrapper from "../wrapper"

const OrganicTabs2Accordion = ({
  data,
  accordionTitle,
  style,
  darkTheme,
  type,
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
    <NDBWrapper>
      <div className={`accordion-section `}>
        <div className={`w-100 ${style && style}`}>
          <p className="accordion-title">{accordionTitle}</p>
          {data.nodes.map(({ frontmatter, id, html }, index) => {
            return (
                <div className="accordion-section__item" key={index}>
                  <div
                    className={`accordion-section__title ${
                      clicked === index ? "is-active" : ""
                    }`}
                    onClick={() => toggle(index)}
                  >
                    <p>{frontmatter.title}</p>
                    <img
                      src={darkTheme ? plusIconWhite : openIcon}
                      className={`title-icon ${
                        clicked === index ? " rotate" : ""
                      }`}
                      alt=""
                    />
                  </div>
                  {clicked === index ? (
                    <div
                      className="accordion-section__content"
                      style={clicked === index && mountedStyle}
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  ) : null}
                </div>
            )
          })}
        </div>
      </div>
    </NDBWrapper>
  )
}

export default OrganicTabs2Accordion
