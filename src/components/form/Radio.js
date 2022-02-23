import React, { Component } from "react"

export class Radio extends Component {
  state = {}

  render() {
    const { selected, onClick, onChange, text, value } = this.props
    return (
      <div
        className="modern-radio-container"
        onClick={() => {
          onClick(value)
          onChange(value)
        }}
      >
        <div
          className={`radio-outer-circle ${value !== selected && "unselected"}`}
        >
          <div
            className={`radio-inner-circle ${value !== selected && "unselected-circle"
              }`}
          />
        </div>
        <div className="helper-text">{value}</div>
      </div>
    )
  }
}

Radio.propTypes = {
}
