import React from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import NDBsection1 from "../../components/technology/NDBsection1"
import BioSection from "../../components/careers/BioSection"
import OrganicTabs from "../../components/organic-tabs/OrganicTabs"
import backImg from "../../assets/images/careers/careerSwirl2.svg"
import bannerMobile from "../../assets/images/careers/banner-mobile.svg"
import arrow from "../../assets/images/icons/arrow.svg"
import arrowWhite from "../../assets/images/icons/arrowReadMore.svg"
import vision1 from "../../assets/images/careers/vision1.png"
import vision2 from "../../assets/images/careers/vision2.png"
import vision3 from "../../assets/images/careers/vision3.png"
import vision4 from "../../assets/images/careers/vision4.png"
import vision1Mobile from "../../assets/images/careers/vision1Mobile.png"
import vision2Mobile from "../../assets/images/careers/vision2Mobile.png"
import vision3Mobile from "../../assets/images/careers/vision3Mobile.png"
import vision4Mobile from "../../assets/images/careers/vision4Mobile.png"
import Exp1 from "../../assets/images/careers/Exp1.png"
import Exp2 from "../../assets/images/careers/Exp2.png"
import Exp3 from "../../assets/images/careers/Exp3.png"
import NDBWrapper from "../../components/wrapper"
import { graphql, Link, useStaticQuery } from "gatsby"
import OurVision from "../../components/ndb-vision/OurVision"
import Interns from "../../components/interns/Interns"
import OrganicTabs2Accordion from "../../components/accordion/OrganicTabs2Accordion"

