import React, { useEffect, useState } from "react"
import NDBWrapper from "../wrapper"
import loadMoreImg from "../../assets/images/icons/loadMore.png"
import { graphql, useStaticQuery } from "gatsby"

const NewsGrid = ({ news, style }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/news/" }
          frontmatter: { pageName: { eq: true } }
        }
        sort: { fields: frontmatter___datePublished, order: DESC}
      ) {
        totalCount
        nodes {
          id
          frontmatter {
            title
            slug
            datePublished
            author
            pageName
            newsImage {
              publicURL
            }
          }
        }
      }
    }
  `)

  const allNews = data.allMarkdownRemark.nodes

  const limit = 9
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
    <NDBWrapper width="fullwidth" style={style}>
      <div className="news-grid__title mt-100">
        <p>News</p>
      </div>
      <div className="news-grid">
        {list.map(({ frontmatter, id }, index) => {
          const {
            pageName,
            author,
            title,
            newsImage,
            datePublished,
            slug,
          } = frontmatter
          return (
            <div className="news-grid__item" key={index}>
              <a href={slug} className="">
                <div className="news-grid__image">
                  <img
                    src={newsImage.publicURL}
                    alt="news img"
                  />
                </div>
                <div className="news-grid__content">
                  <p className="author">{author}</p>
                  <p className="title">{title}</p>
                </div>
              </a>
              <p className="news-grid__publishedDate">{datePublished}</p>
            </div>
          )
        })}
      </div>
      {hasMore ? (
        <button onClick={handleLoadMore} className="load-more">
          <img src={loadMoreImg} alt="" />
        </button>
      ) : (
        ""
      )}
    </NDBWrapper>
  )
}

export default NewsGrid
