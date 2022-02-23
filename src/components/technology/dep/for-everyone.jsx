/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React from "react"
import forEveryOneBanner from "../../../assets/images/technology/dep/for-everyone.svg"
import forEveryOneMobileBanner from "../../../assets/images/technology/dep/for-everyone-mobile.svg"
/* -------------------------------------------------------------------------- */
/*                            Functional Component                            */
/* -------------------------------------------------------------------------- */
export default function ForEveryone() {
    /* -------------------------------------------------------------------------- */
    /*                                   Render                                   */
    /* -------------------------------------------------------------------------- */
    return (
        <div className="col-lg-12 p-0 for-everyone">
            <img
                src={forEveryOneBanner}
                className="for-everyone-banner d-none d-lg-block"
                alt="For Everyone"
            />
            <img
                src={forEveryOneMobileBanner}
                className="for-everyone-banner d-block d-lg-none"
                alt="For Everyone Mobile"
            />
            <h1 className="for-everyone-title d-none d-lg-block">For everyone</h1>
            <span className="for-everyone-label for-everyone-label-1 text-dark d-none d-lg-block">
                governments
            </span>
            <span className="for-everyone-label for-everyone-label-2 text-dark d-none d-lg-block">
                companies
            </span>
            <span className="for-everyone-label for-everyone-label-3 text-dark d-none d-lg-block">
                insurances
            </span>
            <span className="for-everyone-label for-everyone-label-4 text-dark d-none d-lg-block">
                independent suppliers
            </span>
            <span className="for-everyone-label for-everyone-label-5 text-dark d-none d-lg-block">
                individuals
            </span>
            <span className="for-everyone-label for-everyone-label-6 text-dark d-none d-lg-block">
                ndb
            </span>
            <h1 className="for-everyone-mobile-title d-block d-lg-none">For everyone</h1>
            <span className="for-everyone-mobile-label for-everyone-mobile-label-1 d-block d-lg-none d-block">
                governments
            </span>
            <span className="for-everyone-mobile-label for-everyone-mobile-label-2 d-block d-lg-none d-block">
                companies
            </span>
            <span className="for-everyone-mobile-label for-everyone-mobile-label-3 d-block d-lg-none d-block">
                insurances
            </span>
            <span className="for-everyone-mobile-label for-everyone-mobile-label-4 d-block d-lg-none d-block">
                independent suppliers
            </span>
            <span className="for-everyone-mobile-label for-everyone-mobile-label-5 d-block d-lg-none d-block">
                individuals
            </span>
            <span className="for-everyone-mobile-label for-everyone-mobile-label-6 d-block d-lg-none d-block">
                ndb
            </span>
        </div>
    )
}
