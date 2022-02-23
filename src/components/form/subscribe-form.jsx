import Select from "react-select"
import CustomButton from "../custom-button"
import React, { useRef, useState } from "react"
import success from "../../assets/images/icons/success.svg"
import envelope from "../../assets/images/icons/envelope.svg"
import step1 from "../../assets/images/icons/step1.svg"
import step2 from "../../assets/images/icons/step2.svg"
import step1Mobile from "../../assets/images/icons/step1Mobile.svg"
import step2Mobile from "../../assets/images/icons/step2Mobile.svg"
import NDBWrapper from "../wrapper"
import { relationships } from "./Data"
import ReactSelect from "./react-select"
import arrowGreen from "../../assets/images/icons/arrowGreen.svg"
import chevronRightGreen2 from "../../assets/images/icons/chevronRightGreen2.svg"

const SubscribeForm = () => {
    const STEPS_AMOUNT = 3
    const [formStep, setFormStep] = useState(0)
    const [openSuccessModal, setOpenSuccessModal] = useState(false)
    const [openErrorModal, setOpenErrorModal] = useState(false)
    const [stepOneError, setStepOneError] = useState(false)
    const [stepTwoError, setStepTwoError] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [countryName, setCountryName] = useState("")
    const [countryCode, setCountryCode] = useState("")
    const [countryAbbrv, setCountryAbbrv] = useState("")
    const [relationship, setRelationship] = useState("")
    const phoneData = `+${countryCode}-${phone}`
    const emailRef = useRef()
    const phoneRef = useRef()

    let data = {
        submittedAt: Date.now(),
        fields: [
            {
                name: "firstname",
                value: firstName,
            },
            {
                name: "lastname",
                value: lastName,
            },
            {
                name: "email",
                value: email,
            },
            {
                name: "country_region",
                value: countryName,
            },
            {
                name: "phone",
                value: phoneData,
            },
            {
                name: "intended_relationship",
                value: relationship,
            },
        ],
        context: {
            pageUri: "ndb.technology",
            pageName: "ndb.technology",
        },
    }

    const sendDataToHub = finalData => {
        var xhr = new XMLHttpRequest()
        var url = `https://api.hsforms.com/submissions/v3/integration/submit/7628932/269629d4-e963-487f-8500-12f70bf1e9b8`
        xhr.open("POST", url)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                setOpenSuccessModal(!openSuccessModal)
            } else if (xhr.readyState === 4 && xhr.status === 400) {
                setOpenErrorModal(!openErrorModal)
            } else if (xhr.readyState === 4 && xhr.status === 403) {
                setOpenErrorModal(!openErrorModal)
            } else if (xhr.readyState === 4 && xhr.status === 404) {
                setOpenErrorModal(!openErrorModal)
            }
        }
        xhr.send(finalData)
    }

    const handleSubmit = event => {
        event.preventDefault()
        setStepTwoError(true)
        const phoneValidate = /[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\.\/0-9]*$/
        if (!(phoneValidate.test(phone) && phone.length > 3 && relationship.length))
            return setStepTwoError(true)
        handleGoToNextStep()
        sendDataToHub(JSON.stringify(data))
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setCountryName("")
        setCountryCode("")
        setCountryAbbrv("")
        setRelationship("")
        setStepOneError(false)
        setStepTwoError(false)
        setTimeout(() => {
            setFormStep(0)
            setOpenSuccessModal(false)
        }, 2000)
    }

    const handleGoToNextStep = () => setFormStep(current => current + 1)

    const handleGoBackToPreviousStep = () => setFormStep(current => current - 1)

    let stepImg = {}
    let stepImgMobile = {}
    if (formStep === 1) {
        stepImg = step1
        stepImgMobile = step1Mobile
    } else if (formStep === 2) {
        stepImg = step2
        stepImgMobile = step2Mobile
    } else {
        stepImg = ""
    }
    const selectStyles = {
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
        placeholder: base => ({
            ...base,
            fontSize: "1.125rem",
            color: "#959595",
        }),
        singleValue: base => ({
            ...base,
            color: "#959595",
            fontSize: "1.125rem",
        }),
        valueContainer: base => ({ ...base, borderRadius: "0" }),
    }
    const stepOneToStepTwo = e => {
        e.preventDefault()
        const emailValidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (firstName.length > 2 && lastName.length > 2 && emailValidate.test(email)) {
            setStepOneError(false)
            return handleGoToNextStep()
        }
        return setStepOneError(true)
    }
    return (
        <NDBWrapper>
            <div className="subscribe-wrapper">
                <form className={`form-section subscribe ${formStep === 0 && "mt-0"}`}>
                    <div className="steps">
                        {formStep < STEPS_AMOUNT && (
                            <>
                                {formStep !== 0 && (
                                    <div className="stepNumber">
                                        Step {formStep} of {STEPS_AMOUNT - 1}
                                    </div>
                                )}
                                <div className="images">
                                    <img
                                        src={stepImg}
                                        className={`${
                                            formStep === 0 || formStep === 3 ? "opacity-0" : ""
                                        } mobile-hide`}
                                        alt="step1"
                                    />
                                    <img
                                        src={stepImgMobile}
                                        className={`${
                                            formStep === 0 || formStep === 3 ? " opacity-0" : ""
                                        } mobile-show`}
                                        alt="step1"
                                    />
                                </div>
                            </>
                        )}
                    </div>

                    {formStep === 0 && (
                        <div className={`${formStep !== 0 && "hide"} subscribeHome`}>
                            <img src={envelope} alt="green arrow" className="icon" />
                            <p className="subscribe-title">Subscribe to our newsletter</p>
                            <p className="subscribe-desc">Be the first to know everything</p>
                            <CustomButton
                                buttonTitle="Subscribe"
                                buttonType="button"
                                buttonImg={arrowGreen}
                                flex="flex-center"
                                textAlign="text-center"
                                buttonColor="text-green"
                                onClick={handleGoToNextStep}
                            />
                        </div>
                    )}
                    {formStep === 1 && (
                        <>
                            <p className={`${stepOneError ? "errorMessage" : "opacity-0 "}  `}>
                                Please fill in the following fields:
                            </p>
                            <div className={`${formStep !== 1 && "hide"}  form-section__item`}>
                                {" "}
                                <div className="subscribeStep1">
                                    <input
                                        name="firstName"
                                        type="text"
                                        value={firstName}
                                        onChange={e => setFirstName(e.target.value)}
                                        placeholder="First Name *"
                                    />{" "}
                                    <input
                                        name="lastName"
                                        type="text"
                                        value={lastName}
                                        onChange={e => setLastName(e.target.value)}
                                        placeholder="Last Name *"
                                    />{" "}
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    ref={emailRef}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    placeholder="Email Address *"
                                />{" "}
                                <div className="buttons">
                                    <button
                                        onClick={stepOneToStepTwo}
                                        type="button"
                                        className="buttonStep1 nextButton"
                                        style={{ margin: "1rem auto" }}
                                    >
                                        <span>Next</span>
                                        <img src={chevronRightGreen2} alt="button step logo" />
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                    {formStep === 2 && (
                        <>
                            <p className={`${stepTwoError ? "errorMessage" : "opacity-0 "}  `}>
                                Please fill in the following fields:
                            </p>
                            <div className={`${formStep !== 2 && "hide"} phone-section`}>
                                <div className="select-wrap">
                                    <ReactSelect
                                        className="reactSelect"
                                        setCountryCode={setCountryCode}
                                        setCountryName={setCountryName}
                                        countryCode={countryCode}
                                        countryName={countryName}
                                    />
                                </div>

                                <div className="country-code-phone">
                                    <span>+{countryCode}</span>
                                    <input
                                        name="phone"
                                        type="text"
                                        ref={phoneRef}
                                        onChange={e => setPhone(e.target.value)}
                                        placeholder="Phone Number *"
                                        maxLength="20"
                                        minLength="5"
                                    />
                                </div>
                            </div>
                            <div className={`${formStep !== 2 && "hide"} form-section__item`}>
                                <Select
                                    name="relationship"
                                    value={{
                                        label: `${
                                            relationship === ""
                                                ? "Intended Relationship *"
                                                : relationship
                                        } `,
                                        value: `${relationship}`,
                                    }}
                                    styles={selectStyles}
                                    onChange={e => setRelationship(e.value)}
                                    placeholder="Intended Relationship *"
                                    className="react-select no-search-icon"
                                    classNamePrefix="react-select"
                                    options={relationships.map((item, index) => ({
                                        label: `${item}`,
                                        value: `${item}`,
                                        key: index,
                                    }))}
                                />
                            </div>

                            <div className="buttons">
                                <button
                                    onClick={handleGoBackToPreviousStep}
                                    type="button"
                                    className="buttonPrev buttonStep1"
                                >
                                    <img src={chevronRightGreen2} alt="button step logo" />
                                    <span>Previous</span>
                                </button>
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className=" buttonStep1 submitButton"
                                >
                                    <span>Subscribe</span>
                                    <img src={chevronRightGreen2} alt="button step logo" />
                                </button>
                            </div>
                        </>
                    )}

                    {formStep === 3 && (
                        <div className={`${formStep !== 3 && "hide"} modal`}>
                            <div className="modal__content">
                                <img src={success} alt="success" />
                                <h2 className="">Success!</h2>
                                <p>You are now subscribed to our newsletter</p>
                            </div>
                        </div>
                    )}
                    <div className={formStep > 0 ? "hide" : "opacity-0 steps"}>
                        {formStep < STEPS_AMOUNT && (
                            <>
                                {formStep !== 0 && (
                                    <div className="stepNumber">
                                        Step {formStep} of {STEPS_AMOUNT - 1}
                                    </div>
                                )}
                                <div className="images">
                                    <img
                                        src={stepImg}
                                        className={`${
                                            formStep === 0 || formStep === 3 ? "hide" : ""
                                        } mobile-hide`}
                                        alt="step1"
                                    />
                                    <img
                                        src={stepImgMobile}
                                        className={`${
                                            formStep === 0 || formStep === 3 ? " opacity-0" : ""
                                        } mobile-show`}
                                        alt="step1"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </NDBWrapper>
    )
}

export default SubscribeForm
