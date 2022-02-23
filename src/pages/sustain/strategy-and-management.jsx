import React from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import NDBWrapper from "../../components/wrapper"
import imageUnderBanner from "../../assets/images/sustainability/ehs-strategy/image-under-banner.svg"
import imageLeft from "../../assets/images/sustainability/ehs-strategy/image-left.svg"
import imageRight from "../../assets/images/sustainability/ehs-strategy/image-right.svg"
import backImg from "../../assets/images/sustainability/subPage.png"
import arrow from "../../assets/images/icons/arrow.svg"
import img1 from "../../assets/images/sustainability/ehs-strategy/iaea.svg"
import img2 from "../../assets/images/sustainability/ehs-strategy/iso9001.svg"
import img3 from "../../assets/images/sustainability/ehs-strategy/IEC.svg"
import img4 from "../../assets/images/sustainability/ehs-strategy/ansi.svg"
import { Link } from "gatsby"

const StrategyAndManagement = () => {
  const contentUnderImagesGrid = [
    {
      content: (
        <p>
          To establish and improve our objectives, we will continuously evaluate
          our performance, applying the appropriate corrections to achieve our
          goals, and setting up verification, auditing and control processes to
          ensure compliance with the objectives.
        </p>
      ),
    },
    {
      content: (
        <p>
          Accordingly, our EH&S audit system has a very broad scope,
          encompassing, for instance, work and facility safety, environment,
          safety audit on suppliers, and emergency response system.
        </p>
      ),
    },
    {
      content: (
        <p>
          Taking into due account the industrial accidents that have occurred
          over the years (e.g. in India), we will conduct random emergency
          audits to improve our emergency response system.
        </p>
      ),
    },
    {
      content: (
        <p>
          We adopt strengthened EH&S standards to address the issues and risks
          identified. We also conduct assessment meetings supervised by the CEO
          to review, for example, the progress of emergency audits, any unsafe
          processes, and evaluate our EH&S standards.
        </p>
      ),
    },
    {
      content: (
        <p>
          In addition, we build and maintain communication channels with
          stakeholders and work with local communities and wider society in
          order to improve our business activities.
        </p>
      ),
    },
  ]
  const certImages = [
    { content: img1 },
    { content: img2 },
    { content: img3 },
    { content: img4 },
  ]
  const bottomContent = [
    {
      content: (
        <p>
          Compliance with international regulations and standards is necessary
          so that our activities comply with all necessary laws and avoid
          illegal practices. Our EH&S management will be in line with
          standardized management systems and will meet the required safety
          provisions.
        </p>
      ),
    },
    {
      content: (
        <p>
          On this issue, NDB will comply with the International Atomic Energy
          Agency (IAEA), the International Organization for Standardization
          (ISO), the International Electrotechnical Commission (IEC) or national
          institutions such as the American Nuclear Standards Institute (ANSI),
          the German Nuclear Safety Standards Commission (“Kerntechnischer
          Ausschuß, KTA”) or the “Association Française de Normalisation AFNOR”
          in France.
        </p>
      ),
    },
  ]
  const cards = [
    {
      content: (
        <p>
          Ensuring <strong>compliance</strong> with all EH&S requirements and
          best practices. We will <strong>monitor, review and adapt</strong> to
          any national and international regulatory developments, including new
          or amended laws and constantly
          <strong>evaluate</strong> legal compliance across our business
          activities.
        </p>
      ),
      imagePos: "top-left",
    },
    {
      content: (
        <p>
          Providing a <strong>safe and healthy</strong> work environment and
          facilities, implementing preventive measures, and establishing
          internal standards that go over and above the{" "}
          <strong>minimum legal requirements</strong> which will help employees
          to have clear mental and physical state while working.
        </p>
      ),
      imagePos: "top-right",
    },
    {
      content: (
        <p>
          Driving continuous <strong>innovation</strong> throughout the
          product’s life cycle and making efficient use of resources to deliver
          sustainable and
          <strong>environmentally</strong> sound solutions.
        </p>
      ),
      imagePos: "bottom-left",
    },
    {
      content: (
        <p>
          Being <strong>active</strong> in the improvement of the EH&S practices
          and communicating our EH&S policies and programs with{" "}
          <strong>stakeholders and communities.</strong>
        </p>
      ),
      imagePos: "bottom-right",
    },
  ]

  return (
    <Layout pageName="ehs-strategy">
      <Seo title="EH&S" />
      <Banner width="fullwidth" pageName="human-rights">
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
      <NDBWrapper>
        <div>
          <p className="sectionTitle">EH&S Strategy and Management System</p>
          <p>
            Environment, Health & Safety (EH&S) is a top management priority for
            NDB and for enhancing our competitive advantage across the globe.
          </p>
        </div>
      </NDBWrapper>
      <NDBWrapper width="fullwidth">
        <div className="imgUnderBanner">
          <img src={imageUnderBanner} alt="Image Under Banner" />
          <span>Environment, Health and Safety</span>
        </div>
      </NDBWrapper>

      <NDBWrapper>
        <div className="infoSection">
          <p>
            In order to continue improving on EH&S performance, NDB is committed
            to implementing the <strong>following principles:</strong>
          </p>
        </div>
      </NDBWrapper>

      <NDBWrapper>
        <div className="middleGrid">
          {cards.map(({ content, imagePos }) => (
            <div className={`middleGrid__item ${imagePos}`}>{content}</div>
          ))}
        </div>
      </NDBWrapper>

      <NDBWrapper width="fullwidth">
        <div className="gridSection">
          <section>
            <div className="infoSection">
              <p>
                NDB aims to carry out all kinds of activities taking into
                account the health of people, and the safety and protection of
                the environment.
              </p>
              <p>
                In order to achieve this, it will carry out actions and health,
                safety, and environmental protection programmes, as part of its
                EH&S management, in line with its values and principles.
              </p>
              <p>
                We will always be responsible for implementing the management
                system and achieving results.
              </p>
              <p>
                Moreover, NDB promotes a culture of health, safety,
                environmental protection, and an integrated management through
                risk analysis, transparency and trust in reporting, continuous
                learning and innovation.
              </p>
            </div>
            <div className="imageSection">
              <img src={imageRight} alt="right" />
              <span>MANAGEMENT AND CULTURE</span>
            </div>
          </section>
          <section>
            <div className="imageSection">
              <img src={imageLeft} alt="left" />
              <span>SAFETY</span>
            </div>
            <div className="infoSection">
              <p>
                The safety of our workers is essential and that is why we
                provide them with all kinds of facilities so that they can
                obtain the necessary skills and competences.
              </p>
              <p>
                In addition, during the activity cycle, we take the necessary
                measures to prevent damage to people and assets as well as
                reduce the impact of our operations on the environment.
              </p>
              <p>
                As part of improving and managing a safety culture, we will
                include continuous engagement and training of our employees,
                internal awareness activities and promotion of good practices in
                all our operations.
              </p>
              <p>
                Our training plans and courses will be customized based on
                criteria such as the position and duties of employees.
              </p>
            </div>
          </section>
        </div>
      </NDBWrapper>
      <NDBWrapper>
        {" "}
        <div className="info mx-200">
          {contentUnderImagesGrid.map(({ content }) => (
            <>{content}</>
          ))}
        </div>
        <br /><br />
      </NDBWrapper>
      <NDBWrapper>
        <div className="certGrid">
          {certImages.map(({ content }) => (
            <img src={content} className="certGrid__item" alt="certification" />
          ))}
        </div>
        <div className="bottomContent">
          {bottomContent.map(({ content }) => (
            <>{content}</>
          ))}
        </div>
      </NDBWrapper>
    </Layout>
  )
}
export default StrategyAndManagement
