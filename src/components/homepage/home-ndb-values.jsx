import React from "react"
import { Link } from "gatsby"
import arrow from "../../assets/images/icons/arrow.svg"
import backImg2 from "../../assets/images/company/companySwirl.svg"
import backImg2Mobile from "../../assets/images/company/companySwirl.svg"

export default function HomeNDBValues() {
    return (
        <div className="home__bottomSection ndb-values-section">
            <img
                src={backImg2}
                alt="NDB values and "
                className={`overlay mobile-hide object-pos-cener bottom heightAuto`}
            />
            <img
                src={backImg2Mobile}
                alt="NDB values and "
                className={`mobile-show overlay bottom heightAuto`}
            />
            <div className="content">
                <p className="descriptionText">NDB values and </p>
                <p className="descriptionText">responsibilities</p>
                <Link to="/careers/" className="banner__button ndb-values-section-banner-bottom">
                    <img src={arrow} alt="" />
                    <span>Believe in NDB</span>
                </Link>
            </div>
        </div>
    )
}
