import Select from "react-select"
import React, { Component } from "react"
import { CountriesList } from "../../utilities/data/countries"

class ReactSelect extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectOptions: [],
            id: "",
            name: "",
            countryCode: "",
        }
    }
    selectStyles = {
        container: base => ({
            ...base,
            width: "100%",
            height: "auto",
        }),

        control: (base, state) => ({
            ...base,
            width: "100%",
            height: "auto",
            outline: "none",
            borderRadius: 0,
            backgroundColor: "transparent",
            ":hover": {
                borderColor: "hsl(0, 0%, 80%)",
            },
        }),
        indicatorSeparator: base => ({ ...base, display: "none" }),
        singleValue: (base, state) => ({
            ...base,
            fontSize: "1.125rem",
        }),
        input: base => ({
            ...base,
            color: "#959595",
            fontSize: "1.125rem",
            padding: 0,
            margin: 0,
        }),
        menu: base => ({ ...base, outline: "1px solid gray", borderRadius: "0" }),

        option: (base, state) => ({
            ...base,
            ":hover": {
                borderColor: "rgba(7, 55, 98, 0.23)",
            },
            backgroundColor: state.isFocused ? "#f8f8f8" : "none",
            color: "#959595",
            padding: "0 10px",
            fontSize: "1.125rem",
        }),
        placeholder: base => ({ ...base, fontSize: "1.125rem", color: "#959595" }),
        singleValue: base => ({ ...base, color: "#959595", fontSize: "1.125rem" }),
        valueContainer: base => ({ ...base, borderRadius: "0" }),
    }

    getOptions() {
        const options = CountriesList.map(d => ({
            value: d.alpha2Code,
            label: d.name,
            countryCode: d.callingCodes[0],
        }))
        this.setState({ selectOptions: options }, () => {})
    }

    handleChange = e => {
        this.setState({ id: e.value, name: e.label, countryCode: e.countryCode }, () => {
            this.props.setCountryName(this.state.name)
            this.props.setCountryCode(this.state.countryCode)
        })
    }

    componentDidMount() {
        this.getOptions()
    }

    render() {
        const { className } = this.props
        return (
            <Select
                styles={this.selectStyles}
                options={this.state.selectOptions}
                onChange={this.handleChange}
                placeholder={this.props.selectTitle}
                className={className}
                classNamePrefix="react-select"
            />
        )
    }
}

export default ReactSelect