const Careers = () => {
    const careers = useStaticQuery(graphql`
        {
            tabs: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/careers/organic-tabs/" } }
                sort: { fields: frontmatter___newsImage___base }
            ) {
                totalCount
                nodes {
                    id
                    html
                    frontmatter {
                        title
                        slug
                        newsImage {
                            publicURL
                        }
                    }
                }
            }
            interns: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/intern/" }, frontmatter: {} }
                sort: { fields: frontmatter___orderId, order: ASC }
            ) {
                totalCount
                nodes {
                    id
                    html
                    frontmatter {
                        orderId
                        name
                        title
                        abbreviation
                        number
                        ndbImage {
                            publicURL
                        }
                    }
                }
            }
        }
    `)

    const data1 = {
        backgoundText1: "career",
        NDBSectionTitle: "Why Working at NDB is the occasion that you can’t miss.",
        quote: "Bring your passion, your talent and drive innovation across the globe.",
        paragraphUnderQuote1: (
            <>
                We think that working at NDB will be one of the highlights of your life, something
                to be proud to share.
            </>
        ),
        paragraphUnderQuote2: (
            <>
                NDB offers career opportunities as it favors skill development in the energy sector.
                We encourage and reward effort and commitment as it benefits the entire team and the
                future of the company.
            </>
        ),
        paragraphUnderQuote3: (
            <>
                Talent is the key, and this is what we are recruiting. Embrace the unique and
                immersive culture inside our company and carry our values.
            </>
        ),
        paragraphUnderQuote4: (
            <>
                Thanks to the diversity and hard work, we can achieve exceptional productivity,
                quality, creativity, and innovation for the company, and its partners.
            </>
        ),
    }
    const data2 = {
        backgoundText1: "early",
        backgoundText2: "careers",
        NDBSectionTitle: "INTERNSHIP / APPRENTICESHIP",
        paragraphUnderQuote1:
            "Are you a university student or trying to start your career? NDB is always looking for talented personalities. Find new opportunities and challenge yourself with NDB. We will guide you through it all.",
    }
    const cardsMobile = [
        {
            cardTitle: "Opportunity",
            cardContent: (
                <>
                    <p>“Opening doors (to success)”</p>
                    <p>“Sail the wave of success with NDB”</p>
                    <p>Enhance your skills and academic knowledge.</p>
                </>
            ),
            cardImageMobile: vision1Mobile,
            cardImage: vision1,
        },
        {
            cardTitle: "Responsibility",
            cardContent: (
                <>
                    <p>“Sharpen your skills” </p>
                    <p>“Your ideas matter”</p>
                    <p>Get involved in various NDB projects since day one.</p>
                </>
            ),
            cardImageMobile: vision2Mobile,
            cardImage: vision2,
        },
        {
            cardTitle: "Culture",
            cardContent: (
                <>
                    <p>“Our strength lies in our differences”</p>
                    <p>
                        We are working alongside a diverse group of people to revolutionize the
                        technology industry.
                    </p>
                </>
            ),
            cardImageMobile: vision3Mobile,
            cardImage: vision3,
        },
        {
            cardTitle: "Create strong connections",
            cardContent: (
                <>
                    <p>
                        With NDB, you will not only sharpen your hard skills but your soft skills as
                        well. NDB cares about the harmony between the different teams and organizes
                        events to create closer links between its employees.
                    </p>
                </>
            ),
            cardImageMobile: vision4Mobile,
            cardImage: vision4,
        },
    ]
    const bioSectionContent = [
        {
            number: "1",
            title: "MASSIVE PROJECT",
            content:
                "Take part in building the future: We will be proud of and work closely with engineers, lawyers, marketers, designers, developers to realize and deploy massive projects that affect our daily lives and the future.",
        },
        {
            number: "2",
            title: "EXCEPTIONAL PEOPLE",
            content:
                "We work hard, dream big, and come from all corners of the world. Join our international team, 30 nationalities from 5 continents, 15 languages spoken, and even more.",
        },
        {
            number: "3",
            title: "CHANGE THE WORLD",
            content:
                "NDB produces energy solutions that will revolutionize the world! Be part of that change.",
        },
    ]

    return (
        <Layout pageName="careers">
            <Seo title="Careers" />
            <Banner pageName="careers" width="fullwidth">
                <img
                    src={backImg}
                    className="banner__overlay mobile-hide img-fluid"
                    alt="banner background "
                />
                <img
                    src={bannerMobile}
                    className="banner__overlay mobile-show"
                    alt="banner background"
                    placeholder="none"
                    style={{ width: "100%", objectFit: "contain", marginBottom: "40px" }}
                />

                <div className="banner__data ">
                    <p className="banner__description careers-banner fs-18 d-sm-block d-none">
                        OUR UNITY IS OUR STRENGTH, AND OUR DIVERSITY IS OUR POWER
                    </p>
                    <p className="banner__description careers-banner fs-18 d-sm-none d-block">
                        OUR UNITY IS OUR STRENGTH,
                        <br />
                        AND OUR DIVERSITY IS OUR POWER
                    </p>

                    <div className="c-button">
                        <Link
                            to="/company/"
                            target="_blank"
                            className="c-button__link banner__button"
                        >
                            <img src={arrow} alt="buttonImg" className="c-button__img " />
                            <span className="c-button__name text-left fs-18">About us</span>
                        </Link>
                    </div>
                </div>
            </Banner>

            <NDBsection1
                backgoundText1={data1.backgoundText1}
                buttonLink="#"
                NDBSectionTitle={data1.NDBSectionTitle}
                quote={data1.quote}
                paragraphUnderQuote1={data1.paragraphUnderQuote1}
                paragraphUnderQuote2={data1.paragraphUnderQuote2}
                paragraphUnderQuote3={data1.paragraphUnderQuote3}
                paragraphUnderQuote4={data1.paragraphUnderQuote4}
                backgoundText1Style="right top"
                id="why-work-in-ndb"
            />
            <BioSection bioSectionContent={bioSectionContent} />
            <OrganicTabs
                dataQuery={careers.tabs}
                width="fullwidth"
                pageName="Join our dynamic team"
                buttonsName="Departments"
                buttonLink="/"
                buttonTitle="Apply now"
                buttonImg={arrowWhite}
                textAlign="text-left"
                buttonTextOrder="order-2"
                flex="flex-left"
                margin="mb-2"
                buttonColor="text-white "
                id="join-us"
                style="mobile-hide"
            />
            <OrganicTabs2Accordion
                accordionTitle="Join us"
                data={careers.tabs}
                margin="mt-100"
                style="mobile-show"
            />
            <NDBsection1
                backgoundText1={data2.backgoundText1}
                backgoundText2={data2.backgoundText2}
                NDBSectionTitle={data2.NDBSectionTitle}
                paragraphUnderQuote1={data2.paragraphUnderQuote1}
                backgoundText1Style="top right"
                backgoundText2Style="bottom-20  left"
                buttonLink="/careers/internships/"
                buttonTitle="Apply now"
                buttonImg={arrow}
                buttonTextAlign="text-left"
                flex="flex-center"
                style="mb-100"
                id="internship"
            />
            <NDBWrapper width="fullwidth">
                <div className="experience-grid">
                    <div className="experience-item">
                        <p>Explore different career paths </p>
                        <img src={Exp1} className="" alt="Experience item" />
                    </div>

                    <div className="experience-item">
                        <p>Gain work experience </p>
                        <img src={Exp2} className="" alt="Experience item" />
                    </div>

                    <div className="experience-item mobile-hide">
                        <p>Make connections that will help you launch your career</p>
                        <img src={Exp3} className="" alt="Experience item" />
                    </div>
                    <div className="mobile-show mobileItemShow">
                        <div className="experience-item ">
                            <p>Make connections </p>
                            <img src={Exp3} className="" alt="Experience item" />
                        </div>
                    </div>
                </div>
            </NDBWrapper>
            <OurVision cards={cardsMobile} />
            <Interns data={careers.interns} title="Our intern stories" />
        </Layout>
    )
}

export default Careers
