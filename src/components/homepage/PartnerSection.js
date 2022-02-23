import React, { useEffect } from "react"
import NDBWrapper from "../wrapper"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { partnerImagesCarousel } from "../partners-grid/Data"

const HomePartnerSection = () => {
  gsap.registerPlugin(ScrollTrigger)

  let tl = gsap.timeline({ delay: 0.3 })
  useEffect(() => {
    gsap.to(".Clogo", {
      scrollTrigger: {
        trigger: ".ndb-wrapper",
        start: "top 90%",
        markers: false,
        toggleActions: "play",
      },
      opacity: 1,
      duration: 1,
      y: 0,
    })
  }, [])
  return (
    <div className="partnerWrap">
      <NDBWrapper>
        <div className="Partner_cards">
          {partnerImagesCarousel.map(({ logo }) => (
            <div className="Clogo">
              <img src={logo} alt="partner logo" />
              <div className="overlay top left"></div>
            </div>
          ))}
        </div>
      </NDBWrapper>
    </div>
  )
}

export default HomePartnerSection
