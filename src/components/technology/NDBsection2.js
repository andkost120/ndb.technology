import React from "react"
import Container from "../Container"
import NDBWrapper from "../wrapper"
import CustomButton from "../custom-button"

const NDBsection2 = ({
  NDBSectionTitle,
  paragraphOverQuote1,
  paragraphOverQuote2,
  sectionPapper,
  linkContent,
  buttonLink,
  buttonWidth,
  buttonTitle,
  buttonImg,
  textAlign,
  flex,
  margin,
  style,
  padding,
  id,
  mobile,
}) => {
  return (
    <NDBWrapper style={style}>
      <div
        id={id}
        className={`technology__section1 ${mobile && mobile}  ${
          padding && padding
        }`}
      >
        <Container>
          <span className="technology__section1-title">{NDBSectionTitle}</span>
          {paragraphOverQuote1 && (
            <p
              className={`section-content ${margin ? margin : ""} ${
                textAlign ? textAlign : ""
              }`}
            >
              {paragraphOverQuote1}
            </p>
          )}
          {paragraphOverQuote2 && (
            <p
              className={`section-content ${margin ? margin : ""} ${
                textAlign ? textAlign : ""
              }`}
            >
              {paragraphOverQuote2}
            </p>
          )}
          <CustomButton
            linkContent={linkContent}
            buttonLink={buttonLink}
            buttonWidth={buttonWidth}
            buttonTitle={buttonTitle}
            buttonImg={buttonImg}
            textAlign={`text-center ${textAlign && textAlign}`}
            flex={flex}
            margin={margin}
          />
        </Container>
      </div>
    </NDBWrapper>
  )
}

export default NDBsection2
