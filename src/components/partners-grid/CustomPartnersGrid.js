import React from "react"
import NDBWrapper from "../wrapper"

const CustomPartnersGrid = ({ data, margin }) => {
  return (
    <div className={`partnerWrap ${margin ? "mt-0" : ""}`}>
      <p className="partnersTitle">Featured on</p>
      <NDBWrapper>
        <div className="partners-section">
          {data.map((partner, index) => (
            <a
              key={index}
              className="partners-section__item"
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={partner.logo}
                alt="partner logo"
                className="partners-section__img"
              />
            </a>
          ))}
        </div>
      </NDBWrapper>
    </div>
  )
}

export default CustomPartnersGrid
