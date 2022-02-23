import React from "react"
import toTopImage from "../assets/images/icons/goToTop.svg"

const ToTop = () => {
    if (typeof window !== `undefined`)
        window.onscroll = () => {
            const btn = document.getElementById("btn-scroll-to-top")
            window.pageYOffset > 200 ? btn.classList.remove("d-none") : btn.classList.add("d-none")
        }

    const scrollToTop = () => {
        if (typeof window !== `undefined`) window.scrollTo(0, 0)
    }
    return (
        <div className="to-top d-none" id="btn-scroll-to-top" onClick={scrollToTop}>
            <a>
                <img src={toTopImage} alt="go to top" />
            </a>
        </div>
    )
}

export default ToTop
