import React from "react"
import Accordion from "../components/accordion/Accordion"
import { poilicyData } from "../components/news/Data"
import backImg from "../assets/images/news/pressKitSwirl.svg"
import backImgMobile from "../assets/images/news/pressKitSwirlMobile.png"
import arrow from "../assets/images/icons/arrow.svg"
import Seo from "../components/seo"
import Banner from "../components/Banner"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Policy = () => {
  const accordionDescription = (
    <>
      NDB respects the privacy of visitors to its site. This privacy policy is
      intended to protect an individual’s privacy. It explains what type of
      information we collect from our users on this site and in the course of
      our relationship, what we do with that information, and how users can
      update and control the use of information provided on this site. This
      policy may change from time to time so please check it frequently.
    </>
  )
  return (
    <Layout pageName="policy">
      <Seo title="Policy Page" />

      <Banner width="fullwidth" pageName="policy" style="mb-100">
        <img
          src={backImgMobile}
          className="banner__overlay mobile-show "
          alt="banner background "
          placeholder="none"
        />
        <img
          src={backImg}
          className="banner__overlay mobile-hide"
          alt="banner background "
          placeholder="none"
        />
        <div className="banner__data">
          <div className="c-button">
            <Link to="/news/" className="c-button__link banner__button">
              <img src={arrow} alt="888" />
              <span>News</span>
            </Link>
          </div>
        </div>
      </Banner>

      <Accordion
        accordionTitle="PRIVACY POLICY"
        accordionDescription={accordionDescription}
        data={poilicyData}
        margin="mt-100"
        style={"mb-100 mt-100"}
        width="fullwidth"
      />
    </Layout>
  )
}

export default Policy
