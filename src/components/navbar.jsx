import { Link } from "gatsby"
import React from "react"
import navArrow from "../assets/images/icons/navArrow.png"
import navArrowWhite from "../assets/images/icons/navArrowWhite.png"
import navBottom from "../assets/images/navBottom.svg"
import logo from "../assets/images/logo.svg"

const Navbar = ({ open, setOpen, clickOpen, darkTheme }) => {
    const handleClick = e => {
        let menuItems = document.querySelectorAll(".nav-link")
        let menuArrow = document.querySelectorAll(".nav-link__arrow")
        let current = window.location.pathname.split("/")[1]

        if (current === "") return
        for (let i = 0, len = menuItems.length; i < len; i++) {
            if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
                menuItems[i].className += " active"
                menuArrow[i].className += " active"
            }
        }
    }

    return (
        <>
            {" "}
            <div
                className={open ? "active-menu mobile-show fixed" : "hamburger-menu mobile-show"}
                onClick={clickOpen}
            >
                <span className={`line1 ${darkTheme && "lineWhite"}`}></span>
                <span className={`line2 ${darkTheme && "lineWhite"}`}></span>
                <span className={`line3 ${darkTheme && "lineWhite"}`}></span>
            </div>
            <nav className="banner__nav mobile-hide">
                <Link to="/" className={`logoLinkMobile mobile-show `}>
                    <img src={logo} alt="site icon" className="logo" placeholder="none" />
                </Link>{" "}
                <img src={navBottom} className="navImgTop" alt="navigation bottom" />
                <Link to="/" className="nav-link" onLoad={handleClick}>
                    Home{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link to="/company/" className="nav-link" onLoad={handleClick}>
                    Company{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link to="/sustain/" className="nav-link" onLoad={handleClick}>
                    Sustainability{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link to="/technology" className="nav-link" onLoad={handleClick}>
                    Technology{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link to="/news/" className="nav-link" onLoad={handleClick}>
                    News{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link to="/careers/" className="nav-link" onLoad={handleClick}>
                    Careers{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link to="/contact/" className="nav-link" onLoad={handleClick}>
                    Contact{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <img src={navBottom} className="navImgBottom" alt="navigation bottom" />
            </nav>
            <nav className={`${open ? "banner__nav nav-show" : "banner__nav"} mobile-show`}>
                <Link to="/" className={`logoLinkMobile mobile-show `}>
                    <img src={logo} alt="site icon" className="logo" placeholder="none" />
                </Link>{" "}
                <img src={navBottom} className="navImgTop" alt="navigation bottom" />
                <Link to="/" className="nav-link" onClick={clickOpen} onLoad={handleClick}>
                    Home{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link to="/company/" className="nav-link" onClick={clickOpen} onLoad={handleClick}>
                    Company{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link to="/sustain/" className="nav-link" onClick={clickOpen} onLoad={handleClick}>
                    Sustainability{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link
                    to="/technology"
                    className="nav-link"
                    onClick={clickOpen}
                    onLoad={handleClick}
                >
                    Technology{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link to="/news/" className="nav-link" onClick={clickOpen} onLoad={handleClick}>
                    News{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link to="/careers/" className="nav-link" onClick={clickOpen} onLoad={handleClick}>
                    Careers{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <Link to="/contact/" className="nav-link" onClick={clickOpen} onLoad={handleClick}>
                    Contact{" "}
                    <img
                        src={darkTheme ? navArrowWhite : navArrow}
                        className="nav-link__arrow"
                        alt="nav link icon"
                    />{" "}
                </Link>
                <img src={navBottom} className="navImgBottom" alt="navigation bottom" />
            </nav>
        </>
    )
}

export default Navbar
