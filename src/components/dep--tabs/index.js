import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

// Icons
import IconCell from "../../assets/icons/technology/tabs/icon-cell.svg"
import IconDEP from "../../assets/icons/technology/tabs/icon-dep.svg"
import IconVolta from "../../assets/icons/technology/tabs/icon-volta.svg"
import IconChantico from "../../assets/icons/technology/tabs/icon-chantico.svg"
import IconMaterials from "../../assets/icons/technology/tabs/icon-materials.svg"

import IconCellDark from "../../assets/icons/technology/tabs/icon-cell--dark.svg"
import IconDEPDark from "../../assets/icons/technology/tabs/icon-dep--dark.svg"
import IconVoltaDark from "../../assets/icons/technology/tabs/icon-volta--dark.svg"
import IconChanticoDark from "../../assets/icons/technology/tabs/icon-chantico--dark.svg"
import IconMaterialsDark from "../../assets/icons/technology/tabs/icon-materials--dark.svg"
import { treemapBinary } from "d3-hierarchy"

const Tabs = ({ darkMode }) => {
    const [isTechnology, setIsTechnology] = useState(false)

    useEffect(() => {
        const {
            location: { pathname },
        } = window

        if (pathname === "/technology/") {
            setIsTechnology(true)
        }
    }, [])

    // Places 'active' tab in the middle of the screen
    useEffect(() => {
        const tabsWrapper = document.getElementById("depTabs")
        const activeTab = document.querySelector("#depTabs > .tab--active")

        if (activeTab && tabsWrapper) {
            tabsWrapper.scrollLeft =
                activeTab.offsetLeft - (window.innerWidth - activeTab.clientWidth) / 2
        }
    }, [])

    const tabs = [
        {
            title: "Cell",
            url: "/technology",
            background: IconCell,
            backgroundDark: IconCellDark,
            partiallyActive: false,
        },
        {
            title: "Chantico",
            url: "/technology/chantico",
            background: IconChantico,
            backgroundDark: IconChanticoDark,
            partiallyActive: true,
        },
        {
            title: "Volta",
            url: "/technology/volta",
            background: IconVolta,
            backgroundDark: IconVoltaDark,
            partiallyActive: true,
        },
        {
            title: "DEP",
            url: "/technology/dep",
            background: IconDEP,
            backgroundDark: IconDEPDark,
            partiallyActive: true,
        },
        {
            title: "Advanced Materials",
            url: "/technology/advanced-materials",
            background: IconMaterials,
            backgroundDark: IconMaterialsDark,
            partiallyActive: true,
        },
    ]

    return (
        <div id="depTabs" className={`dep__tabs ${darkMode && "dep__tabs--dark"}`}>
            {tabs.map(tab => {
                if (tab.partiallyActive) {
                    return (
                        <Link
                            to={tab.url}
                            className="tab"
                            activeClassName="tab--active"
                            partiallyActive={true}
                            style={{
                                width: `${100 / tabs.length}%`,
                                backgroundImage: `url(${
                                    darkMode ? tab.backgroundDark : tab.background
                                })`,
                            }}
                        >
                            {tab.title}
                        </Link>
                    )
                } else if (isTechnology) {
                    return (
                        <Link
                            to={tab.url}
                            className="tab tab--active"
                            activeClassName="tab--active"
                            style={{
                                width: `${100 / tabs.length}%`,
                                backgroundImage: `url(${
                                    darkMode ? tab.backgroundDark : tab.background
                                })`,
                            }}
                        >
                            {tab.title}
                        </Link>
                    )
                } else {
                    return (
                        <Link
                            to={tab.url}
                            className="tab"
                            activeClassName="tab--active"
                            style={{
                                width: `${100 / tabs.length}%`,
                                backgroundImage: `url(${
                                    darkMode ? tab.backgroundDark : tab.background
                                })`,
                            }}
                        >
                            {tab.title}
                        </Link>
                    )
                }
            })}
        </div>
    )
}

export default Tabs
