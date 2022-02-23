/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import Container from "../../../components/Container"
import React, { useEffect, useRef, useState } from "react"
import { CircleSectionContent, CircleSectionMobileContent } from "../../../utilities/content/dep"
import circleImage from "../../../assets/images/technology/dep/circle-element.svg"
import circleImageMobile from "../../../assets/images/technology/dep/circle-mobile.svg"
import circleDotImage from "../../../assets/images/technology/dep/circle-dot.svg"
/* -------------------------------------------------------------------------- */
/*                            Functional Component                            */
/* -------------------------------------------------------------------------- */
export default function Circle() {
    /* -------------------------------------------------------------------------- */
    /*                                 Containers                                 */
    /* -------------------------------------------------------------------------- */
    const timeout = useRef(null)
    const primaryTitle = "Maximize energy and sustainability"
    const [title, setTitle] = useState(primaryTitle)
    const [animation, setAnimation] = useState(true)
    const [circleDotIndicator, setCircleDotIndicator] = useState(1)
    const delay = 1000
    /* -------------------------------------------------------------------------- */
    /*                                   Methods                                  */
    /* -------------------------------------------------------------------------- */
    const stopAnimationAndChangeContent = selectedItemId => {
        setAnimation(false)
        setCircleDotIndicator(selectedItemId)
        clearTimeout(timeout.current)
    }
    const startAnimation = selectedItemId => {
        setAnimation(true)
        setCircleDotIndicator(selectedItemId)
        timeout.current = setTimeout(() => {
            if (circleDotIndicator > 1) return setCircleDotIndicator(circleDotIndicator - 1)
            return setCircleDotIndicator(10)
        }, delay)
    }
    useEffect(() => {
        setTitle(CircleSectionContent[circleDotIndicator - 1].description)
        if (animation)
            timeout.current = setTimeout(() => {
                if (circleDotIndicator > 1) return setCircleDotIndicator(circleDotIndicator - 1)
                return setCircleDotIndicator(10)
            }, delay)
    }, [circleDotIndicator])
    useEffect(() => {
        const accordion = document.getElementsByClassName("dep-accordion-container")
        for (let i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener("click", function () {
                this.classList.toggle("dep-accordion-active")
            })
        }
    }, [])
    /* -------------------------------------------------------------------------- */
    /*                                   Render                                   */
    /* -------------------------------------------------------------------------- */
    return (
        <Container>
            <div className="col-md-11 mx-auto">
                <div className="dep-circle d-none d-lg-block">
                    <div className={`circle-content circle-content-${circleDotIndicator}`}>
                        <h1>We can</h1>
                        {title === primaryTitle ? (
                            <h3 className="text-green text-uppercase mt-4">{title}</h3>
                        ) : (
                            <h4 className="text-dark mt-4 font-weight-normal">{title}</h4>
                        )}
                    </div>
                    <img src={circleImage} className="circle-edge-image img-fluid" alt="Circle" />
                    {CircleSectionContent.map(item => {
                        return (
                            <div
                                className={`circle-box ${
                                    item.id === circleDotIndicator ? "opacity-1" : ""
                                }`}
                            >
                                <img
                                    src={circleDotImage}
                                    className={`circle-dot circle-dot-${item.id}`}
                                    alt="Circle Dot"
                                    onClick={() => stopAnimationAndChangeContent(item.id)}
                                    onMouseEnter={() => stopAnimationAndChangeContent(item.id)}
                                    onMouseLeave={() => startAnimation(item.id)}
                                />
                                <span
                                    className={`circle-label circle-label-${item.id}`}
                                    dangerouslySetInnerHTML={{ __html: item.title }}
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="dep-circle-mobile d-block d-lg-none text-center">
                    <div
                        className="circle-content-mobile"
                        style={{
                            backgroundImage: `url(${circleImageMobile})`,
                        }}
                    >
                        <div className="circle-content-title-mobile">
                            <h2>We can</h2>
                            <h6 className="text-green text-uppercase mt-2">
                                Maximize energy and sustainability
                            </h6>
                        </div>
                    </div>
                    <div className="dep-accordion-body">
                        <div className="dep-accordion">
                            {CircleSectionMobileContent?.map(item => {
                                return (
                                    <div className="dep-accordion-container" key={item.id}>
                                        <div className="dep-accordion-label">{item.label}</div>
                                        <div className="dep-accordion-content">{item.content}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
