import React from 'react'
import Arrow from '../assets/images/icons/arrowThin.svg'

export default function AppButton({ icon, name = "Button", link = '#', btnStyle = {}, arrowStyle = {}, nameStyle = {}, disabled}) {
    return (
        <a href={link} className={ disabled ? 'ndb-btn disabled' : `ndb-btn`} style={btnStyle} disabled>
        <img
          src={icon ? icon : Arrow}
          alt="buttonImg"
          className="arrow"
          style={arrowStyle}
        />
        <div  className="name" style={nameStyle}>
          {name}
        </div>
      </a>
    )
}
