import React from "react"
import Container from "../Container"

const BioSection = ({ bioSectionContent }) => {
  return (
    <Container>
      <div className="careers_bio-section mt-100 mb-100">
        {bioSectionContent.map(({ number, title, content }) => (
          <div className="bio">
            <div className="number">
              <span>{number}</span>
            </div>
            <div className="bio__content">
              <p className="title">{title}</p>
              <p className="desc">{content}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default BioSection
