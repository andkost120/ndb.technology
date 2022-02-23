import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner"
import Seo from "../components/seo"
import horizontalCircuit from "../assets/images/homepage/circuitHorizontal.svg"
import videoBackImg from "../assets/images/homepage/videoSection.svg"
import arrow from "../assets/images/icons/arrow.svg"
import arrowWhite from "../assets/images/icons/arrowWhite.svg"
import backImg from "../assets/images/homepage/homeSwirl3.svg"
import bannerMobile from "../assets/images/homepage/banner-mobile.svg"
import backImg3 from "../assets/images/homepage/bottomSwirlImage2.svg"
import backImg3Mobile from "../assets/images/homepage/bottomSwirlImage2Mobile.svg"
import HomeDiscoverSection from "../components/homepage/HomeDiscoverSection"
import HomeAboutSection from "../components/homepage/HomeAboutSection"
import NDBsection1 from "../components/technology/NDBsection1"
import NDBWrapper from "../components/wrapper"
import CustomPartnersGrid from "../components/partners-grid/CustomPartnersGrid"
import { partnerImages, partnerImagesCarousel } from "../components/partners-grid/Data"
import HomeBottomSection from "../components/homepage/HomeBottomSection"
import TabsWithCarousel from "../components/tabs-with-carousel/TabsWithCarousel"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core"
import HomePartnerSection from "../components/homepage/PartnerSection"
import SubscribeForm from "../components/form/subscribe-form"
import Awards from "../components/homepage/awards"
import HomeNDBBlockchain from "../components/homepage/home-ndb-blockchain"
import HomeNDBValues from "../components/homepage/home-ndb-values"
import HomeNDBCity from "../components/homepage/home-ndb-city"

SwiperCore.use([Pagination, Navigation, Autoplay])

const Home = () => {
    const data = useStaticQuery(graphql`
        {
            HomeNews: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: { regex: "/news/" }
                    frontmatter: { pageName: { eq: true } }
                }
                sort: { fields: frontmatter___newsImage___name }
            ) {
                totalCount
                nodes {
                    id
                    frontmatter {
                        title
                        slug
                        datePublished
                        author
                        pageName
                        newsImage {
                            publicURL
                        }
                    }
                }
            }
            HomeEvents: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/carousel/homepage/events/" } }
                sort: { fields: frontmatter___newsImage___base, order: ASC }
            ) {
                totalCount
                nodes {
                    id
                    frontmatter {
                        title
                        slug
                        datePublished
                        author
                        newsImage {
                            publicURL
                        }
                    }
                }
            }
        }
    `)

    const data1 = {
        backgoundText1: "techno",
        backgoundText2: "logy",
        NDBSectionTitle: "What is NDB ?",
        paragraphOverQuote1: (
            <>
                NDB or Nano Diamond Battery is an innovative energy generator and storage that
                redefines and revolutionizes the battery as we know it.
            </>
        ),
        paragraphOverQuote2: (
            <>
                Its long-lasting properties and longevity are ensured by converting the radioactive
                decay energy from nuclear waste into energy.
            </>
        ),
        paragraphOverQuote3: (
            <>
                NDB is tiny, modular, cost-effective, and scalable from chipset to industrial
                applications.
            </>
        ),
    }
    return (
        <Layout pageName="home">
            <Seo title="Home" />

            <Banner width="fullwidth" pageName="home">
                <img
                    src={backImg}
                    className="banner__overlay home-banner"
                    alt="banner background"
                />
                <img
                    src={bannerMobile}
                    className="banner__overlay mobile-show"
                    alt="banner background"
                    style={{
                        width: "115%",
                        objectFit: "contain",
                        marginRight: "-5%",
                    }}
                />
                <img src={backImg} className=" show1080 " alt="banner background " />
                <div className="home__banner-desc">
                    <span className="homeOverlay">LONGLIFE</span>
                    <p>SELF-CHARGING BATTERY</p>
                </div>
                <div className="banner__data ">
                    <div className="c-button">
                        <Link
                            to="/contact/"
                            target="_blank"
                            className="c-button__link banner__button"
                        >
                            <img src={arrow} alt="buttonImg" className="c-button__img " />
                            <span className="c-button__name text-left">Contact us</span>
                        </Link>
                    </div>
                </div>
            </Banner>
            <Awards />
            <>
                <div className="mobile-hide">
                    <HomePartnerSection width="fullwidth" />
                </div>

                <div className="mobile-show">
                    <div className="Partner_cards_mobile slider-bottom">
                        <Swiper
                            slidesPerView={2}
                            slidesPerGroup={2}
                            spaceBetween={10}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            speed={2000}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                        >
                            {partnerImagesCarousel.map((item, index) => (
                                <SwiperSlide className="Clogo">
                                    <img src={item.logo} className="" alt="news img" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </>

            <NDBsection1
                backgoundText1={data1.backgoundText1}
                backgoundText2={data1.backgoundText2}
                NDBSectionTitle={data1.NDBSectionTitle}
                paragraphOverQuote1={data1.paragraphOverQuote1}
                paragraphOverQuote2={data1.paragraphOverQuote2}
                paragraphOverQuote3={data1.paragraphOverQuote3}
                backgoundText1Style="top right"
                backgoundText2Style="bottom-20  left"
                buttonLink="#"
            />
            <NDBWrapper width="fullwidth">
                <div className="home-circuitHorizontal">
                    <img src={horizontalCircuit} alt="horizontalCircuit" />
                </div>
            </NDBWrapper>

            <HomeAboutSection />

            <HomeDiscoverSection
                pageName="home"
                backImg={videoBackImg}
                bannerLink="Play Video"
                DiscoverTitle="Discover how we make lifelong self-charging batteries possible"
                width="fullwidth"
                descriptionText
            />

            <HomeNDBValues />
            <HomeNDBBlockchain />
            <HomeNDBCity />

            <TabsWithCarousel data={data} display="events" />
            <>
                <div className="mobile-hide">
                    <CustomPartnersGrid data={partnerImages} />
                </div>

                <div className="mobile-show">
                    <div className="partners-section-mobile slider-bottom">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={5}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            speed={2000}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                        >
                            {partnerImages.map(({ logo, link }, index) => (
                                <SwiperSlide className="partners-section-mobile__item" key={index}>
                                    <a href={link}>
                                        <img src={logo} className="" alt="news img" />
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </>

            <HomeBottomSection
                bannerLink="/careers/"
                arrow={arrowWhite}
                bannerLinkName="Join our team"
                sectionDesc="To invest in your abilities"
                sectionDesc2="join us at NDB"
                lineBreak={true}
                backImg={backImg3}
                backImg3Mobile={backImg3Mobile}
                bottom
                width="fullwidth"
                colorWhite
                id="homeBottomSection3"
                descriptionText
            />
            <SubscribeForm />
        </Layout>
    )
}
export default Home
