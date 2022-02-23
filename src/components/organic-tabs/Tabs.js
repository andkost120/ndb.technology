import React, { useState } from "react"
import TabButtons from "./TabButtons"

const Tabs = ({ children, buttonsName, margin, noImage }) => {
    const label = children[0].props.label

    const [activeTab, setActiveTab] = useState(label)

    const changeTab = tab => setActiveTab(tab)

    let content
    let buttons = []

    return (
        <div className={`tabs-wrapper ${noImage && "gray-background"}`}>
            {children.map(child => {
                buttons.push(child.props.label)
                if (child.props.label === activeTab) {
                    content = child.props.children
                }
            })}
            <TabButtons
                activeTab={activeTab}
                buttons={buttons}
                changeTab={changeTab}
                buttonsName={buttonsName}
                margin={margin}
            />
            <div className="tab-content">{content}</div>
        </div>
    )
}

export default Tabs
