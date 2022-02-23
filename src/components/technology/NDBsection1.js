import React from "react"
import Container from "../Container"
import NDBWrapper from "../wrapper"
import quoteImg from "../../assets/images/icons/quoteCornerGreen.png"
import CustomButton from "../custom-button"

const NDBsection1 = ({
  backgoundText1,
  backgoundText2,
  backgoundText3,
  backgoundText1Style,
  backgoundText2Style,
  backgoundText3Style,
  NDBSectionTitle,
  quote,
  quoteAuthor,
  paragraphUnderQuote1,
  paragraphUnderQuote2,
  paragraphUnderQuote3,
  paragraphUnderQuote4,
  paragraphUnderQuote5,
  paragraphOverQuote1,
  paragraphOverQuote2,
  paragraphOverQuote3,
  sectionPapper,
  sectionPapperOverText,
  linkContent,
  noButton,
  buttonLink,
  buttonWidth,
  buttonTitle,
  buttonImg,
  buttonTextAlign,
  buttonDisplay,
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
        className={`technology__section1 ${mobile && mobile} ${padding && padding
          }`}
      >
        <span className={`overlay1 ${backgoundText1Style}`}>
          {backgoundText1}
        </span>
        <span className={`overlay2 ${backgoundText2Style}`}>
          {backgoundText2}
        </span>
        <span className={`overlay2 ${backgoundText3Style}`}>
          {backgoundText3}
        </span>
        <Container>
          <span className="technology__section1-title global-title-font ">
            {NDBSectionTitle}
          </span>
          {sectionPapperOverText && (
            <div className="section-image">
              <img src={sectionPapperOverText} alt="content" />
            </div>
          )}
          {paragraphOverQuote1 && (
            <p
              className={`section-content ${margin ? margin : ""} ${textAlign ? textAlign : ""
                }`}
            >
              {paragraphOverQuote1}
            </p>
          )}
          {paragraphOverQuote2 && (
            <p
              className={`section-content ${margin ? margin : ""} ${textAlign ? textAlign : ""
                }`}
            >
              {paragraphOverQuote2}
            </p>
          )}
          {paragraphOverQuote3 && (
            <p
              className={`section-content ${margin ? margin : ""} ${textAlign ? textAlign : ""
                }`}
            >
              {paragraphOverQuote3}
            </p>
          )}
          {quote && (
            <div className="section-quote">
              <img src={quoteImg} alt="section quote" />
              <img src={quoteImg} alt="section quote" />
              <p>{quote}</p>
              <span className="quote-author">{quoteAuthor}</span>
            </div>
          )}
          {paragraphUnderQuote1 && (
            <p className={`section-content ${textAlign ? textAlign : ""}`}>
              {paragraphUnderQuote1}
            </p>
          )}
          {paragraphUnderQuote2 && (
            <p className={`section-content ${textAlign ? textAlign : ""}`}>
              {paragraphUnderQuote2}
            </p>
          )}
          {paragraphUnderQuote3 && (
            <p className={`section-content ${textAlign ? textAlign : ""}`}>
              {paragraphUnderQuote3}
            </p>
          )}
          {paragraphUnderQuote4 && (
            <p className={`section-content ${textAlign ? textAlign : ""}`}>
              {paragraphUnderQuote4}
            </p>
          )}
          {paragraphUnderQuote5 && (
            <p className={`section-content ${textAlign ? textAlign : ""}`}>
              {paragraphUnderQuote5}
            </p>
          )}
          {sectionPapper && (
            <div className="section-image">
              <img src={sectionPapper} alt="papper ilustration" />
            </div>
          )}

          {noButton
            ? null
            : <CustomButton
              linkContent={linkContent}
              buttonLink={buttonLink}
              buttonWidth={buttonWidth}
              buttonTitle={buttonTitle}
              buttonImg={buttonImg}
              textAlign={`text-center ${buttonTextAlign && buttonTextAlign}`}
              flex={flex}
              margin={margin}
              buttonDisplay={buttonDisplay}
            />
          }
        </Container>
      </div>
    </NDBWrapper>
  )
}

export default NDBsection1
