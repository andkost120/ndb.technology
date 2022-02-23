import React, { useState } from "react"
import Navbar from "./navbar"
import { Link } from "gatsby"
import NDBWrapper from "./wrapper"
import logoBeta from "../assets/images/logoBeta.svg"
import logoWhite from "../assets/images/logoWhite.svg"

const Banner = ({ pageName, width, darkTheme, children }) => {
    let className = ""

    if (pageName) {
        className = `${pageName}__banner`
    }

    const [open, setOpen] = useState(false)

    const clickOpen = () => setOpen(!open)
    return (
        <NDBWrapper width={width ? width : ""}>
            <div className={className} id="top">
                <div className="banner__left">
                    <Link to="/" className={`logoLink`}>
                        <img
                            src={darkTheme ? logoWhite : logoBeta}
                            alt="site icon"
                            className="logo"
                            placeholder="none"
                        />
                    </Link>{" "}
                    {children}
                </div>
                <Navbar clickOpen={clickOpen} open={open} setOpen={setOpen} darkTheme={darkTheme} />
            </div>
        </NDBWrapper>
    )
}

export default Banner
