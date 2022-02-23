import React from "react"
import Tab from "./Tab"
import Tabs from "./Tabs"
import NDBWrapper from "../wrapper"
import CustomButton from "../custom-button"
import { graphql, useStaticQuery } from "gatsby"

const OrganicTabsCareer = ({
  dataQuery,
  width,
  tabs,
  pageName,
  buttonsName,
  buttonLink,
  buttonWidth,
  buttonTitle,
  buttonImg,
  textAlign,
  buttonTextOrder,
  flex,
  margin,
  buttonColor,
}) => {
  const careers = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/careers/organic-tabs/" } }
        sort: { fields: frontmatter___newsImage___base }
      ) {
        totalCount
        nodes {
          id
          html
          frontmatter {
            title
            slug
            newsImage {
              publicURL
            }
          }
        }
      }
    }
  `)


  return (
    <NDBWrapper width={width}>
      <div className="tabs">
        <p className="page-name">{pageName}</p>
        <Tabs buttonsName={buttonsName} margin={margin}>
          {careers.allMarkdownRemark.nodes.map(({ frontmatter, id, html }) => {
            return (
              <Tab key={id} label={frontmatter.title}>
                <img
                  src={frontmatter.newsImage.publicURL}
                  className="overlay tabs-overlay"
                  placeholder="none"
                />
                <div className="content-intro">
                  <p className="content-title">{frontmatter.title}</p>
                  <p className="content-bio">{frontmatter.slug}</p>
                </div>
                <div
                  className="content-desc"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <CustomButton
                  buttonLink={buttonLink}
                  buttonWidth={buttonWidth}
                  buttonTitle={buttonTitle}
                  buttonImg={buttonImg}
                  buttonColor={buttonColor}
                  textAlign={textAlign}
                  buttonTextOrder={buttonTextOrder}
                  flex={flex}
                />
              </Tab>
            )
          })}
        </Tabs>
      </div>
    </NDBWrapper>
  )
}

export default OrganicTabsCareer
