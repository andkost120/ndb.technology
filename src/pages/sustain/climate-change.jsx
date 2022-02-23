import React from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import NDBWrapper from "../../components/wrapper"
import imageUnderBanner from "../../assets/images/sustainability/climate-change/image-under-banner.svg"
import imageLeft from "../../assets/images/sustainability/climate-change/image-left.svg"
import imageLeftMobile from "../../assets/images/sustainability/climate-change/image-leftMobile.svg"
import imageLeftLarge from "../../assets/images/sustainability/climate-change/image-leftLarge.svg"
import backImg from "../../assets/images/sustainability/subPage.png"
import arrow from "../../assets/images/icons/arrow.svg"
import img1 from "../../assets/images/sustainability/climate-change/recycle.svg"
import img2 from "../../assets/images/sustainability/climate-change/law.svg"
import img3 from "../../assets/images/sustainability/climate-change/tree.svg"
import img4 from "../../assets/images/sustainability/climate-change/users.svg"
import bottomSwirl from "../../assets/images/sustainability/climate-change/bottomSwirl.svg"
import { Link } from "gatsby"
import BioSection from "../../components/careers/BioSection"

const ClimateChange = () => {
  const certImages = [
    {
      image: img1,
      content:
        "Recycle and reuse waste to produce energy.",
    },
    {
      image: img2,
      content:
        "Comply with all compatible standards and applicable environmental regulations.",
    },
    {
      image: img3,
      content:
        "Establish vital objectives and strategies to accomplish the reduction of adverse environmental impacts.",
    },
    {
      image: img4,
      content:
        "Commitment to engage with stakeholders, customers, and other communities to help in reducing environmental footprint.",
    },
  ]
  const cards = [
    {
      content: (
        <>
          <p>
            We believe that our responsibility is to implement innovations that improve living standards while being sustainable and environmentally friendly.
          </p>
          <p>
            Our missions include: Producing sustainable and environmentally sound products, giving clean solutions for the recycling of radioactive waste, and developing recycling options for our waste materials.
          </p>
        </>
      ),
      imagePos: "top-left",
    },
    {
      content: (
        <p>
          As we believe in the coexistence of innovation and the environment, our multi-purpose energy solutions aim to positively impact the environment and remove thousands of tons of nuclear waste globally.
        </p>
      ),
      imagePos: "top-right",
    },
  ]
  const infoSectionConent = [
    {
      content: (
        <p>
          We supply the globally growing energy demand by proposing lifelong and clean energy solutions for numerous applications, such as automotive, consumer electronics, sensors, space machinery, and other electronics.
        </p>
      ),
    },
    {
      content: (
        <p>
          Due to the near-infinite scope of applications, we would apply our vision to various fields. We are planning to be part of the large global battery market.
        </p>
      ),
    },
    {
      content: (
        <p>
          We will make extensive use of <strong>renewable energy</strong> and reduce carbon emission levels and greenhouse gases.
        </p>
      ),
    },
    {
      content: (
        <p>
          NDB’s technology has the{" "}
          <strong>potential to replace energy sources</strong> such as gasoline and lithium-ion batteries, reducing their negative environmental impacts caused by emission and toxic metal waste products, respectively.
        </p>
      ),
    },
    {
      content: (
        <p>
          We will do everything in our power to fight against climate change and contribute to{" "}
          <strong>sustainable development,</strong>.
        </p>
      ),
    },
    {
      content: (
        <p>We promote environmentally responsible behaviors, protect the Earth and its ecosystem.</p>
      ),
    },
  ]
  const bioSectionContent = [
    {
      number: "1",
      title: "REGULAR REPORTING",
      content: "Measure and report greenhouse gas emissions regularly.",
    },
    {
      number: "2",
      title: "CARBON ELIMINATION",
      content:
        "Implement decarbonization strategies in line with the Paris agreement through business change and innovations, including efficiency improvements, waste reduction, and other carbon emission elimination strategies.",
    },
    {
      number: "3",
      title: "CREDIBLE OFFSETS",
      content:
        "To neutralize any remaining emissions with additional, quantifiable, tangible, permanent, and socially beneficial offsets to achieve net-zero annual carbon emissions by 2030.",
    },
  ]

  return (
    <Layout pageName="climate-change ">
      <Seo title="Climate Change" />
      <Banner width="fullwidth" pageName="climate-change">
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
          <p className="sectionTitle">Climate Change Response</p>
          <p>
            NDB makes a great effort to reduce energy consumption and greenhouse gas emissions in the manufacturing processes and participate in climate change prevention policies.
          </p>
        </div>
      </NDBWrapper>
      <NDBWrapper width="fullwidth">
        <div className="imgUnderBanner">
          <img src={imageUnderBanner} alt="Image Under Banner" />
          <span>MISSION AND VISION</span>
        </div>
      </NDBWrapper>

      <NDBWrapper>
        <div className="middleGrid">
          {cards.map(({ content, imagePos }) => (
            <div className={`middleGrid__item ${imagePos}`}>{content}</div>
          ))}
        </div>
      </NDBWrapper>
      <NDBWrapper>
        <p className="certGridTitle text-center w-100">Core tasks</p>
        <div className="certGrid">
          {certImages.map(({ image, content }) => (
            <div className="certGrid__item">
              <img src={image} alt="certification" />
              <p>{content}</p>
            </div>
          ))}
        </div>
      </NDBWrapper>

      <NDBWrapper width="fullwidth">
        <div className="gridSection">
          <section>
            <div className="imageSection">
              <img
                src={imageLeft}
                className=" mobile-hide xlarge-hide"
                alt="left"
              />
              <img src={imageLeftMobile} className="mobile-show " alt="left" />
              <img
                src={imageLeftLarge}
                className="mobile-hide tv-show "
                alt="left"
              />

              <span>SCOPE</span>
            </div>
            <div className="infoSection">
              {infoSectionConent.map(({ content }) => (
                <>{content}</>
              ))}
            </div>
          </section>
        </div>
      </NDBWrapper>
      <NDBWrapper>
        <div className="overBioSection">
          <p className="title">Positive Actions and Future Plans</p>
          <p>
            NDB is one of the <b>Climate Pledge™</b> signatories - which calls upon companies and organizations to reach the objective of being zero net carbon by 2040, 10 years ahead of the Paris Climate Accord.
          </p>
          <p>
            As a signatory of the Pledge,{" "}
            <b>NDB would commit to three principal areas of action:</b>
          </p>
        </div>
      </NDBWrapper>

      <BioSection bioSectionContent={bioSectionContent} />

      <NDBWrapper width="fullwidth">
        <img src={bottomSwirl} className="bottomSwirl" alt="Bottom swirl" />
      </NDBWrapper>
    </Layout>
  )
}
export default ClimateChange