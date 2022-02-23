import { Link } from "gatsby"
import React from "react"
import NDBWrapper from "../wrapper"

const HomeBottomSection = ({
  backImg,
  backImgLogo,
  sectionDescLogo,
  backImg3Mobile,
  bannerLink,
  arrow,
  bannerLinkName,
  sectionDesc,
  sectionDesc2,
  descriptionText,
  top,
  left,
  heightAuto,
  bottom,
  marginBottom,
  width,
  colorWhite,
  padding,
  id,
  imgPosition,
  lineBreak,
  imageWidth,
}) => {
  return (
    <NDBWrapper width={width}>
      <div
        className={`home__bottomSection ${id && id} ${marginBottom && "mb-100"
          } ${padding && padding}`}
      >
        <img
          src={backImg}
          alt={sectionDesc}
          className={`overlay mobile-hide ${imgPosition && imgPosition} ${top && "top"
            } ${left && "left"}
           ${bottom && "bottom"} ${heightAuto && "heightAuto"} `}
        />
        {backImgLogo &&
          (<div className={`overlay  backImgLogo ${top && "top"} ${left && "left"}
           ${heightAuto && "heightAuto"} `} >
            <img
              src={backImgLogo}
              alt={sectionDesc}
              className={`${imgPosition && imgPosition} ${imageWidth && imageWidth} mobile-hide`}
            />
            <img
              src={backImgLogo}
              alt={sectionDesc}
              className={`${imgPosition && imgPosition} ${imageWidth && imageWidth} mobile-show `}
            />
            <p className={` ${descriptionText && "descriptionText"}`}>{sectionDescLogo}</p>
          </div>)
        }
        <img
          src={backImg3Mobile}
          alt={sectionDesc}
          className={`mobile-show overlay ${top && "top"} ${left && "left"}
           ${bottom && "bottom"} ${heightAuto && "heightAuto"} `}
        />
        <div className={`content ${colorWhite && "text-white"}`}>
          <p className={`${descriptionText && "descriptionText"}`}>{sectionDesc}</p>
          {lineBreak ? <p className={`${descriptionText && "descriptionText"}`}>{sectionDesc2}</p> : ""}
          <Link
            to={bannerLink}
            className={`banner__button ${colorWhite && "text-white"}`}
          >
            <img src={arrow} alt="" />
            <span>{bannerLinkName}</span>
          </Link>
        </div>
      </div>
    </NDBWrapper>
  )
}

export default HomeBottomSection
