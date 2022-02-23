import Tab from "./Tab"
import Tabs from "./Tabs"
import React from "react"
import NDBWrapper from "../wrapper"
import CustomButton from "../custom-button"
import { LazyLoadImage } from "react-lazy-load-image-component"

const OrganicTabs = ({
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
  noImage,
  textWhite,
  id,
  style,
}) => {
  return (
    <NDBWrapper width={width}>
      <div className={`tabs ${style && style}`} id={id}>
        <p className="page-name">{pageName}</p>
        <Tabs buttonsName={buttonsName} margin={margin} noImage={noImage}>
          {dataQuery.nodes.map(({ frontmatter, id, html }, index) => {
            return (
              <Tab key={id} label={frontmatter.title}>
                {frontmatter.newsImage && (
                  <LazyLoadImage
                    src={frontmatter.newsImage.publicURL}
                    alt="tab item backround"
                    className="overlay tabs-overlay"
                  />
                )}
                <div className="content-intro">
                  <p className="content-title">{frontmatter.title}</p>
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

export default OrganicTabs
