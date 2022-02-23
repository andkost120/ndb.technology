import React from "react"
import arrow from "../../assets/images/icons/arrow.svg"
import CustomButton from "../../components/custom-button"
import ndbcity from "../../assets/images/homepage/ndbcity.svg"
import cityVision from "../../assets/images/homepage/city-vision.svg"
import cityVisionMobile from "../../assets/images/homepage/city-vision.svg"

export default function HomeNDBCity() {
    return (
        <div className="city-vision">
            <img src={ndbcity} alt="ndb city" className="mobile-hide city-vision__image" />
            <p className="title global-title-font mobile-show text-green">
                <img src={ndbcity} alt="ndb city" className="mobile-show  city-vision__image" />
            </p>
            <p className="under-title mobile-hide">Innovation ecosystem</p>
            <p className="desc mobile-hide">
                An advanced tech hub to deliver interdisciplinary innovative solutions.
            </p>
            <p className="desc mobile-show">
                An advanced techhub to deliver interdisciplinary innovative solutions.
            </p>
            <CustomButton
                buttonTitle="Explore the vision"
                buttonLink="https://ndb.city"
                buttonWidth="w-45"
                buttonImg={arrow}
                flex="flex-left"
                textAlign="text-left"
                type="external"
            />
            <img src={cityVision} alt="pre sale page" className="image mobile-hide" />
            <img
                src={cityVisionMobile}
                alt="pre sale page"
                className="image mt-0 img-fluid mobile-show"
            />
        </div>
    )
}
