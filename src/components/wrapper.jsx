import React from "react"

const NDBWrapper = ({ width, children, style, mobile, id }) => {
    return (
        <div
            id={id && id}
            className={`ndb-wrapper ${width ? width : ""} ${style && style} ${mobile && mobile}`}
        >
            {children}
        </div>
    )
}

export default NDBWrapper
