import React from "react"
import NDBWrapper from "../wrapper"
import backImg4 from "../../assets/images/homepage/learnmore.svg"
import backImg4logo from "../../assets/images/homepage/ndbblockchain.svg"
import backImg4Mobile from "../../assets/images/homepage/learnMoreSwirlMobile.svg"
import backImg4logoMobile from "../../assets/images/homepage/ndbblockchain-logo-mobile.svg"

export default function HomeNDBBlockchain() {
    return (
        <NDBWrapper width="fullwidth">
            <div className="home__bottomSection blockchain">
                <img src={backImg4} className="overlay mobile-hide object-pos-left bottom" />
                <div className="overlay backImgLogo">
                    <img src={backImg4logo} className="object-pos-left w-100 mobile-hide" />
                    <img
                        src={backImg4logo}
                        className="object-pos-left w-100 pr-4 mb-1 mobile-show"
                    />
                    <p className="descriptionText font-weight-normal">
                        Ecosystem, tokens, and solutions
                    </p>
                </div>
                <img src={backImg4Mobile} className="mobile-show overlay bottom" />
                <div className="content text-white">
                    <a
                        href="https://ndb.money"
                        target="_blank"
                        className="banner__button ndb-blockchain-banner-button"
                    >
                        <span className="text-uppercase font-weight-bold">earn ndb coins</span>
                    </a>
                </div>
            </div>
        </NDBWrapper>
    )
}
