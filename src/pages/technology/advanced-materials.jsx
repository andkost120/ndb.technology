/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React from "react"
import { Link } from "gatsby"
import Seo from "../../components/seo"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import arrow from "../../assets/images/icons/arrow.svg"
import banner from "../../assets/images/technology/materials/banner.svg"
import IconBackground from "../../assets/icons/technology/icon-grid-background.svg"
import MaterialsAnimatingTitleSection from "../../components/technology/materials/materials-animating-title-section"
import IconMobile from "../../assets/icons/technology/materials/icon-animation-mobile.inline.svg"
import IconAnimation1 from "../../assets/icons/technology/materials/icon-animation-1.inline.svg"
import IconAnimation2 from "../../assets/icons/technology/materials/icon-animation-2.inline.svg"
import IconAnimation3 from "../../assets/icons/technology/materials/icon-animation-3.inline.svg"
import IconAnimation4 from "../../assets/icons/technology/materials/icon-animation-4.inline.svg"
import Tabs from "../../components/dep--tabs"
/* -------------------------------------------------------------------------- */
/*                            Functional Component                            */
/* -------------------------------------------------------------------------- */
export default function Materials() {
    return (
        <Layout pageName="ndb-dep ndb-dep--materials pb-0">
            <Seo title="NDB Advanced Materials" />
            <Banner width="fullwidth" pageName="sustain-strategy">
                <img src={banner} className="banner__overlay" alt="banner background " />
                <div className="banner__data">
                    <div className="c-button">
                        <h2 className="banner__heading">Advanced Materials</h2>
                        <Link
                            to="/contact/"
                            target="_blank"
                            className="c-button__link banner__button"
                        >
                            <img src={arrow} alt="buttonImg" className="c-button__img " />
                            <span className="c-button__name text-left font-weight-normal">
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>
            </Banner>

            <Tabs />

            <MaterialsAnimatingTitleSection />

            <div
                className="ndb-dep__animation-wrapper"
                style={{ backgroundImage: `url(${IconBackground})` }}
            >
                <div className="container text-lg-left text-center px-sm-5 px-0">
                    <div className="animation-wrapper animation-wrapper--desktop">
                        <IconAnimation1 className="animation--1" data-aos="slide-up" />

                        <IconAnimation2
                            className="animation--2"
                            data-aos="slide-up"
                            data-aos-offset="200"
                            data-aos-delay="100"
                        />

                        <IconAnimation3
                            className="animation--3"
                            data-aos="slide-up"
                            data-aos-offset="200"
                            data-aos-delay="200"
                        />

                        <IconAnimation4
                            className="animation--4"
                            data-aos="slide-up"
                            data-aos-offset="200"
                            data-aos-delay="300"
                        />
                    </div>

                    <div className="animation__content mx-auto mx-lg-0">
                        <div className="sticky text-lg-left text-center p-md-0 p-4">
                            <div className="animation-wrapper animation-wrapper--mobile mb-5">
                                <IconMobile />
                            </div>
                            <div className="content__item" data-aos="fade-up">
                                <h3 className="mb-1 fw-600 text-uppercase">From the root</h3>
                                <p className="text-justify">
                                    NDB invests in innovation and constant improvement; this is
                                    heavily focused on advanced material, including advanced
                                    transducer, composites, polymers, and radioisotopes.
                                </p>
                            </div>

                            <div className="content__item" data-aos="fade-up">
                                <h3 className="mb-1 fw-600 text-uppercase">
                                    From material to production
                                </h3>
                                <p className="text-justify">
                                    The development of our product line is made in collaboration
                                    with well-known research institutions and national laboratories.
                                </p>
                            </div>

                            <div className="content__item" data-aos="fade-up">
                                <h3 className="mb-1 fw-600 text-uppercase">Create possibilities</h3>
                                <p className="text-justify">
                                    Our new multiphase semiconductors, high-temperature resistant
                                    material and encapsulation techniques exhibit novel properties
                                    that deliver superior performances.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}