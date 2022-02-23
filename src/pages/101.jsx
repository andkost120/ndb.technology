import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/Banner"

const NotConnected = () => (
  <Layout>
    <div className="notFound">
      <Seo title="101: Connection Error" />
      <Banner pageName="notFound" />
      <div className="contentWrapper">
        <p className="text404">101</p>
        <div className="link404">
          <p>Connection Error</p>
          <div className="content">
            <p className="w-100">
              Looks like you are not connected! Check your internet connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotConnected
