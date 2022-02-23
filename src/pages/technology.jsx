import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import OrganicTabs from "../components/organic-tabs/OrganicTabs"
import NDBsection1 from "../components/technology/NDBsection1"
import NDBsafetyStrategy from "../components/technology/NDBsafetyStrategy"
import NDBdifference from "../components/technology/NDBdifference"
import backImg from "../assets/images/technology/bulbBlack.svg"
import bannerMobile from "../assets/images/technology/banner-mobile.svg"
import arrow from "../assets/images/icons/arrowWhite.svg"
import sectionPapper from "../assets/images/technology/cell1.svg"
import { graphql, Link, useStaticQuery } from "gatsby"
import Accordion from "../components/accordion/Accordion"
import { contactData2, ndbSafetyStrategy } from "../components/accordion/Data"
import OrganicTabs2Accordion from "../components/accordion/OrganicTabs2Accordion"
import { TechnologyPageContent } from "../utilities/content/technology"
import Tabs from "../components/dep--tabs/"
import TechnologyAnimatingTitleSection from "../components/technology/technology-animating-title-section"

const Technology = () => {
    const data = useStaticQuery(graphql`
        {
            technology: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/technology/organic-tabs/" } }
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
            tabs: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/technology/tabs-imageless/" } }
                sort: { fields: frontmatter___slug }
            ) {
                totalCount
                nodes {
                    id
                    html
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    `)

    return (
        <Layout pageName="technology" darkTheme="dark-footer">
            <Seo title="Technology" />
            <Banner width="fullwidth" pageName="technology" darkTheme>
                <img
                    src={backImg}
                    className="banner__overlay z-1 img-fluid technology-page-banner mobile-hide"
                    alt="banner background"
                />
                <img
                    src={bannerMobile}
                    className="banner__overlay z-1 img-fluid technology-page-banner mobile-show"
                    alt="banner background"
                    style={{
                        width: "100%",
                    }}
                />
                <div className="banner__data z-999">
                    <div className="c-button">
                        <h2 className="banner__heading mb-54-px banner-description text-uppercase">
                            ndb cell
                        </h2>
                        <Link
                            to="/contact/"
                            target="_blank"
                            className="c-button__link banner__button"
                        >
                            <img src={arrow} alt="buttonImg" className="c-button__img " />
                            <span className="c-button__name text-left font-weight-normal btn-banner-cta">
                                Contact
                            </span>
                        </Link>
                    </div>
                </div>
            </Banner>
            <Tabs darkMode />
            <div className="mt-5"></div>

            <TechnologyAnimatingTitleSection />

            <NDBsection1
                backgoundText1={TechnologyPageContent.data3.backgoundText1}
                backgoundText2={TechnologyPageContent.data3.backgoundText2}
                NDBSectionTitle={TechnologyPageContent.data3.NDBSectionTitle}
                paragraphUnderQuote1={TechnologyPageContent.data3.paragraphUnderQuote1}
                paragraphUnderQuote2={TechnologyPageContent.data3.paragraphUnderQuote2}
                paragraphUnderQuote3={TechnologyPageContent.data3.paragraphUnderQuote3}
                paragraphUnderQuote4={TechnologyPageContent.data3.paragraphUnderQuote4}
                paragraphUnderQuote5={TechnologyPageContent.data3.paragraphUnderQuote5}
                backgoundText1Style="top left"
                backgoundText2Style="middle-4 right"
                mobile=""
            />

            {/* Mobile Section */}
            <OrganicTabs2Accordion
                accordionTitle="Applications"
                data={data.technology}
                margin="mt-100"
                style={"mobile-show"}
                darkTheme={true}
            />
            {/* Hide on mobile */}
            <OrganicTabs
                dataQuery={data.technology}
                width="fullwidth"
                buttonsName="Applications"
                link="Contact us"
                margin="mb-2"
                id="application"
                style={"mobile-hide"}
            />
            {/* Mobile Section */}
            <NDBsection1
                backgoundText1={TechnologyPageContent.data2Mobile.backgoundText1}
                NDBSectionTitle={TechnologyPageContent.data2Mobile.NDBSectionTitle}
                paragraphUnderQuote1={TechnologyPageContent.data2Mobile.paragraphUnderQuote1}
                paragraphUnderQuote2={TechnologyPageContent.data2Mobile.paragraphUnderQuote2}
                paragraphUnderQuote3={TechnologyPageContent.data2Mobile.paragraphUnderQuote3}
                backgoundText1Style="top right"
                sectionPapperOverText={sectionPapper}
                style={"mobile-show"}
            />
            {/* Hide on mobile */}
            <NDBsection1
                backgoundText1={TechnologyPageContent.data2.backgoundText1}
                backgoundText2={TechnologyPageContent.data2.backgoundText2}
                NDBSectionTitle={TechnologyPageContent.data2.NDBSectionTitle}
                paragraphUnderQuote1={TechnologyPageContent.data2.paragraphUnderQuote1}
                paragraphUnderQuote2={TechnologyPageContent.data2.paragraphUnderQuote2}
                paragraphUnderQuote3={TechnologyPageContent.data2.paragraphUnderQuote3}
                backgoundText1Style="top right"
                backgoundText2Style="middle-4 left"
                sectionPapperOverText={sectionPapper}
                style={"mobile-hide"}
            />

            {/* Hide on mobile */}
            <OrganicTabs
                dataQuery={data.tabs}
                width="fullwidth"
                link="Contact us"
                noImage
                style={"mobile-hide"}
            />
            {/* Mobile Section */}
            <OrganicTabs2Accordion data={data.tabs} style={"mobile-show"} darkTheme={true} />

            <Accordion
                accordionTitle="NDB Safety Strategy"
                data={ndbSafetyStrategy}
                style={"pt-100 pb-100"}
                darkTheme="true"
                mobile="mobile-show"
            />
            <NDBdifference width="fullwidth" marginBottom id="ndb-vs" />

            {/* Hide on mobile */}
            <NDBsafetyStrategy id="safety-strategy" style={"mobile-hide"} />
            <Accordion
                accordionTitle="Learn more about us FAQ"
                data={contactData2}
                style={"pb-100"}
                darkTheme="true"
            />
        </Layout>
    )
}

export default Technology
