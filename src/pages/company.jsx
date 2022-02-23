import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NDBsection1 from "../components/technology/NDBsection1"
import OurVision from "../components/ndb-vision/OurVision"
import backImg from "../assets/images/company/companySwirl.svg"
import bannerMobile from "../assets/images/company/banner-mobile.svg"
import vision1 from "../assets/images/company/vision1.png"
import vision2 from "../assets/images/company/vision2.png"
import vision3 from "../assets/images/company/vision3.png"
import vision4 from "../assets/images/company/vision4.png"
import bulb from "../assets/images/company/vision5.png"
import vision1Mobile from "../assets/images/company/vision1Mobile.png"
import vision2Mobile from "../assets/images/company/vision2Mobile.png"
import vision3Mobile from "../assets/images/company/vision3Mobile.png"
import vision4Mobile from "../assets/images/company/vision4Mobile.png"
import arrow from "../assets/images/icons/arrow.svg"
import abstractImage from "../assets/images/sustainability/abstractColor.svg"
import leafImage from "../assets/images/sustainability/leafHorizontal.svg"
import moneyImage from "../assets/images/sustainability/money.svg"
import wireframeImage from "../assets/images/sustainability/wireframePlans.png"
import heartImage from "../assets/images/sustainability/heartHands.svg"
import playStone from "../assets/images/sustainability/playStone.svg"
import TeamMembers from "../components/ndb-vision/TeamMembers"
import NDBWrapper from "../components/wrapper"
import { Link } from "gatsby"
import { InvestorsData } from "../components/accordion/Data"
import Accordion from "../components/accordion/Accordion"

