import React from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import backImg from "../../assets/images/sustainability/subPage.png"
import arrow from "../../assets/images/icons/arrow.svg"
import { graphql, Link, useStaticQuery } from "gatsby"
import Seo from "../../components/seo"
import NDBWrapper from "../../components/wrapper"
import Container from "../../components/Container"
import vision1 from "../../assets/images/sustainability/sustainability-strategy/grid1.png"
import vision2 from "../../assets/images/sustainability/sustainability-strategy/grid2.png"
import vision3 from "../../assets/images/sustainability/sustainability-strategy/grid3.png"
import vision4 from "../../assets/images/sustainability/sustainability-strategy/grid4.png"
import Interns from "../../components/interns/Interns"
import OurVision from "../../components/ndb-vision/OurVision"

const SustainabilityStrategy = () => {
  const data = useStaticQuery(graphql`
    {
      pillars: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/sustainability/" }
          frontmatter: {}
        }
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

  const bottomSectionContent = [
    <p>
      Furthermore, Sustainable Procurement plays a key role in the development
      of our operations, as can be seen in our Responsible Sourcing and
      Responsible Supply-chain policies. We maintain the highest standards in
      our relationships with our suppliers, in terms of quality policy and
      purchasing strategy. We take into account the specific risks that are
      currently linked to certain materials, in line with the OECD Due Diligence
      Guidance.
    </p>,
    <p>
      The company’s activities are transparent in material handling, safety and
      radiation protection. We collaborate with suppliers that adhere to
      sustainable practices and we will foster trust in our suppliers by
      providing transparent transaction procedures. We believe that through
      sustainable procurement, we can motivate other suppliers to improve the
      environmental and social impact in their own production process and,
      therefore, actively contribute to sustainable development.
    </p>,
    <p>
      Lastly, as part of monitoring and enhancing our sustainability
      performance, a Sustainability Committee will be established, which will be
      supervised by the CEO. It will be the highest sustainability decision
      making body within the organization, that audits and evaluates the current
      status of sustainable management.
    </p>,

    <p>
      The Committee will be responsible for improving the integration of
      sustainability measures across the company and will provide guidance and
      supervision for the fulfilment of its sustainability obligations related
      to the economy, environment, society and future plans.
    </p>,
    <p>
      It will provide reports, recommendations, and will establish policies
      about sustainability matters in a transparent manner that fits our
      governance structure and supports our vision. The Committee will resolve
      any primary sustainability issues and aim to mitigate any risks that can
      occur as part of its business activities. It will also engage in
      discussions through, for example, meetings, and workshops about
      introducing new measures or improving existing ones in order to ensure its
      sustainability goals. It is our mission to make continuous improvements to
      our sustainability strategy, meet our goals and bring value to the
      environment, economy, and society
    </p>,
  ]
  const cardsMobile = [
    {
      cardTitle: "",
      cardContent: (
        <>
          <p>To power a sustainable future</p>
        </>
      ),
      cardImageMobile: vision1,
      cardImage: vision1,
    },
    {
      cardTitle: "",
      cardContent: (
        <>
          <p>To create reliable alternative energy sources</p>
        </>
      ),
      cardImageMobile: vision2,
      cardImage: vision2,
    },
    {
      cardTitle: "",
      cardContent: (
        <>
          <p>To provide cost-effectiveness and accessibility</p>
        </>
      ),
      cardImageMobile: vision3,
      cardImage: vision3,
    },
    {
      cardTitle: "",
      cardContent: (
        <>
          <p>To repurpose hazardous waste for a cleaner alternative</p>
        </>
      ),
      cardImageMobile: vision4,
      cardImage: vision4,
    },
  ]

  return (
    <Layout pageName="sustain-strategy">
      <Seo title="Sustainability Strategy" />
      <Banner width="fullwidth" pageName="sustain-strategy">
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
            <Link
              to="/"
              target="_blank"
              className="c-button__link banner__button"
            >
              <img src={arrow} alt="buttonImg" className="c-button__img " />
              <span className="c-button__name text-left">Home</span>
            </Link>
          </div>
        </div>
      </Banner>
      <Container>
        <div>
          <p className="sectionTitle ">Sustainability Strategy</p>
          <p>
            At NDB, we attempt to create a sustainable business where innovation
            and the environment would coexist.
          </p>
          <p>
            Our goal is to contribute to sustainable development, encourage
            environmentally responsible behavior and protect the ecosystem by
            delivering innovative, sustainable, safe, and
            environmentally-friendly solutions.
          </p>
          <p></p>
        </div>
        <div>
          <p className="section-bold">
            We endeavor to create social, environmental, economic values,
            implement a sustainable supply chain within our partners/suppliers,
            and effectively contribute to a global society.
          </p>
        </div>
      </Container>
      <div className="gridCards text--uppercase ">
        <OurVision cards={cardsMobile} />
      </div>
      <div className="gridCards mt-0">
        <div className="item">
          <p>
            To achieve our vision, we have established a sustainable strategy to
            preemptively respond to associated issues, foster growing confidence
            in our operations, and enhance our global competitiveness.
          </p>
          <p>
            As part of our sustainable strategy, NDB will align with the United
            Nations' sustainable development goals to resolve critical issues,
            including poverty, protecting the planet, and ensuring prosperity.
          </p>
          <p>
            Considering our operations' direct and indirect impacts, we focus on
            the goals most relevant to our organization. We will engage in a
            variety of sustainability activities and responsible production
            practices.
          </p>
        </div>
        <div className="item">
          <p>
            NDB promotes eco-friendly energy to build sustainable cities and
            ecosystems and combat climate change cost-effective and universally
            accessible.
          </p>
          <p>
            It manages effects on sustainable development by enhancing the
            innovative partnership with various stakeholders.
          </p>
          <p>
            The company strictly prohibits discrimination, respects employees'
            diversity, and fights against inequality through the protection of
            human rights.
          </p>
          <p>
            Our goal is to broaden the scope of sustainable development
            activities with an active mindset and explore business opportunities
            to reach the UN goals.
          </p>
        </div>
      </div>
      <Interns data={data.pillars} titlePosition="pl-3 text-left" title="Sustainability framework pillars" />
      <NDBWrapper>
        <div className="mt-100 mx-200">
          {bottomSectionContent.map(item => (
            <>{item}</>
          ))}
        </div>
      </NDBWrapper>
    </Layout>
  )
}
export default SustainabilityStrategy
