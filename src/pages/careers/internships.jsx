import React from "react"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import backImg from "../../assets/images/careers/internshipsSwirl.png"
import arrow from "../../assets/images/icons/arrow.svg"
import arrowWhite from "../../assets/images/icons/arrowWhite.svg"
import number from "../../assets/images/icons/6.svg"
import numberMobile from "../../assets/images/icons/mobile6.svg"
import trophy from "../../assets/images/icons/trophy.svg"
import trophyMobile from "../../assets/images/icons/trophyMobile.svg"
import medal from "../../assets/images/icons/medal.svg"
import medalMobile from "../../assets/images/icons/medalMobile.svg"
import swirl1 from "../../assets/images/careers/swirl1.svg"
import swirl2 from "../../assets/images/careers/swirl2.svg"
import swirl3 from "../../assets/images/careers/swirl3.svg"
import swirl4 from "../../assets/images/careers/swirl4.svg"
import swirl5 from "../../assets/images/careers/swirl5.svg"
import swirl6 from "../../assets/images/careers/swirl6.svg"
import castle from "../../assets/images/careers/castle.svg"
import { Link } from "gatsby"
import Container from "../../components/Container"
import NDBWrapper from "../../components/wrapper"
import CustomButton from "../../components/custom-button"

const Internships = () => {
  const departmentalInternships = [
    {
      title: "Engineering",
      list: (
        <ul>
          <li>Nuclear Engineering</li>
          <li>Materials Sciences</li>
          <li>Electronics</li>
          <li>Physics</li>
          <li>Computer</li>
        </ul>
      ),
    },
    {
      title: "Design",
      list: (
        <ul>
          <li>UI/UX</li>
          <li>Product design</li>
          <li>Animations and gaming</li>
        </ul>
      ),
    },
    {
      title: "Marketing",
      list: (
        <ul>
          <li>Intellectual property</li>
          <li>Corporate law</li>
          <li>Product compliance</li>
          <li>Safety and environmental compliance</li>
        </ul>
      ),
    },
    {
      title: "HR",
      list: (
        <ul>
          <li>Psychology</li>
          <li>Recruitment</li>
          <li>Project management</li>
          <li>Personal Assistance</li>
        </ul>
      ),
    },
    {
      title: "Compliance",
      list: (
        <ul>
          <li>Intellectual property</li>
          <li>Corporate law</li>
          <li>Product compliance</li>
          <li>Safety and environmental</li>
        </ul>
      ),
    },
    {
      title: "Business & Finance",
      list: (
        <ul>
          <li>Merger and Acquisition</li>
          <li>Accounting and Auditing</li>
          <li>Strategy</li>
          <li>Partnership</li>
        </ul>
      ),
    },
  ]
  const seasonalPrograms = [
    {
      image: swirl1,
      title: <>Nuclear Energy: Science, Systems and Society </>,
    },
    {
      image: swirl2,
      title: <>Lean Design Thinking </>,
    },
    {
      image: swirl3,
      title: <>Introduction to Marketing </>,
    },
    {
      image: swirl4,
      title: <>Economics and Policies for a Circular Economy </>,
    },
    {
      image: swirl5,
      title: <>Climate Change, Financial Risks, and Opportunities </>,
    },
    {
      image: swirl6,
      title: <>Becoming an Entrepreneur </>,
    },
  ]

  return (
    <Layout pageName="internships">
      <Seo title="Internships" />
      <Banner pageName="internships" width="fullwidth">
        <img
          src={backImg}
          className="banner__overlay mobile-hide"
          alt="banner background "
        />
        <img
          src={backImg}
          className="banner__overlay mobile-show"
          alt="banner background "
          placeholder="none"
        />

        <div className="banner__data ">
          <p className="banner__description ">Discover internship programs</p>

          <div className="c-button">
            <Link
              to="/company/"
              target="_blank"
              className="c-button__link banner__button"
            >
              <img src={arrow} alt="buttonImg" className="c-button__img " />
              <span className="c-button__name text-left">About us</span>
            </Link>
          </div>
        </div>
      </Banner>

      <Container>
        <div className="internships-programs">
          <p className="title global-title-font">Internship programs</p>
          <p className="program-content">
          We support innovation - from setting the framework and strategies to implementing programs and initiatives to acquire and create innovations that meet our future needs.
          </p>
        </div>
      </Container>
      <NDBWrapper>
        <div className="cards">
          <div className="card">
            <img
              src={number}
              className="mobile-hide"
              alt="months in duration"
            />
            <img
              src={numberMobile}
              className="mobile-show"
              alt="months in duration"
            />
            <p className="content">Months in duration</p>
          </div>
          <div className="card">
            <img src={trophy} className="mobile-hide" alt="win yor award" />
            <img
              src={trophyMobile}
              className="mobile-show"
              alt="win yor award"
            />
            <p className="content">Win your Award</p>
          </div>
          <div className="card">
            <img
              src={medal}
              className="mobile-hide"
              alt="get your certificate"
            />
            <img
              src={medalMobile}
              className="mobile-show"
              alt="get your certificate"
            />
            <p className="content">Get your Certificate</p>
          </div>
        </div>
      </NDBWrapper>
      <NDBWrapper width="fullwidth">
        <div className="seasonal-programs">
          <div className="titleHead">
            <p className="global-title-font title">Seasonal Programs</p>
            <p className="description">
              Highly competitive and limited availibility
            </p>
          </div>
          <div className="programsGrid">
            {seasonalPrograms.map(program => (
              <div className="program">
                <img src={program.image} alt="program swirl" />
                <p className="title">{program.title}</p>
                <CustomButton
                  buttonTitle="Read more"
                  buttonLink="/"
                  buttonWidth="w-40"
                  buttonImg={arrowWhite}
                  buttonTextOrder="order-2"
                  flex="flex-center"
                  textAlign="text-center"
                  buttonColor="text-white "
                />
              </div>
            ))}
          </div>
        </div>
      </NDBWrapper>

      <div className="scholarship">
        <img src={castle} className="castleImage" alt="castle" />

        <div className="scholarship__content">
          <Container>
            <p className="title global-title-font">NDB Scholarship</p>
            <p className="content">
              NDB offers generous aid throughout your time and beyond-everything
              from Tuition Assistance to Career Support & Exploration.
            </p>
            <div className="banner__data ">
              <div className="c-button">
                <Link
                  to="/"
                  target="_blank"
                  className="c-button__link banner__button"
                >
                  <img
                    src={arrowWhite}
                    alt="buttonImg"
                    className="c-button__img "
                  />
                  <span className="c-button__name text-left">
                    Apply for Scholarship
                  </span>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <NDBWrapper width="fullwidth">
        <div className="seasonal-programs departmental-internships">
          <div className="titleHead">
            <p className="global-title-font title">Departmental Internships</p>
            <p className="description">
              Accepting applicants all around the year
            </p>
          </div>
          <div className="programsGrid">
            {departmentalInternships.map(program => (
              <div className="program">
                <p className="title">{program.title}</p>
                <p className="content">{program.list}</p>
                <CustomButton
                  buttonTitle="Apply Now"
                  buttonLink="/"
                  buttonWidth="w-40"
                  buttonImg={arrow}
                  buttonTextOrder="order-2"
                  flex="flex-right"
                  textAlign="text-center"
                />
              </div>
            ))}
          </div>
        </div>
      </NDBWrapper>
    </Layout>
  )
}

export default Internships
