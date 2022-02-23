import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper/core"
SwiperCore.use([Pagination, Navigation])
const Carousel = ({ navigationPrevRef, navigationNextRef, dataQuery }) => {
  if (dataQuery === undefined) {
    return <p className="loading">...Loading</p>
  }
  return (
    <>
      <Swiper
        slidesPerView={3}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={false}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          580: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={swiper => {
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current
          swiper.navigation.init()
          swiper.navigation.update()
        }}
        className="mySwiper"
      >
        {dataQuery.nodes.map(({ frontmatter, id }) => {
          return (
            <SwiperSlide key={id}>
              <div className="carousel-grid__item mt-0  " key={id}>
                <a href={frontmatter.slug} className="">
                  <img
                    src={frontmatter.newsImage.publicURL}
                    className="news-grid__image"
                    alt="news img"
                  />
                  <div className="carousel-grid__content ">
                    <p className="author ">{frontmatter.author}</p>
                    <p className="title">{frontmatter.title}</p>
                  </div>
                </a>
                <p className="carousel-grid__publishedDate">
                  {frontmatter.datePublished}
                </p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}
export default Carousel
