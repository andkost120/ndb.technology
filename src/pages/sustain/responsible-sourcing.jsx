import React from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import NDBWrapper from "../../components/wrapper"
import imageUnderBanner from "../../assets/images/sustainability/responsible-sourcing/image-under-banner.svg"
import imageOverAccordion from "../../assets/images/sustainability/responsible-sourcing/imageOverAccordion.svg"
import imageLeft from "../../assets/images/sustainability/responsible-sourcing/image-left.svg"
import imageLeftMobile from "../../assets/images/sustainability/responsible-sourcing/image-leftMobile.svg"
import imageLeftLarge from "../../assets/images/sustainability/responsible-sourcing/image-leftLarge.svg"
import backImg from "../../assets/images/sustainability/subPage.png"
import arrow from "../../assets/images/icons/arrow.svg"
import cardImage from "../../assets/images/sustainability/responsible-sourcing/cardImageMobile.svg"
import { Link } from "gatsby"
import Accordion from "../../components/accordion/Accordion"

const ResponsibleSourcing = () => {
    const infoSectionConent = [
        {
            content: (
                <p>
                    To sustain this transparent and responsible supply chain, NDB works on a
                    reliable system to prevent and minimize the direct or indirect impacts caused by
                    any of the R&D and production stages or beyond.
                </p>
            ),
        },
        {
            content: (
                <p>
                    Our system includes continuous engagement and training of our employees,
                    internal awareness activities, and promoting good practices in all our
                    operations where NDB has substantial influence.
                </p>
            ),
        },
        {
            content: (
                <p>
                    Since sustainability cannot be achieved as a stand-alone goal, NDB collaborates
                    with other participants. We are committed to engaging with partners,
                    stakeholders, customers, and other communities to fulfill our commitments.
                </p>
            ),
        },
        {
            content: (
                <p>
                    NDB expects its suppliers to comply with its Responsible Sourcing Policy. NDB
                    uses reasonable efforts to seek this commitment from its suppliers by
                    integration of the Responsible Supply-chain Policy and the Supplier Code of
                    Conduct into its supplier agreements or through all reasonable efforts.
                </p>
            ),
        },
    ]
    const overAccordionData = [
        {
            content: (
                <p>
                    DB recognizes that risks of significant adverse impacts may be associated with
                    extracting, trading, handling, and exporting materials.
                </p>
            ),
        },

        {
            content: (
                <p>
                    As a downstream actor in the materials supply chain, we recognize that our
                    company is responsible for respecting human rights and not contributing to
                    conflict.{" "}
                </p>
            ),
        },

        {
            content: (
                <p>We commit to making reasonable efforts to implement the following policies.</p>
            ),
        },
        {
            content: (
                <p>
                    <strong>
                        NDB notifies its suppliers that it expects them to abide by its Responsible
                        Sourcing Policy.
                    </strong>{" "}
                    NDB reserves the right to make any change to this Responsible Supply-chain
                    Policy at any time within its sole and absolute discretion.
                </p>
            ),
        },
    ]
    const accordionData = [
        {
            title:
                "Serious abuses associated with the extraction, transport, or trade of materials.",
            content: (
                <>
                    <p>
                        If sourcing from conflict-affected and high-risk areas, NDB will not
                        knowingly, neither tolerate nor by any means profit from, contribute to,
                        assist with, or facilitate the commission by any party of:
                    </p>
                    <ul>
                        <li>Any forms of torture, cruel, inhuman, and degrading treatment</li>
                        <li>
                            Any forms of forced or compulsory labor, which means work or service
                            which is exacted from any person under the menace of penalty and for
                            which said person has not offered themselves voluntarily
                        </li>
                        <li>Any forms of child labor, as outlined in ILO Convention No. 182</li>
                        <li>
                            Any human rights violations and abuses such as widespread sexual
                            violence
                        </li>
                        <li>War crimes or other violations of international humanitarian law</li>
                        <li>Crimes against humanity or genocide</li>
                    </ul>
                    <p>
                        Suppose NDB identifies a risk associated with upstream suppliers. In that
                        case, it will enforce its Responsible Supply-chain Policy and any
                        contractual provisions through a series of escalating risk mitigation
                        measures.{" "}
                    </p>
                    <p>
                        NDB supports suppliers to implement a risk management plan. Such measures
                        may range from engagement with the supplier to positively influence the
                        sourcing issue. In case it is necessary, NDB will suspend or discontinue
                        engagement with such a supplier.
                    </p>
                </>
            ),
        },
        {
            title: "Direct or indirect support to non-state armed groups.",
            content: (
                <>
                    <p>
                        We will not knowingly tolerate any direct or indirect support to non-state
                        armed groups.
                    </p>
                    <p>
                        Where NDB identifies a reasonable risk that upstream suppliers are sourcing
                        from, or linked to, any party providing support to non-state armed groups,
                        it will enforce its Responsible Supply-chain Policy..{" "}
                    </p>
                </>
            ),
        },
        {
            title: "Public or private security forces.",
            content: (
                <>
                    <p>
                        NDB agrees to eliminate direct or indirect support to public or private
                        security forces.
                    </p>
                    <p>
                        Where NDB identifies a reasonable risk of direct or indirect support to
                        public or private security forces in the supply chain, it will enforce the
                        Responsible Supply-chain Policy.{" "}
                    </p>
                </>
            ),
        },
        {
            title: "Bribery and fraudulent misrepresentation of the origin of minerals.",
            content: (
                <>
                    <p>
                        We will not knowingly offer, promise, give or demand any bribes, and will
                        resist the solicitation of bribes to conceal or disguise the origin of
                        minerals, to misrepresent taxes, fees, and royalties paid to governments as
                        defined in the OECD Convention on Combating Bribery of Foreign Public
                        Officials in International Business Transactions (1997) and the United
                        Nations Convention Against Corruption (2004)).
                    </p>
                    <p>
                        Where NDB identifies a reasonable risk of a supplier engaging in bribery or
                        fraudulent misrepresentation, it will enforce the Responsible Supply-chain
                        Policy.
                    </p>
                </>
            ),
        },
        {
            title: "Money Laundering.",
            content: (
                <>
                    <p>
                        NDB will support efforts to contribute to the effective elimination of money
                        laundering.
                    </p>
                    <p>
                        Where NDB identifies a reasonable risk of money laundering, it will enforce
                        the Responsible Supply-chain Policy.
                    </p>
                </>
            ),
        },
    ]

    return (
        <Layout pageName="responsible-sourcing">
            <Seo title="Responsible Sourcing" />
            <Banner width="fullwidth" pageName="responsible-sourcing">
                <img
                    src={backImg}
                    className="banner__overlay mobile-hide"
                    alt="banner background "
                />
                <img
                    src={backImg}
                    className="banner__overlay mobile-show"
                    alt="banner background "
                    style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
                <div className="banner__data  ">
                    <div className="c-button">
                        <Link to="/" target="_blank" className="c-button__link banner__button">
                            <img src={arrow} alt="buttonImg" className="c-button__img " />
                            <span className="c-button__name text-left">Home</span>
                        </Link>
                    </div>
                </div>
            </Banner>
            <NDBWrapper>
                <div>
                    <p className="sectionTitle">Responsible sourcing</p>
                    <p className="px-4">
                        As a responsible corporation, NDB is committed to protecting human rights
                        and the environment.
                    </p>
                </div>
            </NDBWrapper>
            <NDBWrapper width="fullwidth">
                <div className="imgUnderBanner">
                    <img src={imageUnderBanner} alt="Image Under Banner" />
                    <span>SUPPLY CHAIN POLICY</span>
                </div>
            </NDBWrapper>
            <NDBWrapper>
                <div className="infoSection px-4">
                    <p>
                        We aspire to build environmentally friendly products and implement
                        environmental stewardship into all parts of our operations.
                    </p>
                    <p>
                        Alongside opportunities, we foresee certain risks that we must care about,
                        such as the welfare of people and the protection of the environment.
                    </p>
                    <p>
                        Therefore, NDB strives to implement a responsible and transparent supply
                        chain. NDB complies with all applicable national and international laws and
                        regulations, including the International Labour Organization (ILO) and the
                        UN Global Compact (UNGC) principles industry standards.
                    </p>
                </div>
            </NDBWrapper>
            <NDBWrapper>
                <div className="middleGrid">
                    <div className="middleGrid__item top-left">
                        <div className="middleGrid__content ">
                            <p>
                                NDB implements its responsible sourcing policy and conforms to the
                                OECD due diligence guidance for responsible supply chains of
                                minerals from conflict-affected and high-risk areas, enabling us to
                                ensure our commitment to an accountable and transparent supply
                                chain.
                            </p>
                            <p>
                                According to the OECD guidance, NDB will implement a due diligence
                                process to comply with its responsible sourcing policy.
                            </p>
                        </div>
                        <div className="middleGrid__image">
                            <img src={cardImage} alt="card grid" />
                        </div>
                    </div>
                </div>
            </NDBWrapper>

            <NDBWrapper width="fullwidth">
                <div className="gridSection">
                    <section>
                        <div className="infoSection">
                            {infoSectionConent.map(({ content }) => (
                                <>{content}</>
                            ))}
                        </div>
                        <div className="imageSection">
                            <img src={imageLeft} className=" mobile-hide xlarge-hide" alt="left" />
                            <img src={imageLeftMobile} className="mobile-show " alt="left" />
                            <img src={imageLeftLarge} className="mobile-hide tv-show " alt="left" />
                        </div>
                    </section>
                </div>
            </NDBWrapper>
            <NDBWrapper width="fullwidth">
                <div className="imgUnderBanner">
                    <img src={imageOverAccordion} alt="Image Under Banner" />
                    <div className="content">
                        <span>SUPPLY CHAIN POLICY</span>
                        <p>
                            If you have any questions about compliance issues related to responsible
                            sourcing, please{" "}
                            <strong>
                                <a href="https://ndb.technology/contact/">contact us.</a>
                            </strong>
                        </p>
                    </div>
                </div>
            </NDBWrapper>

            <NDBWrapper width="fullwidth">
                <div className="overAccordionSection">
                    <p className="title">Responsible supply chain policy</p>
                    <div className="px-4">
                        {overAccordionData.map(({ content }) => (
                            <>{content}</>
                        ))}
                    </div>
                </div>
            </NDBWrapper>
            <Accordion accordionTitle="" data={accordionData} />
        </Layout>
    )
}
export default ResponsibleSourcing
