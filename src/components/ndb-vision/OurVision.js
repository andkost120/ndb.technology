import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import CustomButton from "../custom-button"
import NDBWrapper from "../wrapper"

const OurVision = ({
  cards,
  style,
  visionTitle,
  color,
  backgoundText1,
  backgoundText2,
  backgoundText1Style,
  backgoundText2Style,
  margin,
  page,
  id,
  className,
  linkContent,
  buttonLink,
  buttonWidth,
  buttonTitle,
  buttonImg,
  cardsNoGap,
  cardNoGap,
  flex,
}) => {
  return (
    <NDBWrapper width="fullwidth">
      <div
        id={id}
        className={`vision ${margin && "mt-100"} ${className} ${style && style
          }`}
      >
        <p
          className={`vision-title global-title-font ${!visionTitle && "m-0"}`}
        >
          {visionTitle}
        </p>
        <div style={{width: "100%", height: "50px"}}></div>
        <span
          className={`overlay1 ${backgoundText1Style}`}
          style={{ transform: "translate(10%,30%)" }}
        >
          {backgoundText1}
        </span>
        <span className={`overlay2 ${backgoundText2Style}`}>
          {backgoundText2}
        </span>
        <div className={`ndb-vision ${cardsNoGap && "cardsNoGap"}`}>
          {cards.map((card, index) => {
            const { cardTitle, cardImage, cardImageMobile, cardContent } = card
            {
              return (
                <div
                  className={`ndb-vision__card ${cardNoGap && "cardNoGap"}`}
                  key={index}
                >
                  <LazyLoadImage
                    src={cardImage}
                    className="card-image  mobile-hide"
                    alt="card"
                  />
                  <LazyLoadImage
                    src={cardImageMobile}
                    className="card-image  mobile-show"
                    alt="card"
                  />
                  <div className="gridContent">
                    {cardTitle !== "" && (
                      <p className="card-title m-20">{cardTitle}</p>
                    )}

                    <div
                      className={`card-content m-20 ${color}
                      ${page === "sustain" ? "font-24" : ""}
                      `}
                    >
                      {cardContent}
                    </div>
                  </div>
                </div>
              )
            }
          })}
          <CustomButton
            linkContent={linkContent}
            buttonLink={buttonLink}
            buttonWidth={buttonWidth}
            buttonTitle={buttonTitle}
            buttonImg={buttonImg}
            flex={flex}
            margin={margin}
          />
        </div>
      </div>
    </NDBWrapper>
  )
}

export default OurVision
