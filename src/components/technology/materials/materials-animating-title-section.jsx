/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useRef } from "react"
/* -------------------------------------------------------------------------- */
/*                            Functional Component                            */
/* -------------------------------------------------------------------------- */
export default function MaterialsAnimatingTitleSection() {
    /* -------------------------------------------------------------------------- */
    /*                                 Containers                                 */
    /* -------------------------------------------------------------------------- */
    const title = useRef()
    const subTitle = useRef()
    /* -------------------------------------------------------------------------- */
    /*                                   Methods                                  */
    /* -------------------------------------------------------------------------- */
    const animatePageTitleSection = () => {
        const observer = new IntersectionObserver(
            entries => {
                const [entry] = entries
                if (entry.isIntersecting) {
                    title.current.classList.add("title-animation")
                    subTitle.current.classList.add("sub-title-animation")
                }
            },
            {
                root: null,
                threshold: 1,
                rootMargin: "100px",
            }
        )
        observer.observe(title.current)
    }
    useEffect(() => {
        animatePageTitleSection()
    }, [])
    /* -------------------------------------------------------------------------- */
    /*                                   Render                                   */
    /* -------------------------------------------------------------------------- */
    return (
        <div>
            <div className="materials-title-section d-none d-lg-block">
                <div ref={title} className="text-center font-weight-bold display-1">
                    <span className="word word-1">Advanced</span>{" "}
                    <span className="word word-2">Materials</span>
                </div>
                <div ref={subTitle} className="text-center text-uppercase fw-500 mt-4 fs-20-px">
                    <span className="word word-1">Dedication</span>{" "}
                    <span className="word word-2">To All</span>{" "}
                    <span className="word word-3">Parts</span>{" "}
                </div>
            </div>
            <div className="materials-title-section d-block d-lg-none py-5 my-5">
                <div className="text-center font-weight-bold display-4 title-animation">
                    <span className="word word-1">Advanced</span>{" "}
                    <span className="word word-2">Materials</span>
                </div>
                <div className="text-center text-uppercase fw-500 mt-4 fs-20-px sub-title-animation">
                    <span className="word word-1">Dedication</span>{" "}
                    <span className="word word-2">To All</span>{" "}
                    <span className="word word-3">Parts</span>{" "}
                </div>
            </div>
        </div>
    )
}
