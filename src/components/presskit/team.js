import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Team() {
  const executives = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/presskits/executives/" } }
        sort: { order: ASC, fields: frontmatter___no }
      ) {
        totalCount
        nodes {
          id
          frontmatter {
            name
            position
            ndbImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  blurredOptions: { width: 100 }
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="team">
      {executives.allMarkdownRemark.nodes.map(member => {
        const image = getImage(member.frontmatter.ndbImage)

        return (
          <div className="card">
            <GatsbyImage
              image={image}
              alt={`${member.frontmatter.name} image`}
              className="image"
              style={{ padding: 30, width: "60%", height: "auto" }}
            />
            <div className="name">{member.frontmatter.name}</div>
            <div className="position">{member.frontmatter.position}</div>
          </div>
        )
      })}
    </div>
  )
}
