import React, { useState } from "react"
import NDBWrapper from "../wrapper"
import arrow from "../../assets/images/icons/arrowWhite.svg"
import ReactPlayer from "react-player"

const HomeDiscoverSection = ({
  width,
  pageName,
  backImg,
  bannerLink,
  DiscoverTitle,
  descriptionText
}) => {
  let className = ""
  const url = "https://www.youtube.com/watch?v=z_P1VNh3Wt4"

  if (pageName) {
    className = `${pageName}__DiscovrBanner`
  }
  const [isReady2Play, setIsReady2Play] = useState(false)
  const handleClick = () => {
    setIsReady2Play(!isReady2Play)
  }
  return (
    <NDBWrapper width={width ? width : ""} className="relative">
      <div className="video-section">
        <div
          className={`home__DiscovrBanner ${isReady2Play ? "hide" : ""}`}
        >
          <div className="banner__left">
            <img
              src={backImg}
              className="video__overlay"
              alt="banner background "
            />
            <div className={`DisTitle ${descriptionText && "descriptionText"}`}>
              Discover how we make lifelong self-charging batteries possible
            </div>
              <button className="banner__button" onClick={handleClick}>
                <img src={arrow} alt="" />
                <span>Play video</span>
              </button>
          </div>
        </div>
        <div
          className={`banner__closeButton ${!isReady2Play ? "hide" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
        </div>
        <ReactPlayer
          url={url}
          playing={isReady2Play}
          stopOnUnmount
          controls
          width="100%"
          height="100%"
          playsinline={false}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </NDBWrapper>
  )
}

export default HomeDiscoverSection
