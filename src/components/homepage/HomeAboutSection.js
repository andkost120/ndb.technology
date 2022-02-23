import React from "react"
import NDBWrapper from "../wrapper"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core"
SwiperCore.use([Pagination, Navigation, Autoplay])

const HomeWhatNDBSection = ({ width }) => {
  const carousel = [
    "DATA CENTER",
    "INDUSTRIES",
    "CONSUMER ELECTRONICS",
    "MARINE",
    "AUTOMOTIVE",
    "AVIATION",
    "MEDICAL TECHNOLOGY",
    "QUANTUMARO",
    "SPACE",
    "DATA CENTER",
    "INDUSTRIES",
    "CUSTOMERS ELECTRONICS",
    "MARINE",
    "AUTOMOTIVE",
    "AVIATION",
    "MEDICAL TECHNOLOGY",
    "QUANTUMARO",
    "SPACE",
    "DATA CENTER",
    "INDUSTRIES",
    "CUSTOMERS ELECTRONICS",
    "MARINE",
    "AUTOMOTIVE",
  ]

  return (
    <NDBWrapper width="fullwidth">
      <div className="callToAction">
        <Swiper
          slidesPerView={5}
          loop={true}
          loopFillGroupWithBlank={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="ctaWrapper"
        >
          {carousel.map((item, index) => (
            <SwiperSlide className="track">
              <span className="slide" key={index}>
                {item}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="callToAction">
        <Swiper
          slidesPerView={5}
          dir="rtl"
          loop={true}
          loopFillGroupWithBlank={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {carousel.map((item, index) => (
            <SwiperSlide className="track-invert">
              <span className="slide" key={index}>
                {item}
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <br /><br />
    </NDBWrapper>
  )
}

export default HomeWhatNDBSection
