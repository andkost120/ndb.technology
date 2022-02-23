import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NDBWrapper from "../components/wrapper"
import logo from "../assets/images/logo.svg"
import backImg from "../assets/images/homepage/homeSwirl3.svg"
import Navbar from "../components/navbar"
import {
    technology1,
    technology2,
    technology3,
    company1,
    sustain1,
    sustain2,
    contact1,
    career1,
} from "../components/sitemap/SitemapData"

const Sitemap = () => {
    return (
        <Layout pageName="sitemap">
            <Seo title="Sitemap" />
            <NDBWrapper width="fullwidth">
                <div className="home__banner">
                    <div className="banner__left">
                        <Link to="/">
                            <img src={logo} alt="site icon" placeholder="none" />
                        </Link>{" "}
                        <img
                            src={backImg}
                            className="banner__overlay"
                            style={{
                                position: "absolute",
                                left: "5%",
                                bottom: 0,
                                top: "auto",
                                width: "auto",
                                height: "auto",
                            }}
                            alt="banner background "
                            placeholder="none"
                        />
                        <span className="overlay2 pt-4">Website</span>
                        <p className="banner__description home__banner-desc">Sitemap</p>
                        <Link to="#" className="banner__button">
                            <Link to="#"></Link>
                        </Link>
                    </div>
                    <Navbar />
                </div>
            </NDBWrapper>
            <NDBWrapper width="fullwidth">
                <div className="sections">
                    <section>
                        <Link to="/technology" className="sections__title">
                            Technology
                        </Link>
                        <div className="sections__content">
                            <ul>
                                {technology1.map(({ title, slug }, index) => (
                                    <li key={index}>
                                        <Link to={slug} target="_blank">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul>
                                {technology2.map(({ title, slug }, index) => (
                                    <li key={index}>
                                        <Link to={slug} target="_blank">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                                <Link to="/technology/#ndb-vs" className="bold-title">
                                    NDB vs Standard battries
                                </Link>
                            </ul>
                            <ul>
                                {technology3.map(({ title, slug }, index) => (
                                    <li key={index}>
                                        <Link to={slug} target="_blank">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <Link to="/company/" className="sections__title">
                            CoMpany
                        </Link>
                        <div className="sections__content">
                            <ul>
                                {company1.map(({ title, slug }, index) => (
                                    <li key={index}>
                                        <Link to={slug} target="_blank">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <Link to="/sustain/" className="sections__title">
                            Sustainability
                        </Link>
                        <div className="sections__content">
                            <ul>
                                {sustain1.map(({ title, slug }, index) => (
                                    <li key={index}>
                                        <Link to={slug} target="_blank">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <ul>
                                {sustain2.map(({ title, slug }, index) => (
                                    <li key={index}>
                                        <Link to={slug} target="_blank">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <Link to="/contact/" className="sections__title">
                            Contact Us
                        </Link>
                        <div className="sections__content">
                            <ul>
                                {contact1.map(({ title, slug }, index) => (
                                    <li key={index}>
                                        <Link to={slug} target="_blank">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <Link to="/careers/" className="sections__title">
                            Career
                        </Link>
                        <div className="sections__content">
                            <ul>
                                {career1.map(({ title, slug }, index) => (
                                    <li key={index}>
                                        <Link to={slug} target="_blank">
                                            {title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <Link to="/news/" className="sections__title">
                            News
                        </Link>
                    </section>
                    <section>
                        <Link to="/news/press-kit" className="sections__title">
                            Press kit
                        </Link>
                    </section>
                </div>
            </NDBWrapper>
        </Layout>
    )
}

export default Sitemap
