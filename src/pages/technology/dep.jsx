import React from "react"
import { Link } from "gatsby"
import Seo from "../../components/seo"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import arrow from "../../assets/images/icons/arrow.svg"
import banner from "../../assets/images/technology/dep/banner.svg"
import EnergyRow from "../../components/technology/dep/energy-row"
import Features from "../../components/technology/dep/features"
import EnergyDistribution from "../../components/technology/dep/energy-distribution"
import Circle from "../../components/technology/dep/circle"
import ForEveryone from "../../components/technology/dep/for-everyone"
import Tabs from "../../components/dep--tabs/"
import VoltBlockchain from "../../components/technology/dep/volt-blockchain"
import DepAnimatingTitleSection from "../../components/technology/dep/dep-animating-title-section"

const DEP = () => {
    return (
        <Layout pageName="sustain-strategy">
            <Seo title="Sustainability Strategy" />
            <Banner width="fullwidth" pageName="sustain-strategy">
                <img src={banner} className="banner__overlay" alt="banner background " />
                <div className="banner__data">
                    <div className="c-button">
                        <h2 className="banner__heading" style={{ paddingBottom: "54px" }}>
                            DEP
                        </h2>
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
            <DepAnimatingTitleSection />
            <ForEveryone />
            <EnergyDistribution />
            <Circle />
            <VoltBlockchain />
            <EnergyRow />
            <Features />
        </Layout>
    )
}
export default DEP
