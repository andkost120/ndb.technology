import * as React from "react"
import Seo from "../components/seo"
import arrow from "../assets/images/icons/arrow.png"
import background from "../assets/images/icons/Oops.png"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Banner from "../components/Banner"

const NotFoundPage = () => (
  <Layout>
    <div className="notFound">
      <Seo title="404: Not found" />
      <Banner pageName="notFound" />
      <div className="contentWrapper">
        <img
          src={background}
          className="background-image "
          alt="ooops background"
        />
        <p className="text404">404</p>
        <div className="link404">
          <p>Page Not Found</p>
          <div className="content">
            <p>Something went wrong!</p>
            <Link to="/">
              <img src={arrow} alt="button arrow" />
              <span>Home page</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
