/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React from "react"
import { Link } from "gatsby"
import Seo from "../../components/seo"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import NDBWrapper from "../../components/wrapper"
import Container from "../../components/Container"
import arrow from "../../assets/images/icons/arrow.svg"
import OurVision from "../../components/ndb-vision/OurVision"
import { LazyLoadImage } from "react-lazy-load-image-component"
import NDBsection1 from "../../components/technology/NDBsection1"
import backImg from "../../assets/images/sustainability/banner.svg"
import bannerMobile from "../../assets/images/sustainability/banner-mobile.svg"
import { SustainPageContent } from "../../utilities/content/sustain"
import gLockProgram from "../../assets/images/sustainability/gLockProgram.png"
import theFootballAction from "../../assets/images/sustainability/theFootballAction.png"
/* -------------------------------------------------------------------------- */
/*                            Functional Component                            */
/* -------------------------------------------------------------------------- */
const Sustain = () => {
    return (
        <Layout pageName="sustainability">
            <Seo title="Sustainability" />
            <Banner width="fullwidth" pageName="sustainability">
                <img src={backImg} className="banner__overlay mobile-hide" alt="" />
                <img
                    src={bannerMobile}
                    className="banner__overlay mobile-show"
                    alt=""
                    style={{
                        width: "115%",
                        objectFit: "contain",
                        height: "auto",
                        marginRight: "-2%",
                    }}
                />
                <div className="banner__data">
                    <p className="banner__description banner-description d-sm-block d-none">
                        TO BUILD A SUSTAINABLE FUTURE
                    </p>
                    <p className="banner__description fs-18 d-block d-sm-none mb-5">
                        TO BUILD A
                        <br />
                        SUSTAINABLE
                        <br />
                        FUTURE
                    </p>
                    <div className="c-button">
                        <Link
                            to="/careers/"
                            target="_blank"
                            className="c-button__link banner__button"
                        >
                            <LazyLoadImage src={arrow} alt="" className="c-button__img " />
                            <span className="text-left btn-banner-cta">Contribute</span>
                        </Link>
                    </div>
                </div>
            </Banner>
            <NDBsection1
                backgoundText1={SustainPageContent.data1.backgoundText1}
                backgoundText2={SustainPageContent.data1.backgoundText2}
                NDBSectionTitle={SustainPageContent.data1.NDBSectionTitle}
                paragraphOverQuote1={SustainPageContent.data1.paragraphOverQuote1}
                paragraphOverQuote2={SustainPageContent.data1.paragraphOverQuote2}
                paragraphOverQuote3={SustainPageContent.data1.paragraphOverQuote3}
                quote={SustainPageContent.data1.quote}
                paragraphUnderQuote1={SustainPageContent.data1.paragraphUnderQuote1}
                backgoundText1Style="top right"
                backgoundText2Style="left middle"
                buttonTitle="Sustainability Strategy"
                buttonLink="/sustain/sustain-strategy/"
                buttonImg={arrow}
                buttonTextAlign="text-left"
                flex="flex-center"
                margin="mt-100"
                id="vision"
            />
            <div style={{ width: "100%", height: "175px" }}></div>
            <NDBsection1
                backgoundText1={SustainPageContent.data2.backgoundText1}
                backgoundText2={SustainPageContent.data2.backgoundText2}
                NDBSectionTitle={SustainPageContent.data2.NDBSectionTitle}
                paragraphOverQuote1={SustainPageContent.data2.paragraphOverQuote1}
                paragraphOverQuote2={SustainPageContent.data2.paragraphOverQuote2}
                quote={SustainPageContent.data2.quote}
                paragraphUnderQuote1={SustainPageContent.data2.paragraphUnderQuote1}
                backgoundText1Style="top right"
                backgoundText2Style="left bottom-20"
                buttonTitle="EHS Management System"
                buttonLink="/sustain/strategy-and-management/"
                buttonWidth="w-40"
                buttonImg={arrow}
                buttonTextAlign="text-left"
                flex="flex-center"
                margin="mt-100"
            />
            <OurVision
                cards={SustainPageContent.cards2Mobile}
                visionTitle="Our Commitments"
                backgoundText1="safety"
                backgoundText2="manag-"
                backgoundText1Style="top right"
                backgoundText2Style="bottom left"
                margin="mt-100"
                page="sustain"
                id="our-commitments"
                className="mobile-hide"
                buttonTitle="Climate change"
                buttonLink="/sustain/climate-change/"
                buttonImg={arrow}
                textAlign="text-left"
                flex="flex-center"
                id="climate-change"
            />
            <OurVision
                cards={SustainPageContent.cards2Mobile}
                visionTitle="Our Commitments"
                backgoundText1="safety"
                backgoundText2="manag-"
                backgoundText1Style="top right"
                backgoundText2Style="bottom left"
                className="mobile-show"
                buttonTitle="Climate change"
                buttonLink="/sustain/climate-change/"
                buttonImg={arrow}
                textAlign="text-left"
                flex="flex-center"
                id="climate-change"
            />
            <NDBsection1
                backgoundText1={SustainPageContent.data3.backgoundText1}
                backgoundText2={SustainPageContent.data3.backgoundText2}
                NDBSectionTitle={SustainPageContent.data3.NDBSectionTitle}
                paragraphOverQuote1={SustainPageContent.data3.paragraphOverQuote1}
                paragraphOverQuote2={SustainPageContent.data3.paragraphOverQuote2}
                quote={SustainPageContent.data3.quote}
                paragraphUnderQuote1={SustainPageContent.data3.paragraphUnderQuote1}
                backgoundText1Style="top right"
                backgoundText2Style="left bottom"
                buttonLink="#"
                style="pt-4 pb-4"
                className="mobile-show"
                buttonTitle="Human Rights"
                buttonLink="/sustain/human-rights/"
                buttonImg={arrow}
                buttonTextAlign="text-left"
                flex="flex-center"
                id="human-rights"
            />
            <NDBWrapper width="fullwidth">
                <p className="ndbActions">NDB positive actions</p>
                <div className="middle-grid">
                    <div className="middle-grid__item">
                        <div className="topSection">
                            <p className="content ">
                                NDB Foundation aspires to reach out to all types of communities, in
                                order to contribute to making the world a better place.
                            </p>
                            <LazyLoadImage src={gLockProgram} alt="" />
                        </div>
                        <Container>
                            <span className="title global-title-font mobile-hide">
                                Program: “Global-Local.”
                            </span>
                            <span className="title global-title-font mobile-show">
                                Program G-local
                            </span>
                            <p>
                                Our Global-Local program: think global, act local, includes
                                educational events such as webinars, workshops and geo-cultural
                                venues.
                            </p>
                            <p>
                                NDB is among the leaders of the transition towards a cleaner and
                                greener future, we inspire young generations to think and propose
                                solutions to global challenges.
                            </p>
                        </Container>
                    </div>
                    <div className="middle-grid__item">
                        <div className="topSection">
                            <p className="content ">Kick the climate change.</p>
                            <LazyLoadImage src={theFootballAction} alt="" />
                        </div>
                        <Container>
                            <span className="title global-title-font">The Action</span>
                            <p>
                                We aim to organize local tournaments to spread awareness about our
                                vision to create a carbon-net zero world.
                            </p>
                            <p>
                                The project will enable us to raise funds for those communities who
                                are in need, and improve their understanding of climate change, and
                                how to contribute to stopping it.
                            </p>
                            <p>
                                Besides the soccer tournament, NDB will organize cultural events and
                                venues showcasing innovations and organizing workshops regarding
                                climate technology.
                            </p>
                        </Container>
                    </div>
                </div>
            </NDBWrapper>
            <OurVision
                cards={SustainPageContent.gridItems}
                visionTitle="Clean energy, ecology & economy"
                page="sustain"
                cardNoGap
                cardsNoGap
            />
            <div style={{ width: "100%", height: "100px" }}></div>
            <NDBsection1
                backgoundText1={SustainPageContent.data5.backgoundText1}
                NDBSectionTitle={SustainPageContent.data5.NDBSectionTitle}
                paragraphUnderQuote1={SustainPageContent.data5.paragraphUnderQuote1}
                paragraphUnderQuote2={SustainPageContent.data5.paragraphUnderQuote2}
                paragraphUnderQuote3={SustainPageContent.data5.paragraphUnderQuote3}
                backgoundText1Style="top right"
                buttonTitle="Code of ethics"
                buttonLink="/sustain/code-of-ethics/"
                buttonImg={arrow}
                buttonTextAlign="text-left"
                flex="flex-center"
                id="code-of-conduct"
            />
            <NDBWrapper width="fullwidth">
                <div className="vision mt-100 mobile-hide">
                    <p className="vision-title  global-title-font" id="help">
                        How can the Code help you?
                    </p>
                    <div className="ndb-vision">
                        {SustainPageContent.cards1.map((card, index) => {
                            const alternatingColors = ["#ffffff"]
                            const { cardTitle, cardImage, cardContent } = card
                            return (
                                <div className={`ndb-vision__card `} key={index}>
                                    <img
                                        src={cardImage}
                                        className="card-image overlay"
                                        alt="card"
                                    />
                                    {cardTitle !== "" && <p className="card-title">{cardTitle}</p>}

                                    <p
                                        className="card-content-custom m-20"
                                        style={{ color: alternatingColors[0] }}
                                    >
                                        {cardContent}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="vision vision-mobile mt-100 mobile-show">
                    <p className="vision-title global-title-font" id="help">
                        How can the Code help you?
                    </p>
                    <div className="ndb-vision">
                        {SustainPageContent.cards1Mobile.map((card, index) => {
                            const alternatingColors = ["#ffffff", "#000000"]
                            const { cardTitle, cardImage, cardContent } = card
                            return (
                                <div className={`ndb-vision__card `} key={index}>
                                    <img
                                        src={cardImage}
                                        className="card-image overlay"
                                        alt="card"
                                    />
                                    {cardTitle !== "" && <p className="card-title">{cardTitle}</p>}

                                    <p
                                        className="card-content-custom m-20"
                                        style={{ color: alternatingColors[index % 3] }}
                                    >
                                        {cardContent}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </NDBWrapper>
            <NDBsection1
                backgoundText1={SustainPageContent.data6.backgoundText1}
                NDBSectionTitle={SustainPageContent.data6.NDBSectionTitle}
                paragraphUnderQuote1={SustainPageContent.data6.paragraphUnderQuote1}
                paragraphUnderQuote2={SustainPageContent.data6.paragraphUnderQuote2}
                backgoundText1Style="top right"
                style="pt-4"
                id="integrity-standard"
            />
            <NDBsection1
                backgoundText1={SustainPageContent.data7.backgoundText1}
                NDBSectionTitle={SustainPageContent.data7.NDBSectionTitle}
                paragraphUnderQuote1={SustainPageContent.data7.paragraphUnderQuote1}
                backgoundText1Style="top left"
                buttonTitle="Compliance Report"
                buttonLink="/sustain/responsible-sourcing/"
                buttonImg={arrow}
                buttonTextAlign="text-left"
                flex="flex-center"
                style="mb-100"
                id="compliance-guidelines"
            />
        </Layout>
    )
}
export default Sustain
