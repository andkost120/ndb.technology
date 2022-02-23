/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useState } from "react"
import { FeaturesSectionContent } from "../../../utilities/content/dep"
/* -------------------------------------------------------------------------- */
/*                            Functional Component                            */
/* -------------------------------------------------------------------------- */
export default function Features() {
    /* -------------------------------------------------------------------------- */
    /*                                 Containers                                 */
    /* -------------------------------------------------------------------------- */
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    /* -------------------------------------------------------------------------- */
    /*                                   Render                                   */
    /* -------------------------------------------------------------------------- */
    return (
        <div className="dep-features">
            <div className="row col-lg-11 mx-auto dep-features-inner-section">
                <div className="col-lg-5 dep-features-titles-list">
                    {FeaturesSectionContent?.map((feature, index) => {
                        return (
                            <div key={index}>
                                {currentTabIndex === index ? (
                                    <>
                                        <div
                                            className="row m-0"
                                            onClick={() => setCurrentTabIndex(-1)}
                                        >
                                            <div className="list-number col-1 p-0 my-auto active">
                                                {feature.id}
                                            </div>
                                            <div className="list-content col-11 p-0 my-auto pl-4 active">
                                                {feature.title}
                                            </div>
                                        </div>
                                        <div className="dep-features-content d-lg-none d-block">
                                            <div>
                                                {FeaturesSectionContent[currentTabIndex]?.content}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div
                                        className="row m-0"
                                        onClick={() => setCurrentTabIndex(index)}
                                    >
                                        <div className="list-number col-1 p-0 my-auto">
                                            {feature.id}
                                        </div>
                                        <div className="list-content col-11 p-0 my-auto pl-4">
                                            {feature.title}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className="col-lg-7 d-lg-block d-none">
                    <div className="dep-features-content">
                        <div>{FeaturesSectionContent[currentTabIndex]?.content}</div>
                    </div>
                </div>

                {/* <div className="d-block d-lg-none px-3">
                    {FeaturesSectionContent?.map(feature => {
                        return (
                            <>
                                <div className="dep-features-titles-list">
                                    <div className="row m-0">
                                        <div className="list-number active col-2 p-0 my-auto align-middle">
                                            {feature.id}
                                        </div>
                                        <div className="list-content active col-10 p-0 my-auto">
                                            {feature.title}
                                        </div>
                                    </div>
                                </div>
                                <div className="dep-features-content">
                                    <br />
                                    <div>{feature.content}</div>
                                </div>
                            </>
                        )
                    })}
                </div> */}
            </div>
        </div>
    )
}
