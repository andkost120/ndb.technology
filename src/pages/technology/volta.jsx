import React, { useEffect, useRef } from "react"

// Libraries
import { Link } from "gatsby"
import Seo from "../../components/seo"

// Layout
import Layout from "../../components/layout"

// Components
import Banner from "../../components/Banner"
import Tabs from "../../components/dep--tabs/"

// Icons
import IconBackground from "../../assets/icons/technology/icon-grid-background.svg"
import arrow from "../../assets/images/icons/arrow.svg"
import earthBanner from "../../assets/images/technology/volta/banner.svg"

// Animation Icons
import IconMobile from "../../assets/icons/technology/icon-animation-mobile.inline.svg"
import IconAnimation1 from "../../assets/icons/technology/icon-animation-1.inline.svg"
import IconAnimation2 from "../../assets/icons/technology/icon-animation-2.inline.svg"
import IconAnimation3 from "../../assets/icons/technology/icon-animation-3.inline.svg"
import IconAnimation4 from "../../assets/icons/technology/icon-animation-4.inline.svg"
import VoltaAnimatingTitleSection from "../../components/technology/volta/volta-animating-title-section"

const Volta = () => {
    const animation = useRef()
    const content = useRef()
    const secondPart = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const [entry] = entries
                if (entry.isIntersecting) {
                    animation.current.classList.add("second-part")
                    content.current.classList.add("second-part")
                } else {
                    animation.current.classList.remove("second-part")
                    content.current.classList.remove("second-part")
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.75,
            }
        )

        if (window.innerWidth >= 1024) {
            observer.observe(secondPart.current)
        }

        return () => {
            if (secondPart.current) {
                observer.unobserve(secondPart.current)
            }
        }
    }, [])

    return (
        <Layout pageName="ndb-dep ndb-dep--volta">
            <Seo title="NDB Volta" />
            <Banner width="fullwidth" pageName="sustain-strategy">
                <img src={earthBanner} className="banner__overlay" alt="banner background " />
                <div className="banner__data">
                    <div className="c-button">
                        <h2 className="banner__heading">NDB Volta</h2>
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

            <VoltaAnimatingTitleSection />

            <div
                className="ndb-dep__animation-wrapper"
                style={{ backgroundImage: `url(${IconBackground})` }}
            >
                <div className="container text-lg-left text-center">
                    <div ref={animation} className="animation-wrapper animation-wrapper--desktop">
                        <IconAnimation1 className="animation--1" />

                        <IconAnimation2 className="animation--2" />

                        <IconAnimation3 className="animation--3" />

                        <IconAnimation4 className="animation--4" />
                    </div>

                    <div ref={content} className="animation__content mx-auto mx-lg-0">
                        <div className="content__first-part">
                            <div className="sticky text-lg-left text-center">
                                <div className="animation-wrapper animation-wrapper--mobile p-lg-0 pl-4 pr-4 pb-4 mb-4">
                                    <IconMobile />
                                </div>
                                <div
                                    className="content__item text-lg-left text-center"
                                    data-aos="fade-up"
                                >
                                    <h3 className="mb-1 fw-600 text-uppercase">
                                        Compact, Portable and Modular
                                    </h3>
                                    <p>
                                        A modular smart fission microreactor that converts fission
                                        heat into electricity with a solid-state compact and power
                                        dense core.
                                    </p>
                                </div>

                                <div
                                    className="content__item text-lg-left text-center"
                                    data-aos="fade-up"
                                >
                                    <h3 className="mb-1 fw-600 text-uppercase">High power range</h3>
                                    <p>
                                        A modular design with power output from kWe to above MWe to
                                        serve residentials, industries and remote locations.
                                    </p>
                                </div>

                                <div
                                    className="content__item text-lg-left text-center"
                                    data-aos="fade-up"
                                >
                                    <h3 className="mb-1 fw-600 text-uppercase">
                                        Advance structure
                                    </h3>
                                    <p>
                                        A fissionable heat source in an advanced core matrix and
                                        passive core cooling system without pumps and valve.
                                    </p>
                                </div>

                                <div
                                    className="content__item text-lg-left text-center"
                                    data-aos="fade-up"
                                >
                                    <h3 className="mb-1 fw-600 text-uppercase">
                                        Portable and powerful
                                    </h3>
                                    <p>
                                        Components are built and assembled in the factory, ready for
                                        customer use.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={secondPart}
                            className="content__second-part text-lg-left text-center mt-5 mt-lg-0"
                        >
                            <div className="content__item" data-aos="fade-up">
                                <h3 className="mb-1 fw-600 text-uppercase">
                                    Economical and Eco-friendly
                                </h3>
                                <p>
                                    Operates for a minimum of 10 years without the need of
                                    refueling, whilst recycling nuclear waste.
                                </p>
                            </div>

                            <div className="content__item" data-aos="fade-up">
                                <h3 className="mb-1 fw-600 text-uppercase">
                                    Robotic control systems
                                </h3>
                                <p>
                                    Smart and safe operation using AI/ML control algorithms.
                                    Voltasys utilizes in-core and out-core self-powered sensors to
                                    predict and diagnose.
                                </p>
                            </div>

                            <div className="content__item" data-aos="fade-up">
                                <h3 className="mb-1 fw-600 text-uppercase">
                                    Green Hydrogen Storage
                                </h3>
                                <p>
                                    The production of green hydrogen would be the primary storage
                                    option for the Volta. NDB plans to include other storage
                                    options.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Volta
