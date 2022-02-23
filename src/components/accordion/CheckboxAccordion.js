import React, { useState } from "react"

import chevronRight from "../../assets/images/icons/chevronRight.png"
import plusIconWhite from "../../assets/images/icons/plusIconWhite.png"
import checkboxIcon from "../../assets/images/icons/checkIcon.png"

const CheckboxAccordion = ({
  data,
  accordionTitle,
  style,
  darkTheme,
  type,
}) => {
  const [clicked, setClicked] = useState(false)
  const [checkedState, setCheckedState] = useState(
    new Array(data.length).fill(false)
  )

  const handleOnChange = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    )

    setCheckedState(updatedCheckedState)
  }
  const toggle = () => {
    setClicked(!clicked)
  }

  return (
    <div className={` dropdown-section  w-100 ${style}`}>
      <div
        className={`dropdown-section__title `}
        onClick={toggle}
      >
        <p>Query</p>
        <img
          src={darkTheme ? plusIconWhite : chevronRight}
          className={`title-icon ${clicked ? " rotate-180" : ""}`}
          alt=""
        />
      </div>
      {clicked === true ? (
        <div
          className=" dropdown-section__wrapper"
        >
          {data.map((item, index) => {
            return (
              <>
                <div className="dropdown-section__item" key={index}>
                  <label className="w-100">
                    <span>{item}</span>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={item}
                      value={item}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />

                    <img
                      src={checkboxIcon}
                      className={`${checkedState[index] ? "opacity-1" : "opacity-0"
                        }`}
                      alt="checkboxIcon"
                    />
                  </label>
                </div>
              </>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default CheckboxAccordion
