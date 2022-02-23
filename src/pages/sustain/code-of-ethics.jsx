import React from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import NDBWrapper from "../../components/wrapper"
import imageUnderBanner from "../../assets/images/sustainability/code-of-ethics/image-under-banner.svg"
import imageOverAccordion from "../../assets/images/sustainability/code-of-ethics/imageOverAccordion.svg"
import backImg from "../../assets/images/sustainability/subPage.png"
import arrow from "../../assets/images/icons/arrow.svg"
import { Link } from "gatsby"
import Accordion from "../../components/accordion/Accordion"

const CodeOfEthics = () => {
    const cards = [
        {
            content: (
                <>
                    <p>
                        Suppliers are expected to make their best effort to avoid all materials
                        sourced through any illegal and unethical means.
                    </p>
                    <p>
                        More specifically, suppliers shall establish and maintain a policy to verify
                        and inform NDB whether the materials are from conflict-affected or high-risk
                        areas.
                    </p>
                    <p>
                        The origin of the materials shall be disclosed at NDB’s request if it
                        considers there is a possibility that human rights violations have been
                        involved.
                    </p>
                </>
            ),
            imagePos: "top-left",
        },
        {
            content: (
                <>
                    <p>
                        Suppliers shall incorporate an OECD for Responsible Supply Chains of
                        materials from Conflict-Affected and High-Risk Areas{" "}
                        <strong>five-step framework:</strong>
                    </p>
                    <ul>
                        <li>Establish strong company management systems</li>
                        <li>Identify and assess risk in the supply chain</li>
                        <li>Design and implement a strategy for identified risks</li>
                        <li>
                            Carry out an independent third-party audit of supply chain due diligence
                            at identified points in the supply chain
                        </li>
                        <li>Report on supply chain due diligence</li>
                    </ul>
                </>
            ),
            imagePos: "top-right",
        },
    ]

    const overAccordionData = [
        {
            content: (
                <p>
                    NDB, will implement <strong>a five-steps due diligence</strong> process to
                    ensure the respect of its Responsible Sourcing Policy.
                </p>
            ),
        },
    ]
    const humanRightsAccordion = [
        {
            title: "Prohibition of forced labor",
            content: (
                <>
                    <p>
                        Suppliers shall not force labor on workers against their will. At the
                        recruitment stage, suppliers shall enter into a written labor contract
                        drafted in a language that orkers understand and provide them with a copy.
                    </p>
                    <p>
                        Suppliers shall not require Workers to pay recruiting fees. In case
                        suppliers are recruiting foreign workers, workers shall maintain possession
                        of their identity or immigration documents unless such holdings are required
                        by law.{" "}
                    </p>
                    <p>
                        Suppliers shall not prevent or hinder Workers from resigning when they
                        desire and shall not unreasonably limit workers’ freedom of movement.
                    </p>
                </>
            ),
        },
        {
            title: "Prohibition of child labor and management of juvenile workers",
            content: (
                <>
                    <p>
                        Suppliers shall not recourse to child labor. ‘Child’ refers to a person
                        under the minimum legal age for employment where the work is performed,
                        provided the legal age is consistent with the minimum working ages defined
                        by the ILO.
                    </p>
                    <p>
                        Suppliers shall ensure that workers under the age of 18 neither perform
                        works that are likely to compromise their health and safety nor be required
                        to work overtime or at night.
                    </p>
                </>
            ),
        },
        {
            title: "Prohibition of excessive overtime",
            content: (
                <>
                    <p>
                        Total working hours per week shall not exceed the local law standards or 60
                        hours, whichever is the lowest. Suppliers shall allow workers at least one
                        day off for every seven days.
                    </p>
                </>
            ),
        },
        {
            title: "Wages and welfare",
            content: (
                <>
                    <p>
                        Suppliers shall pay wages for regular working hours over the statutory
                        minimum wage, and an additional premium for overtime/night work as defined
                        by local law.
                    </p>
                    <p>
                        Workers shall be provided with a wage statement for each pay period that
                        includes sufficient information to verify accurate compensation for work
                        performed. Wage deduction is not allowed as a disciplinary action. Suppliers
                        shall faithfully pay Workers' social insurance premiums.{" "}
                    </p>
                </>
            ),
        },
        {
            title: "Humane treatment",
            content: (
                <>
                    <p>
                        Suppliers shall respect workers’ human rights. Suppliers shall ensure that
                        workers are provided with an employment environment free from physical,
                        sexual, psychological, verbal harassment, and other abusive conduct or
                        inhumane treatment. To this end, suppliers shall clearly stipulate
                        disciplinary procedures, implement and communicate them to workers.
                    </p>
                </>
            ),
        },
        {
            title: "Prohibition of discrimination",
            content: (
                <>
                    <p>
                        Suppliers shall neither discriminate against workers nor jobseekers on race,
                        skin color, age, gender, sexual orientation, gender identity and expression,
                        ethnic origin, disability, pregnancy, religion, political orientation, labor
                        union membership, nationality, or marital nationality status.
                    </p>
                    <p>
                        Suppliers cannot require health examination for factors that may be used to
                        discriminate, for example, pregnancy. Suppliers shall provide Workers with
                        reasonable accommodation for religious practices upon request.
                    </p>
                </>
            ),
        },
        {
            title: "Guaranteeing the freedom of association",
            content: (
                <>
                    <p>
                        According to local laws, suppliers shall respect workers' rights to
                        organize, join unions or associations, engage in collective bargaining and
                        peaceful assembly.
                    </p>
                    <p>
                        Workers or representatives shall share their opinions on working conditions
                        and management policies without fear of discrimination, retaliation, or
                        threats.
                    </p>
                </>
            ),
        },
    ]
    const workingEnvironmentAccordion = [
        {
            title: "Health and Safety",
            content: (
                <>
                    <p>
                        Suppliers shall actively assess and manage risks, protect the health and
                        safety of their employees or any person that can be affected by their
                        activities, and protect the environment.
                    </p>
                    <p>
                        To do so, suppliers shall comply with all applicable laws and regulations
                        and implement safe processes. Reasonable steps should be taken to ensure the
                        safety of pregnant women.
                    </p>
                    <p>
                        Suppliers shall provide health and safety training for all workers in a
                        language they can understand. Health and safety-related information shall be
                        posted in the facility or placed in a location accessible by workers.
                        Training is provided to all workers before the beginning of work and
                        regularly after that.{" "}
                    </p>
                </>
            ),
        },
        {
            title: "Emergency preparedness",
            content: (
                <>
                    <p>
                        Suppliers shall identify emergencies that are likely to occur and
                        accordingly establish response plans. Suppliers shall ensure that it is
                        possible to constantly open emergency exits outward and maintain evacuation
                        capabilities by conducting regular evacuation drills.{" "}
                    </p>
                </>
            ),
        },
        {
            title: "Managing industrial hygiene",
            content: (
                <>
                    <p>
                        Suppliers shall identify workers' exposure to chemical, biological and
                        physical agents. Suppliers shall provide workers with appropriate and
                        well-maintained personal protective equipment and inform them about the
                        risks of exposure to such agents.
                    </p>
                </>
            ),
        },
        {
            title: "Managing physically demanding work",
            content: (
                <>
                    <p>
                        Suppliers shall make their best effort to improve physically demanding
                        tasks.
                    </p>
                </>
            ),
        },
        {
            title: "Machine safeguarding",
            content: (
                <>
                    <p>
                        Suppliers shall conduct safety inspections of all machinery, keep its
                        records per local laws, and provide safety devices.
                    </p>
                </>
            ),
        },
    ]
    const ethicsAccordion = [
        {
            title: "Prohibition of corrupt and illegal practices, conflict of interest",
            content: (
                <>
                    <p>
                        Suppliers are prohibited from engaging in corrupt or illegal practices, such
                        as but not limited to receiving bribes, including presents and embezzlement,
                        illicit payments, fraud, and deception. Suppliers shall also raise any
                        concern about a potential conflict of interest to NDB.
                    </p>
                </>
            ),
        },
        {
            title: "Protection of intellectual property rights",
            content: (
                <>
                    <p>
                        Suppliers shall respect all intellectual property rights such as patents,
                        copyrights, and trademarks. Suppliers should also protect such rights when
                        transferring technology/know-how. Suppliers shall preserve all information
                        belonging to NDB.
                    </p>
                </>
            ),
        },
        {
            title: "Direct or indirect support to non-state armed groups.Personal information",
            content: (
                <>
                    <p>
                        Suppliers shall protect the personal information of all interested parties,
                        including suppliers, clients, consumers, and employees. Suppliers shall also
                        comply with personal information protection/information security laws when
                        collecting, storing, processing, transmitting, and sharing personal
                        information.
                    </p>
                </>
            ),
        },
    ]
    const managementAccordion = [
        {
            title: "Compliance with the Supplier Code of Conduct",
            content: (
                <>
                    <p>
                        Suppliers shall understand the Supplier Code of Conduct and carry out
                        regular compliance checks. Suppliers shall identify non-conformities and
                        take measures accordingly to ensure compliance, such as management and
                        report or improvement plans.
                    </p>
                </>
            ),
        },
        {
            title: "Documentation and records",
            content: (
                <>
                    <p>
                        Suppliers shall manage relevant documents and records under applicable laws
                        and internal document management standards.
                    </p>
                </>
            ),
        },
        {
            title: "Suppliers' responsibilities",
            content: (
                <>
                    <p>
                        Suppliers shall deliver this Supplier Code of Conduct to their suppliers and
                        require them to comply with it, as well as monitor their compliance.
                    </p>
                </>
            ),
        },
    ]
    const dueDilligenceAccordion = [
        {
            title: "Establish a strong company management system",
            content: (
                <>
                    <ul>
                        <li>
                            Adopt and communicate to suppliers, business partners, and the public
                            the Responsible Sourcing Policy and the need for the responsible supply
                            chain management.
                        </li>
                        <li>
                            Structure internal management to support supply chain due diligence.
                        </li>
                        <li>
                            Establish a system of controls and transparency over the supply chain,
                            which includes a chain of custody or a traceability system or the
                            identification of upstream actors in the supply chain.{" "}
                        </li>
                        <li>
                            Strengthen the engagement with suppliers by incorporating the
                            Responsible Sourcing Policy into contracts or agreements with suppliers.
                        </li>
                        <li>
                            Establish a company-level grievance mechanism as an early-warning
                            risk-awareness system.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: "Protection of intellectual property rights",
            content: (
                <>
                    <p>
                        Suppliers shall respect all intellectual property rights such as, but not
                        limited to, patents, copyrights, and trademarks. Suppliers shall protect
                        such rights when transferring technology/know-how. Suppliers shall preserve
                        all information belonging to NDB.
                    </p>
                </>
            ),
        },
        {
            title: "Identify and assess risk in the supply chain",
            content: (
                <>
                    <ul>
                        <li>
                            Identify risks in the supply chain as recommended by the OECD and
                            conduct audits to manage risks related to labor, human rights,
                            environment, health and safety, compliance, and ethics.
                        </li>
                        <li>
                            Assess risks of adverse impacts in light of the standards of its
                            Responsible Sourcing Policy.{" "}
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title:
                "Design and implement a strategy to respond to identified risks and assess risk in the supply chain",
            content: (
                <>
                    <ul>
                        <li>
                            Report findings of the supply chain risk assessment to the designated
                            senior management of the company.
                        </li>
                        <li>
                            Devise and adopt a risk management plan, as well as devise a strategy
                            for risk management by either continuing trade throughout the course of
                            measurable risk mitigation efforts, temporarily suspending trade while
                            pursuing ongoing measurable risk mitigation, or disengaging with a
                            supplier after failed attempts at mitigation or where a company deems
                            risk mitigation not feasible or unacceptable.
                        </li>
                        <li>
                            Implement the risk management plan, monitor and track performance of
                            risk mitigation efforts, and report back to designated senior
                            management.
                        </li>
                        <li>
                            Undertake additional fact and risk assessments for risks requiring
                            mitigation or after a change of circumstances.{" "}
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title:
                "Carry out an independent third-party audit of supply chain due diligence at identified points in the supply chain ",
            content: (
                <>
                    <p>Have due diligence practices audited by independent third parties.</p>
                </>
            ),
        },
        {
            title: "Report on supply chain due diligence ",
            content: (
                <>
                    <p>Publicly report on the supply chain due diligence policies and practices.</p>
                </>
            ),
        },
    ]

    return (
        <Layout pageName="code-of-conduct">
            <Seo title="Code Of Ethics" />
            <Banner width="fullwidth" pageName="code-of-conduct">
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
                    <p className="sectionTitle">Supplier code of conduct</p>
                    <p className="px-4">
                        NDB requires from its Suppliers the implementation of this Supplier Code of
                        Conduct to ensure the respect of human rights and dignity in a safe working
                        environment for their employees (“workers”), the respect of the environment,
                        and the promotion of an inclusive and ethical business culture, per the
                        International Labour Organisation (ILO) conventions.
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
                <div className="infoSection">
                    <p className="px-4">
                        Suppliers shall comply with applicable laws and regulations of countries in
                        which operations are managed or services provided. Trade Suppliers shall
                        comply with all applicable international trade laws concerning any raw
                        materials, parts, products, and services delivered to NDB, in particular
                        those relating to radioisotopes and radioactive materials such as the
                        International Atomic Energy Agency or Nuclear Regulatory Commission
                        requirements and guidelines regarding the manufacture, production,
                        acquisition, use, storage transfer, and transportation of the sources
                        containing sealed radioactive materials and by-product materials. Moreover,
                        NDB controls public exposures and maintains constant surveillance of
                        licensed material not in storage and secure stored licensed material from
                        unauthorized access, removal, or use.
                    </p>
                </div>
            </NDBWrapper>
            <Accordion accordionTitle="Human Rights" data={humanRightsAccordion} />
            <Accordion accordionTitle="Working environment" data={workingEnvironmentAccordion} />
            <Accordion accordionTitle="Ethics" data={ethicsAccordion} />
            <Accordion accordionTitle="Management System" data={managementAccordion} />

            <NDBWrapper>
                <>
                    <p className="middleGrid-title">Specific requirements for materials </p>
                    <div className="middleGrid">
                        {cards.map(({ content, imagePos }) => (
                            <div className={`middleGrid__item ${imagePos}`}>{content}</div>
                        ))}
                    </div>
                </>
            </NDBWrapper>

            <NDBWrapper width="fullwidth">
                <div className="imgUnderBanner">
                    <img src={imageOverAccordion} alt="Image Under Banner" />
                    <div className="content">
                        <span>CHANGES TO POLICY</span>
                        <p>
                            NDB reserves the right to make any change to this Code at any time
                            within its sole and absolute discretion; suppliers will be notified on
                            NDB’s website.
                        </p>
                    </div>
                </div>
            </NDBWrapper>

            <NDBWrapper width="fullwidth">
                <div className="overAccordionSection">
                    <p className="title">Due Diligence process</p>
                    {overAccordionData.map(({ content }) => (
                        <>{content}</>
                    ))}
                </div>
            </NDBWrapper>
            <Accordion accordionTitle="" data={dueDilligenceAccordion} style="mb-100" />
        </Layout>
    )
}
export default CodeOfEthics
