import React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Banner from "../components/Banner"
import Layout from "../components/layout"
import Form from "../components/form/form"
import FindUs from "../components/company/FindUs"
import arrow from "../assets/images/icons/arrow.svg"
import backImg from "../assets/images/contact/contactSwirl.svg"

const Contact = () => {
    return (
        <Layout pageName="contact">
            <Seo title="Contact" />
            <Banner width="fullwidth" pageName="contact">
                <img
                    src={backImg}
                    className="banner__overlay mobile-show "
                    alt="banner background "
                    placeholder="none"
                />
                <img
                    src={backImg}
                    className="banner__overlay mobile-hide"
                    alt="banner background "
                />

                <div className="banner__data  ">
                    <p className="banner__description banner-description">GET TO KNOW US</p>

                    <div className="c-button">
                        <Link
                            to="/company/"
                            target="_blank"
                            className="c-button__link banner__button"
                        >
                            <img src={arrow} alt="buttonImg" className="c-button__img " />
                            <span className="text-left btn-banner-cta">About us</span>
                        </Link>
                    </div>
                </div>
            </Banner>
            <Form title="Let’s talk" id="general-inquiry" formType="general-inquiry" />
            <FindUs />
        </Layout>
    )
}

export default Contact
