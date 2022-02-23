import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Banner from "../../components/Banner"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Team from "../../components/presskit/team"
import backImg from "../../assets/images/news/pressKitSwirl.svg"
import AppButton from "../../components/AppButton"
import arrow from "../../assets/images/icons/arrow.svg"
import CustomButton from "../../components/custom-button"

const Presskits = () => {
  const data = useStaticQuery(graphql`
    {
      greenBac: file(relativePath: { eq: "presskits/green-bac.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      chip: file(relativePath: { eq: "presskits/chip.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      pressReleases: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/presskits/pressReleases/" } }
        sort: { order: ASC, fields: frontmatter___no }
      ) {
        nodes {
          id
          frontmatter {
            description
            link
            ndbImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
      downloads: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/presskits/downloads/" } }
        sort: { order: ASC, fields: frontmatter___no }
      ) {
        nodes {
          id
          frontmatter {
            title
            color
            link
            linkName
            ndbImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
      map: file(relativePath: { eq: "presskits/map.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)

  const greenBacImage = getImage(data.greenBac)
  const chipImage = getImage(data.chip)
  const mapImage = getImage(data.map)

  return (
    <Layout pageName="presskit">
      <Seo title="Press Kit" />
      <Banner pageName="presskit" width="fullwidth">
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
          <div className="c-button">
            <Link
              to="/news"
              target="_blank"
              className="c-button__link banner__button"
            >
              <img src={arrow} alt="buttonImg" className="c-button__img " />
              <span className="c-button__name text-left">News</span>
            </Link>
          </div>
        </div>
      </Banner>
      <h3 className="header-3 press-room">NDB Press Room</h3>

      <div className="about">
        <h4 className="global-title-font">NDB</h4>
        <div className="body">
          NDB, Inc. is a Silicon Valley-based nanotechnology company established
          to develop and manufacture semiconductors, energy, and battery
          solutions.
        </div>
      </div>
      <div className="year">
        <div className="card">
          <div className="num">2019</div>
          <div className="text">WE FOUNDED NDB</div>
        </div>
        <div className="card" style={{ width: "auto" }}>
          <div className="num">50</div>
          <div className="text">PROFESSIONISTS</div>
        </div>
      </div>
      <Team />
      <div className="whatWeDo">
        <div className="item">
          <h3 className="header-3 header">What We Do?</h3>
          <div className="content">
            NDB utilizes recycles nuclear waste as raw material to produce
            energy.
            <br />
            <br />
            The battery has a variety of applications from consumer electronics
            and medical devices to automobiles and aerospace, among other
            things.
          </div>
          <CustomButton
            buttonLink="/company"
            buttonTitle="Learn More"
            buttonImg={arrow}
          />
        </div>
        <div className="item">
          <GatsbyImage
            image={greenBacImage}
            alt="What We do Image"
            objectFit="cover"
          />
        </div>
        <div className="item">
          <GatsbyImage
            image={chipImage}
            alt="What We do Image"
            objectFit="contain"
          />
        </div>
        <div className="item">
          <h3 className="header-3 header">The NDB Battery</h3>
          <div className="content">
            The self-charging battery produces stable power by converting the
            energy released from radioactive decay into usable energy throughout
            its lifetime, which is generally many years.
          </div>
          <CustomButton
            buttonLink="/technology"
            buttonTitle="Learn More"
            buttonImg={arrow}
          />
        </div>
      </div>
      <div className="press-releases">
        <h3 className="header-3 header">Press Releases </h3>
        <div className="press-cont">
          {data.pressReleases.nodes.map(item => {
            const ndbImage = getImage(item.frontmatter.ndbImage)

            return (
              <a
                className="description w-100"
                href={item.frontmatter.link}
                target="_blank"
              >
                <div className="image">
                  <GatsbyImage
                    image={ndbImage}
                    alt="What We do Image"
                    objectFit="contain"
                    style={{ width: "100%" }}
                  />
                </div>
                <span>{item.frontmatter.description}</span>
              </a>
            )
          })}
        </div>
      </div>
      <div className="downloads">
        <h3 className="header-3 header">Download brand assets</h3>
        <div className="downloads-cont">
          {data.downloads.nodes.map(item => {
            const ndbImage = getImage(item.frontmatter.ndbImage)
            return item.frontmatter.title === "PICTURES" ? (
              <div className="item1">
                <div className={`item ${item.frontmatter.color}`}>
                  <div className="header-3 title" style={{ color: "#9F9F9F" }}>
                    {item.frontmatter.title}
                  </div>
                  <div className="image">
                    <GatsbyImage
                      image={ndbImage}
                      alt={`${item.frontmatter.title} Image`}
                    />
                  </div>
                </div>
                <CustomButton
                  buttonLink="/"
                  buttonTitle={item.frontmatter.linkName}
                  buttonImg={arrow}
                  flex="opacity-03"
                />
              </div>
            ) : (
              <div className="item1">
                <div className={`item ${item.frontmatter.color}`}>
                  <div className="header-3 title">{item.frontmatter.title}</div>
                  <div className="image">
                    <GatsbyImage
                      image={ndbImage}
                      alt={`${item.frontmatter.title} Image`}
                    />
                  </div>
                </div>
                <CustomButton
                  buttonLink="/"
                  buttonTitle={item.frontmatter.linkName}
                  buttonImg={arrow}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="contact">
        <h3 className="header-3 header">Press Contact</h3>
        <div className="contact-cont">
          <div className="addresses">
            <div className="address">
              <h4 className="header-3 head">Head Office</h4>
              <div className="sub-header">United States of America</div>

              <div>
                50 California Street, Suite 1500
                <br /> San Francisco, CA 94111
              </div>
            </div>
            <div className="address">
              <h4 className="header-3 head">Social Media Manager</h4>
              <div className="sub-header">Fariza Seilkanova</div>
              <div>fariza@ndb.technology</div>
            </div>
            <div className="address">
              <h4 className="header-3 head">Head of Operations</h4>
              <div className="sub-header">Giorgi Gogokhia</div>
              <div>giorgi@ndb.technology</div>
            </div>
          </div>
          <div className="image">
            <GatsbyImage image={mapImage} alt="What We do Image" />
          </div>
        </div>
      </div>
      <div className="for-more">
        <h3 className="header-3 header">
          For more press information contact us
        </h3>
        <div className="btn">
          <AppButton
            name="Contact us"
            link="/contact"
            btnStyle={{ width: "15rem" }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Presskits
