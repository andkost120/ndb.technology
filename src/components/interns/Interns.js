import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper/core"
import NDBWrapper from "../wrapper"
import loadMoreImg from "../../assets/images/icons/loadMore.png"

SwiperCore.use([Pagination, Navigation])

const Interns = ({ data, title,titlePosition }) => {
  let navigationPrevRef = useRef(null)
  let navigationNextRef = useRef(null)

  if (data === undefined) {
    return <p className="loading">...Loading</p>
  }
  return (
    <NDBWrapper width="fullwidth">
      <div className="slider">
        <p className={`${titlePosition && titlePosition } swiper-title`}>{title}</p>

        <Swiper
          slidesPerView={1.2}
          centeredSlides={false}
          spaceBetween={30}
          grabCursor={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".slidePrev-btn",
            nextEl: ".slideNext-btn",
          }}
          className="mySwiper"
          breakpoints={{
            200: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 1.2,
            },
          }}
        >
          <div className="swiperNav__left">
            {" "}
            <button
              ref={navigationPrevRef}
              className="arrow-move__Left slidePrev-btn"
            >
              <img src={loadMoreImg} alt="left" />
            </button>
          </div>
          <div className="swiperNav__right">
            {" "}
            <button
              ref={navigationNextRef}
              className="arrow-move__Right slideNext-btn"
            >
              <img src={loadMoreImg} alt="left" />
            </button>
          </div>

          {data.nodes.map(
            ({
              id,
              html,
              frontmatter: { name, title, abbreviation, number, ndbImage },
            }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="interns__item" key={id}>
                    <div className="left">
                      <div className="profile-img">
                        <img src={ndbImage.publicURL} alt="team member" />
                      </div>
                      <div className="intern-info">
                        <p className="abbrv">
                          {abbreviation} <sup>{number}</sup>{" "}
                        </p>
                        <p className="name">{name ? name : ""}</p>
                        <p className="position">{title ? title : ""}</p>
                      </div>
                    </div>
                    <div className="right">
                      <di
                        className="content"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            }
          )}
        </Swiper>
      </div>
    </NDBWrapper>
  )
}

export default Interns
