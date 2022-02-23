import { Link } from "gatsby"
import React from "react"

const CustomButton = ({
  buttonTitle,
  buttonLink,
  buttonImg,
  buttonDisplay,
  textAlign,
  buttonWidth,
  buttonTextOrder,
  flex,
  margin,
  buttonType,
  type,
  pageName,
  buttonColor,
  onClick,
}) => {
  return (
    <div className={`c-button ${flex} ${margin} `}>
      {buttonType === "button" ? (
        <button
          type="submit"
          onClick={onClick}
          className={`c-button__link ${buttonWidth} ${buttonDisplay && buttonDisplay
            }`}
        >
          {buttonImg ? (
            <img
              src={buttonImg}
              alt="buttonImg"
              className={`c-button__img ${buttonTextOrder}`}
            />
          ) : (
            ""
          )}
          <p
            className={`c-button__name ${textAlign} ${pageName === "home" ? "bold-30" : ""
              } ${buttonColor && buttonColor}`}
          >
            {buttonTitle}
          </p>
        </button>
      ) : type === "external" ? (
        <a
          href={buttonLink ? buttonLink : "#"}
          target="_blank"
          rel="noreferrer noopener"
          className={`c-button__link ${buttonWidth} ${buttonDisplay && buttonDisplay
            }`}
        >
          {" "}
          {buttonImg ? (
            <img
              src={buttonImg}
              alt="buttonImg"
              className={`c-button__img ${buttonTextOrder}`}
            />
          ) : (
            ""
          )}
          <p
            className={`c-button__name ${textAlign} ${buttonColor && buttonColor
              }`}
          >
            {buttonTitle}
          </p>
        </a>
      ) : (
        <Link
          to={buttonLink ? buttonLink : "#"}
          target="_blank"
          className={`c-button__link ${buttonWidth} ${buttonDisplay && buttonDisplay
            }`}
        >
          {buttonImg ? (
            <img
              src={buttonImg}
              alt="buttonImg"
              className={`c-button__img ${buttonTextOrder}`}
            />
          ) : (
            ""
          )}
          <p
            className={`c-button__name ${textAlign} ${buttonColor && buttonColor
              }`}
          >
            {buttonTitle}
          </p>
        </Link>
      )}
    </div>
  )
}

export default CustomButton
