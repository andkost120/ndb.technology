import React from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import backImg from "../../assets/images/sustainability/subPage.png"
import arrow from "../../assets/images/icons/arrow.svg"
import { Link } from "gatsby"
import Seo from "../../components/seo"
import NDBWrapper from "../../components/wrapper"
import imageUnderBanner from "../../assets/images/sustainability/human-rights/image-under-banner.svg"
import imageLeft from "../../assets/images/sustainability/human-rights/image-left.svg"
import imageRight from "../../assets/images/sustainability/human-rights/image-right.svg"

const HumanRights = () => (
    <Layout pageName="human-rights">
        <Seo title="Human Rights" />
        <Banner width="fullwidth" pageName="human-rights">
            <img src={backImg} className="banner__overlay mobile-hide" alt="banner background " />
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
                <p className="sectionTitle">Human Rights</p>
                <div className="px-4">
                    <p>
                        Respect for human rights is one of our priorities, ensuring that people are
                        respected in all our business activities.
                    </p>
                    <p>
                        We align with and respect human rights and follow the Universal Declaration
                        of Human Rights, the United Nations Guiding Principles, the International
                        Bill of Human Rights, the OECD guidelines for multinational enterprises, and
                        the International Labor Organization Declaration.
                    </p>
                </div>
            </div>
        </NDBWrapper>
        <NDBWrapper width="fullwidth">
            <div className="imgUnderBanner">
                <img src={imageUnderBanner} alt="Image Under Banner" />
                <span>HUMAN RIGHTS AND EQUITY</span>
            </div>
        </NDBWrapper>

        <NDBWrapper>
            <div className="infoSection px-4">
                <p>
                    Additionally, we strive to ensure that our business activities do not negatively
                    impact human rights. We carry out periodic monitoring actions to guarantee that
                    the NDB guidelines are being followed.
                </p>
                <p>
                    Before undertaking or starting a new business activity, we identify and assess
                    the potential impacts on human rights to diagnose any possible economic,
                    technical, social, ethical, and environmental risks, followed by drawing up
                    improvements under the highest standards of integrity and compliance with the
                    applicable laws.
                </p>
            </div>
        </NDBWrapper>

        <NDBWrapper width="fullwidth">
            <div className="gridSection">
                <section>
                    <div className="imageSection">
                        <img src={imageLeft} alt="left" />
                        <span>PRINCIPLES</span>
                    </div>
                    <div className="infoSection">
                        <p>
                            If a supplier or contractor fails to comply with our principles, they
                            will not be authorized to participate in our business activities.
                        </p>
                        <p>
                            The domains of the risk assessment indicators include the human rights
                            management system, respecting dignity, prohibition of all forms of
                            modern slavery, freedom of association, and collective bargaining.
                        </p>
                        <p>
                            Any practices that threaten human rights are excluded from our business
                            and supply chain. Likewise, we have channels for reporting incidents
                            such as communication processes, inquiries, complaints, and reparations
                            available to the people affected by our activities in the appropriate
                            languages.
                        </p>
                    </div>
                </section>
                <section>
                    <div className="infoSection">
                        <p>
                            Being trained plays a crucial role in respect for human rights. Training
                            our employees is a way to avoid and prevent arbitrary or discriminatory
                            behavior that results in physical or moral violence against people.
                        </p>
                        <p>
                            We train by teaching the constitutional principles that support the rule
                            of law, the importance of each individual complying with their
                            responsibilities, & regulations on different aspects of society.
                        </p>
                        <p>
                            NDB has a substantial influence on promoting good practices following
                            all the necessary steps mentioned in our CODE of Conduct and Business
                            Ethics.
                        </p>
                    </div>
                    <div className="imageSection">
                        <img src={imageRight} alt="right" />
                        <span>TRAINING</span>
                    </div>
                </section>
            </div>
        </NDBWrapper>
        <NDBWrapper>
            <div className="infoSection px-4">
                <p>
                    NDB respects the diversity of our employees and fights against inequality
                    through the protection of human rights.
                </p>
                <p>
                    We promote an internal culture of respect for human rights. We also foster a
                    continuous dialogue that creates an environment of trust so that individuals can
                    express themselves.
                </p>
                <p>
                    We establish solid and long-lasting relationships with communities based on
                    trust, mutual respect, and shared values.
                </p>
                <p>
                    We implement our environmental, social, security, and health guidelines
                    alongside our partners in different countries.
                </p>
            </div>
        </NDBWrapper>
    </Layout>
)
export default HumanRights
