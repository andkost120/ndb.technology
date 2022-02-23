import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useEffect } from "react"
import NDBWrapper from "../wrapper"

const TeamMembers = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/team/" } }
        sort: { fields: frontmatter___orderId, order: ASC }
      ) {
        totalCount
        nodes {
          id
          frontmatter {
            name
            title
            abbreviation
            number
            position
            ndbImage {
              publicURL
            }
          }
        }
      }
    }
  `)

  const allNews = data.allMarkdownRemark.nodes

  const limit = 8
  const [list, setList] = useState([...allNews.slice(0, limit)])

  const [loadMore, setLoadMore] = useState(false)

  const [hasMore, setHasMore] = useState(allNews.length > limit)

  const handleLoadMore = () => {
    setLoadMore(true)
  }

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allNews.length
      const nextResults = isMore
        ? allNews.slice(currentLength, currentLength + limit)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  useEffect(() => {
    const isMore = list.length < allNews.length
    setHasMore(isMore)
  }, [list])

  return (
    <NDBWrapper id="team-members">
      <div className="team-members mb-100 mt-100">
        <div className="board">
          {allNews.map(
            (
              {
                id,
                frontmatter: { name, title, abbreviation, number, ndbImage },
              },
              index
            ) => (
              <div className="profile" key={id}>
                <div className="profile-img overlay">
                  <img
                    src={ndbImage.publicURL}
                    alt="team member"
                    placeholder="none"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <p className="abbrv">
                  {abbreviation} <sup>{number}</sup>{" "}
                </p>
                <p className="name">{name}</p>
                <p className="position">{title}</p>
              </div>
            )
          )}
        </div>
      </div>
    </NDBWrapper>
  )
}

export default TeamMembers