const Company = () => {
    const data1 = {
        backgoundText1: "company",
        NDBSectionTitle: "Our Company",
        paragraphOverQuote1: (
            <>
                NDB, Inc. is a Silicon Valley-based nanotechnology company established to develop
                and manufacture semiconductors, energy, and battery solutions.
            </>
        ),
        quote: (
            <>
                “NDB imagines things that others don’t. We believe in our abilities and products
                while developing solutions that are unmatched in the market.”
            </>
        ),

        quoteAuthor: "Dr. Nima Golsharifi, CEO & founder",
        paragraphOverQuote1:
            "NDB, Inc. is a Silicon Valley-based nanotechnology company established to develop and manufacture semiconductors, energy, and battery solutions.",
    }

    const data2 = {
        backgoundText1: "team",

        NDBSectionTitle: "Our Team",
        quote: "Research, invent, develop and analyze every step of the way.",
        paragraphOverQuote1: (
            <>
                This commitment to diversity makes the work environment more engaging, respectful
                and welcoming.
            </>
        ),
        paragraphOverQuote3: (
            <>
                NDB has a strong multidisciplinary team that gathers expertise from all different
                disciplines.
            </>
        ),
    }
    const data3 = {
        backgoundText1: "ndb",
        backgoundText2: "stands by",
        NDBSectionTitle: "Our Values",
        paragraphOverQuote1: (
            <>
                As a next-generation energy company, our goal is to contribute effectively to a
                better tomorrow with our success for innovation which allows us to create unmatched
                energy solutions.
            </>
        ),
    }

    const cardsMobile = [
        {
            cardTitle: "To power a sustainable future",
            cardContent: (
                <>
                    NDB’s primary goal is to give an energy solution that will be sustainable and
                    damage-free for the environment.
                </>
            ),
            cardImage: vision1,
            cardImageMobile: vision1Mobile,
        },
        {
            cardTitle: "To create a reliable alternative energy source.",
            cardContent: (
                <>
                    NDB is always looking for alternatives to create green, clean and lifelong
                    energy.
                </>
            ),
            cardImage: vision2,
            cardImageMobile: vision2Mobile,
        },
        {
            cardTitle: "To provide cost effectiveness and accessibility.",
            cardContent: (
                <>
                    The battery industry is always looking for efficient and cost-effective
                    alternatives. NDB has accepted this challenge and is working towards improving
                    this field.
                </>
            ),
            cardImage: vision3,
            cardImageMobile: vision3Mobile,
        },
        {
            cardTitle: "To repurpose the hazardous waste for a greener alternative.",
            cardContent: (
                <>
                    NDB cares about the environment and wants to help the world understand the
                    importance of disposing of waste, as it threatens future generations’ wellbeing.
                </>
            ),
            cardImage: vision4,
            cardImageMobile: vision4Mobile,
        },
    ]
    const gridItems = [
        {
            cardTitle: "Our Responsibilites",
            cardImage: heartImage,
            cardImageMobile: heartImage,
            cardContent: (
                <>
                    As an energy company, NDB is aware of its responsibilities. This applies to our
                    policies, relationships with suppliers, and effect on society in general.
                </>
            ),
        },
        {
            cardTitle: "FLEXIBILITY",
            cardImage: abstractImage,
            cardImageMobile: abstractImage,
            cardContent: (
                <>
                    We constantly adapt our innovations and technology according to the market’s
                    needs. Therefore, we aim towards providing energy to all sorts of devices and
                    mechanisms.
                </>
            ),
        },
        {
            cardTitle: "EXPERTISE",
            cardImage: wireframeImage,
            cardImageMobile: wireframeImage,
            cardContent: (
                <>
                    We continuously monitor the markets with our deep domain expertise to reduce the
                    technical risks. When required, we employ new business models to improve and
                    succeed when new innovative technologies are needed.
                </>
            ),
        },
        {
            cardTitle: "PROFITABILITY COST-EFFECTIVENESS",
            cardImage: moneyImage,
            cardImageMobile: moneyImage,
            cardContent: (
                <>
                    We ensure that the products we launch and the services we provide generate
                    revenue or exceptional benefit over their lifecycle for all our customers and
                    stakeholders involved in the process.
                </>
            ),
        },
        {
            cardTitle: "ECO-FRIENDLY ALTERNATIVES",
            cardImage: leafImage,
            cardImageMobile: leafImage,
            cardContent: (
                <>
                    We develop and manufacture highly innovative clean and green energy solutions
                    for the future by recycling thousands of tonnes worth of nuclear wastes
                    globally.
                </>
            ),
        },
        {
            cardTitle: "SOCIAL ACCOUNTABILITY",
            cardImage: playStone,
            cardImageMobile: playStone,
            cardContent: (
                <>
                    NDB is aware that we are stronger together, and we rise by lifting each other.
                    Therefore, NDB always takes society into account in every decision taken.
                </>
            ),
        },
    ]
    return (
        <Layout width="fullwidth" pageName="company">
            <Seo title="Company" />
            <Banner width="fullwidth" pageName="company">
                <img
                    src={backImg}
                    className="banner__overlay mobile-hide"
                    alt="banner background "
                />
                <img
                    src={bannerMobile}
                    className="banner__overlay mobile-show"
                    alt="banner background "
                    style={{
                        width: "100%",
                        marginTop: "-10%",
                        objectFit: "contain",
                        objectPosition: "center",
                    }}
                />

                <div className="banner__data  ">
                    <p className="banner__description banner-description">
                        UNLOCK NEW VALUE WITH NDB
                    </p>
                    <div className="c-button">
                        <Link
                            to="/careers/"
                            target="_blank"
                            className="c-button__link banner__button"
                        >
                            <img src={arrow} alt="buttonImg" className="c-button__img " />
                            <span className="text-left btn-banner-cta">Join us</span>
                        </Link>
                    </div>
                </div>
            </Banner>
            <div style={{ width: "100%", height: "50px" }}></div>
            <NDBsection1
                backgoundText1={data1.backgoundText1}
                NDBSectionTitle={data1.NDBSectionTitle}
                quote={data1.quote}
                quoteAuthor={data1.quoteAuthor}
                paragraphOverQuote1={data1.paragraphOverQuote1}
                backgoundText1Style="top left"
                style="pb-4 pt-0"
                id="our-company"
                noButton
            />
            <OurVision cards={gridItems} visionTitle="" id="about-us" cardsNoGap cardNoGap />
            <div style={{ width: "100%", height: "150px" }}></div>
            <NDBsection1
                backgoundText1={data3.backgoundText1}
                backgoundText2={data3.backgoundText2}
                NDBSectionTitle={data3.NDBSectionTitle}
                paragraphOverQuote1={data3.paragraphOverQuote1}
                backgoundText1Style="top right"
                backgoundText2Style="bottom-20 left"
                textAlign="text-center"
                margin="mb-100"
                buttonDisplay="hide"
                noButton
            />
            <Accordion accordionTitle="" data={InvestorsData} margin="mt-100" />
            <OurVision
                cards={cardsMobile}
                visionTitle="Our Vision"
                id="our-vision"
                className="mt-5"
            />

            <NDBWrapper width="fullwidth">
                <div className="bulb-section mobile-hide">
                    <img src={bulb} alt="" className="overlay top left" />
                    <p>
                        We research, invent, and develop technologies to provide greater access to a
                        cleaner and greener world.
                    </p>
                </div>
            </NDBWrapper>
            <div style={{ width: "100%", height: "150px" }}></div>
            <NDBsection1
                backgoundText1={data2.backgoundText1}
                NDBSectionTitle={data2.NDBSectionTitle}
                quote={data2.quote}
                paragraphOverQuote1={data2.paragraphOverQuote1}
                paragraphOverQuote2={data2.paragraphOverQuote2}
                paragraphOverQuote3={data2.paragraphOverQuote3}
                backgoundText1Style="top right"
                id="our-team"
            />
            <TeamMembers />
        </Layout>
    )
}

export default Company
