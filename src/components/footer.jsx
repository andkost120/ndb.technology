import React from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo-footer.svg"
import logoWhite from "../assets/images/logo-footerWhite.svg"
import arrow from "../assets/images/icons/arrowThin.svg"
import arrowWhite from "../assets/images/icons/arrowThinWhite.png"
import { LazyLoadImage } from "react-lazy-load-image-component"
import FooterSocialIcons from "./footer-social-icons"
import DesktopFooterSocialIcons from "./desktop-footer-social-icons"

const Footer = ({ darkTheme }) => {
    return (
        <footer className={`footer ${darkTheme}`}>
            <div className="left-side">
                <Link to="/">
                    <LazyLoadImage src={darkTheme ? logoWhite : logo} alt="footer logo" />{" "}
                    <span className={`logo-text ${darkTheme ? "text-white" : ""}`}>
                        ENERGY TECHNOLOGY-REINVENTED
                    </span>
                </Link>
                <div className={`address ${darkTheme ? "text-white" : ""}`}>
                    <span>50 California Street, Suite 1500</span>
                    <span>San Francisco</span>
                    <span>California 94111, USA</span>
                </div>
            </div>
            <div className="center-side">
                <div className="contact">
                    <div className="email ">
                        <span className={darkTheme ? "text-white" : ""}>Email</span>
                        <a
                            href="mailto:info@ndb.technology"
                            target="_blank"
                            rel="noreferrer"
                            className={darkTheme ? "text-white" : ""}
                        >
                            info@ndb.technology
                        </a>
                    </div>
                    <div className="phone">
                        <span className={darkTheme ? "text-white" : ""}>Phone</span>
                        <a className={darkTheme ? "text-white" : ""} href="tel:+1 650 (252)-0002">
                            +1 (650) 252-0002
                        </a>
                    </div>
                </div>
                <Link to="/contact/" className={`banner__button ${darkTheme ? "text-white" : ""}`}>
                    <LazyLoadImage src={darkTheme ? arrowWhite : arrow} alt="button arrow" />
                    <span>Contact us</span>
                </Link>
                <DesktopFooterSocialIcons darkTheme={darkTheme} />
            </div>
            <div className="right-side">
                <div className="footer-menu">
                    <Link className={darkTheme ? "text-white" : ""} to="/">
                        Home
                    </Link>
                    <Link className={darkTheme ? "text-white" : ""} to="/technology">
                        Technology
                    </Link>
                    <Link className={darkTheme ? "text-white" : ""} to="/company/">
                        Company
                    </Link>
                    <Link className={darkTheme ? "text-white" : ""} to="/sustain/">
                        Sustainability
                    </Link>
                    <Link className={darkTheme ? "text-white" : ""} to="/careers/">
                        Careers
                    </Link>
                </div>
            </div>
            <div className="info-footer">
                <div className={`copyright ${darkTheme ? "text-white" : ""}`}>
                    &copy; Voltamond SA {new Date().getFullYear()} ALL RIGHTS RESERVED.
                </div>
                <FooterSocialIcons darkTheme={darkTheme} />
                <div className="info">
                    <Link to="/sitemap/" className={darkTheme ? "text-white" : ""}>
                        SITEMAP
                    </Link>

                    <Link to="/terms/" className={darkTheme ? "text-white" : ""}>
                        TERMS
                    </Link>
                    <Link to="/policy/" className={darkTheme ? "text-white" : ""}>
                        POLICY
                    </Link>
                    <Link to="/news/presskit/" className={darkTheme ? "text-white" : ""}>
                        PRESS
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
