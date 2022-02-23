import React from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import arrow from "../../assets/images/icons/arrow.svg"
import backImg from "../../assets/images/news/newsSwirl.svg"
import bannerMobile from "../../assets/images/news/banner-mobile.svg"
import CustomPartnersGrid from "../../components/partners-grid/CustomPartnersGrid"
import { partnerImages } from "../../components/partners-grid/Data"
import NewsGrid from "../../components/news/NewsGrid"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper/core"

SwiperCore.use([Pagination, Autoplay, Navigation])

const News = () => {
    return (
        <Layout>
            <Seo title="News" />
            <Banner width="fullwidth" pageName="news" style="mb-100">
                <img
                    src={bannerMobile}
                    className="banner__overlay mobile-show"
                    alt="banner background "
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        marginLeft: "0%",
                    }}
                />
                <img
                    src={backImg}
                    className="banner__overlay mobile-hide"
                    alt="banner background "
                    style={{ width: "100%", height: "100%" }}
                />

                <div className="banner__data ">
                    <div className="c-button">
                        <Link
                            to="/news/presskit"
                            target="_blank"
                            className="c-button__link banner__button"
                        >
                            <img src={arrow} alt="buttonImg" className="c-button__img " />
                            <span className="text-left btn-banner-cta">Press kit</span>
                        </Link>
                    </div>
                </div>
            </Banner>
            <NewsGrid style="mt-2" />

            <>
                <div className="mobile-hide">
                    <CustomPartnersGrid data={partnerImages} margin="mt-0" />
                </div>

                <div className="mobile-show">
                    <div className="Partner_cards_mobile slider-bottom">
                        <Swiper
                            slidesPerView={2}
                            slidesPerGroup={2}
                            spaceBetween={5}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            speed={3000}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                        >
                            {partnerImages.map(({ logo, link }, index) => (
                                <SwiperSlide className="Clogo" key={index}>
                                    <a href={link}>
                                        <img src={logo} alt="news img" />
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </>
        </Layout>
    )
}

export default News
