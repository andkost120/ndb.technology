import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Banner from "../components/Banner"

const NotConnected = () => (
  <Layout>
    <div className="notFound">
      <Seo title="Comming Soon" />
      <Banner pageName="notFound" />
      <div className="contentWrapper">
        <p className="text404">Comming Soon</p>
        <div className="link404">
          <p>I see you are early</p>
          <div className="content">
            <p className="w-100">In the meanwhile explore our page </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotConnected
