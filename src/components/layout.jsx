import React, { useEffect } from "react"
import PropTypes from "prop-types"
import "../assets/stylesheets/main.scss"
import Footer from "./footer"
import ToTop from "./to-top"

// Animations library
import Aos from "aos"
import "aos/dist/aos.css"

const Layout = ({ children, pageName, darkTheme }) => {
    let className = ""
    if (pageName) {
        className = `${pageName}`
    }
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 600,
        })
    }, [])

    return (
        <>
            <main className={className}>{children}</main>
            <ToTop />
            <Footer darkTheme={darkTheme} />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
