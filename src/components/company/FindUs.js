import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import mapImage from "../../assets/images/contact/mapImage.png"
import NDBWrapper from "../wrapper"

const FindUs = () => {
  return (
    <NDBWrapper id="find-us">
      <p className="find-us-title">Find us</p>

      <div className="find-us">
        <div className="find-us__locations">
          <div className="location">
            <p className="country">United States of America</p>
            <p className="address">50 California Street, Suite 1500</p>
            <p className="city">San Francisco, CA 94111</p>
          </div>
          <div className="location">
            <p className="country">Switzerland</p>
            <p className="address">Microcity SA</p>
            <p className="address">Rue Pierre-à-Mazel 39</p>
            <p className="city">2000 Neuchâtel</p>
          </div>
          <div className="location">
            <p className="country">United Kingdom</p>
            <p className="address">69 Wilson St</p>
            <p className="city">London, EC2A 2BB</p>
          </div>
          <div className="location">
            <p className="country">Estonia</p>
            <p className="address">Akadeemia tee 21/1 </p>
            <p className="city">Tallinn, 12618</p>
          </div>

          <div className="find-us__contact">
            <p>Contact us</p>
            <div className="phone">
              <span>Email</span>
              <a href="mailto:info@ndb.technology">info@ndb.technology</a>
            </div>
            <div className="phone">
              <span>USA</span>
              <a href="tel:+1 650 252 0002">+1 (650) 252-0002</a>
            </div>
            <div className="phone">
              <span>Swiss</span>
              <a href="tel:+41 275 083 211">+41 (275) 083 211</a>
            </div>
            <div className="phone">
              <span>UK</span>
              <a href="tel:+44 203 670 2007">+44 (203) 670-2007</a>
            </div>
            <div className="phone">
              <span>Fax</span>
              <a href="tel:+1 650 252 0003">+1 (650) 252-0003</a>
            </div>
          </div>
        </div>
        <div className="find-us__map">
          <LazyLoadImage src={mapImage} className="mobile-hide" alt="Find us map" />
          <LazyLoadImage
            src={mapImage}
            className="mobile-show"
            style={{
              width: "100%",
              height: "100%",
            }}
            alt="Find us map"
          />
        </div>
      </div>
    </NDBWrapper>
  )
}

export default FindUs
