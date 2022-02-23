import React from "react"
import arrow from "../assets/images/icons/arrow.svg"
import Seo from "../components/seo"
import Banner from "../components/Banner"
import Layout from "../components/layout"
import { Link } from "gatsby"
import NDBWrapper from "../components/wrapper"
import { StaticImage } from "gatsby-plugin-image"

const Terms = () => {
  const termsData = {
    NDBSectionTitle: "TERMS OF USE",
    paragraphUnderQuote1: (
      <>
        This Site ndb.technology, including any of its sub-domains (hereinafter
        the “Site”) may be used only for information purposes and to place
        orders according to the Site’s Sales Terms and Conditions. By using the
        Site or downloading materials from the Site, you agree to abide by the
        terms of use outlined in this notice (hereinafter the “Terms of Use”).
        If you do not agree to abide by these Terms of Use, do not use the Site
        or download materials from the Site.
      </>
    ),
    paragraphUnderQuote2: (
      <>
        NDB, has its registered office located at 50 California Street, Suite
        1500, San Francisco, California 94111, USA, Tel: +1 (650) 252-0002,
        trading under the name “NDB” (hereinafter referred to as “NDB”).
      </>
    ),
    paragraphUnderQuote3: (
      <>
        These Terms of Use may be changed from time to time in whole or in part
        and without further notice, so please check these Terms of Use
        frequently: Your continued use of the Site after any such changes
        constitutes your acceptance of the new terms. If you do not agree to
        abide by these or any future terms, please do not use the Site or
        download materials from it.
      </>
    ),
    paragraphUnderQuote4: (
      <>
        NDB may terminate, change, suspend or discontinue any aspect of the
        Site, including the availability of any features, at any time. NDB may
        remove, modify or otherwise change any content, including third parties,
        on or from this Site. NDB may impose limits on certain features and
        services or restrict your access to parts or the entire Site without
        notice or liability. NDB may terminate the authorization and rights
        given below and your use of the Site at any time at its sole discretion.
        Upon such termination, you shall immediately destroy all materials that
        you have downloaded from the Site.
      </>
    ),
    paragraphUnderQuote5: (
      <>
        These Terms of Use apply exclusively to your access to and use of the
        Site and do not alter the terms or conditions of any other agreement you
        may have with NDB or its parent(s), subsidiaries, or affiliates
        regarding other topics than the use of this Site.
      </>
    ),
  }
  return (
    <Layout pageName="terms">
      <Seo title="Terms" />

      <Banner width="fullwidth" pageName="terms" style="mb-100">
        <StaticImage
          src="../assets/images/news/pressKitSwirlMobile.png"
          className="banner__overlay mobile-show "
          alt="banner background "
          placeholder="blurred"
          blurredOptions={{ width: 300 }}
          style={{ height: "100%" }}

        />
        <StaticImage
          src="../assets/images/news/pressKitSwirl.svg"
          className="banner__overlay mobile-hide"
          alt="banner background "
          placeholder="BLURRED"
          blurredOptions={{ width: 900 }}
          style={{ height: "100%" }}

        />
        <Link to="/news/" className="banner__button">
          <img src={arrow} alt="888" />
          <span>News</span>
        </Link>
      </Banner>

      <NDBWrapper>
        <div className="technology__section1">
          <span className="technology__section1-title text-left global-title-font ">
            {termsData.NDBSectionTitle}
          </span>
          <p className="section-content">{termsData.paragraphUnderQuote1}</p>
          <p className="section-content">{termsData.paragraphUnderQuote2}</p>
          <p className="section-content">{termsData.paragraphUnderQuote3}</p>
          <p className="section-content">{termsData.paragraphUnderQuote4}</p>
          <p className="section-content">{termsData.paragraphUnderQuote5}</p>
        </div>
      </NDBWrapper>
    </Layout>
  )
}

export default Terms
