import React, { useRef, useState } from "react"
import CustomButton from "../custom-button"
import success from "../../assets/images/icons/success.svg"
import error from "../../assets/images/icons/error.png"
import arrow from "../../assets/images/icons/arrow.svg"
import NDBWrapper from "../wrapper"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { investorCategoryData, potentialInvesments, radioButtonData, relationships } from "./Data"
import { Radio } from "./Radio"
import Select from "react-select"
import { CountriesList } from "../../utilities/data/countries"
import { GATSBY_RECAPTCHA_KEY } from "../../utilities/environment-variables"
const Form = ({ pageType, title, id }) => {
    const [openSuccessModal, setOpenSuccessModal] = useState(false)
    const [openErrorModal, setOpenErrorModal] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [phone, setPhone] = useState("")
    const [countries, setCountries] = useState(CountriesList)
    const [countryName, setCountryName] = useState("")
    const [countryCode, setCountryCode] = useState("")
    const [countryAbbrv, setCountryAbbrv] = useState("")
    const [relationship, setRelationship] = useState("")
    const [message, setMessage] = useState("")
    const [purpose, setPurpose] = useState("")
    const [company, setCompany] = useState("")
    const [acceptedTerms, setAcceptedTerms] = useState("")
    const phoneData = `+${countryCode}-${phone}`
    const [investorCategory, setInvestorCategory] = useState("")
    const [potentialInvestmentAmount, setPotentialInvestmentAmount] = useState("")
    const [exactInvestmentAmount, setExactInvestmentAmount] = useState("")
    const [criteria, setCriteria] = useState("")
    const [firstNameError, setFirstNameError] = useState(false)
    const [lastNameError, setLastNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [countryNameError, setCountryNameError] = useState(false)
    const [countryCodeError, setCountryCodeError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [relationshipError, setRelationshipError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [investorCategoryError, setInvestorCategoryError] = useState(false)
    const [potentialInvestmentError, setPotentialInvestmentError] = useState(false)
    const [acceptedTermsError, setAcceptedTermsError] = useState(false)
    const [selected, setSelected] = useState("")
    const emailRef = useRef()
    const phoneRef = useRef()

    let open = relationship === "Investor"
    let dataExpanded = {
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
                name: "linkedinbio",
                value: linkedin,
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
            {
                name: "investor_category",
                value: investorCategory,
            },
            {
                name: "potential_investment_amount",
                value: potentialInvestmentAmount,
            },
            {
                name: "if_possible_please_share_your_exact_intended_amount_of_investment",
                value: exactInvestmentAmount,
            },
            {
                name: "which_of_the_following_criteria_do_you_meet",
                value: criteria,
            },
            {
                name: "message",
                value: message,
            },
        ],
        context: {
            pageUri: "ndb.technology/contact",
            pageName: "ndb.technology/contact",
        },
    }

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
                name: "linkedinbio",
                value: linkedin,
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
            {
                name: "message",
                value: message,
            },
        ],
        context: {
            pageUri: "ndb.technology/contact",
            pageName: "ndb.technology/contact",
        },
    }

    // onPhoneChange
    const onPhoneChange = e => {
        let target = phoneRef.current.value
        let phoneValidate = /[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\.\/0-9]*$/
        setPhone(target)
        if (phoneValidate.test(target)) setPhoneError(false)
        else setPhoneError(true)
    }

    // onEmailChange
    const onEmailChange = e => {
        let emailData = emailRef.current.value
        let emailValidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        setEmail(emailData)

        if (emailValidate.test(emailData)) {
            setEmailError(false)
        } else {
            setEmailError(true)
        }
    }

    const validate = () => {
        if (firstName === "") setFirstNameError(true)
        else setFirstNameError(false)
        if (lastName === "") setLastNameError(true)
        else setLastNameError(false)

        if (!email.includes("@")) setEmailError(true)
        else setEmailError(false)

        if (phone === "") setPhoneError(true)
        else setPhoneError(false)

        if (countryCode === "") setCountryCodeError(true)
        else setCountryCodeError(false)

        if (countryName === "") setCountryNameError(true)
        else setCountryNameError(false)

        if (relationship === "") setRelationshipError(true)
        else setRelationshipError(false)

        if (message === "") setMessageError(true)
        else setMessageError(false)

        if (acceptedTerms === "") setAcceptedTermsError(true)
        else setAcceptedTermsError(false)

        if (
            firstNameError ||
            lastNameError ||
            emailError ||
            phoneError ||
            countryNameError ||
            countryCodeError ||
            messageError ||
            acceptedTermsError
        ) {
            return false
        } else {
            return true
        }
    }
    const validateExtended = () => {
        if (firstName === "") setFirstNameError(true)
        else setFirstNameError(false)

        if (lastName === "") setLastNameError(true)
        else setLastNameError(false)

        if (!email.includes("@")) setEmailError(true)
        else setEmailError(false)

        if (phone === "") setPhoneError(true)
        else setPhoneError(false)

        if (countryCode === "") setCountryCodeError(true)
        else setCountryCodeError(false)

        if (countryName === "") setCountryNameError(true)
        else setCountryNameError(false)

        if (relationship === "") setRelationshipError(true)
        else setRelationshipError(false)

        if (message === "") setMessageError(true)
        else setMessageError(false)

        if (investorCategory === "") setInvestorCategoryError(true)
        else setInvestorCategoryError(false)

        if (potentialInvestmentAmount === "") setPotentialInvestmentError(true)
        else setPotentialInvestmentError(false)

        if (acceptedTerms === false) setAcceptedTermsError(true)
        else setAcceptedTermsError(false)

        if (
            firstNameError ||
            lastNameError ||
            emailError ||
            phoneError ||
            countryNameError ||
            countryCodeError ||
            messageError ||
            relationshipError ||
            investorCategoryError ||
            potentialInvestmentError ||
            acceptedTermsError
        ) {
            return false
        } else {
            return true
        }
    }

    //api call to Hubspot form
    const sendDataToHub = finalData => {
        let url = `https://api.hsforms.com/submissions/v3/integration/submit/7628932/14d4b2fa-6cba-49a8-9488-891110f280a8`

        let xhr = new XMLHttpRequest()
        xhr.open("POST", url, true)
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
        // Sends the request
        xhr.send(finalData)
    }

    // HANDLE SUBMIT
    const onSubmit = event => {
        event.preventDefault()
        var isValid = open ? validateExtended() : validate()
        var final_data
        {
            open ? (final_data = JSON.stringify(dataExpanded)) : (final_data = JSON.stringify(data))
        }

        isValid && sendDataToHub(final_data)

        if (isValid) {
            setFirstName("")
            setLastName("")
            setEmail("")
            setLinkedin("")
            setPhone("")
            setCountryName("")
            setCountryCode("")
            setCountryAbbrv("")
            setRelationship("")
            setMessage("")
            setPurpose("")
            setCompany("")
            setAcceptedTerms(false)
            setPotentialInvestmentAmount("")
            setExactInvestmentAmount("")
            setCriteria("")
            setInvestorCategory("")
        }

        // Reset the modal to false
        setTimeout(() => {
            setOpenErrorModal(false)
            setOpenSuccessModal(false)
        }, 2000)
    }

    const dataChange = e => {
        const target = e.value
        const dataArr = target.split(",")
        setCountryName(dataArr[0])
        setCountryCode(dataArr[1])
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
        singleValue: base => ({ ...base, color: "#959595", fontSize: "1.125rem" }),
        valueContainer: base => ({ ...base, borderRadius: "0" }),
    }

    return (
        <NDBWrapper width="fullwidth">
            <GoogleReCaptchaProvider
                reCaptchaKey={GATSBY_RECAPTCHA_KEY}
                scriptProps={{
                    async: true,
                    defer: false,
                    appendTo: "head",
                    nonce: undefined,
                }}
            >
                <form id={id} className="form-section" onSubmit={onSubmit}>
                    <p className="form-title">{title}</p>

                    <div className="form-section__item">
                        {" "}
                        <input
                            name="firstName"
                            type="text"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="First Name *"
                            className={`${firstNameError && "borderError"}`}
                        />{" "}
                        <input
                            name="lastName"
                            type="text"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Last Name *"
                            className={`${lastNameError && "borderError"}`}
                        />
                    </div>
                    <div className="form-section__item">
                        {" "}
                        <input
                            name="email"
                            type="email"
                            value={email}
                            ref={emailRef}
                            onChange={onEmailChange}
                            placeholder="Email Address *"
                            className={`${emailError && "borderError"}`}
                        />{" "}
                        <input
                            name="linkedin"
                            type="text"
                            value={pageType === "news-kit" ? company : linkedin}
                            onChange={
                                pageType === "news-kit"
                                    ? e => setCompany(e.target.value)
                                    : e => setLinkedin(e.target.value)
                            }
                            placeholder={pageType === "news-kit" ? "Company" : "Linkedin"}
                        />
                    </div>
                    <div className="form-section__item">
                        <div className="select-wrap">
                            <Select
                                name="country"
                                onChange={dataChange}
                                styles={selectStyles}
                                placeholder="Country *"
                                className={`${countryNameError && "borderError"} react-select`}
                                classNamePrefix="react-select"
                                components={{ IndicatorSeparator: () => null }}
                                options={countries?.map(
                                    ({ name, alpha2code, callingCodes }, index) => ({
                                        label: name,
                                        value: `${name},${callingCodes[0]}`,
                                        key: index,
                                    })
                                )}
                            />
                        </div>

                        <div className="phone-section">
                            <div className="select-wrap">
                                <Select
                                    name="country_code"
                                    value={{
                                        label: `${countryName === "" ? "Code " : countryName} ${
                                            countryCode === "" ? "+()" : "+" + countryCode
                                        }`,
                                        value: `${countryName},${countryCode}`,
                                    }}
                                    styles={selectStyles}
                                    onChange={dataChange}
                                    placeholder="Code *"
                                    className={`${countryCodeError && "borderError"} react-select`}
                                    classNamePrefix="react-select"
                                    options={countries.map(
                                        ({ name, alpha2code, callingCodes }, index) => ({
                                            label: `${name} (+ ${callingCodes[0]})`,
                                            value: `${name},${callingCodes[0]}`,
                                            key: index,
                                        })
                                    )}
                                />
                            </div>
                            <div className="country-code-phone">
                                <input
                                    name="phone"
                                    type="text"
                                    ref={phoneRef}
                                    onChange={onPhoneChange}
                                    placeholder="Phone Number *"
                                    maxLength="20"
                                    className={`${phoneError && "borderError"}`}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-section__item">
                        <div className="select-wrap" id="relationship">
                            {/* Intended Relationship */}
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
                                className={`${
                                    relationshipError && "relationshipError"
                                } react-select no-search-icon`}
                                classNamePrefix="react-select"
                                options={relationships.map((item, index) => ({
                                    label: `${item}`,
                                    value: `${item}`,
                                    key: index,
                                }))}
                            />
                        </div>
                    </div>

                    {/* show if Investor chosen */}
                    <div className={`form-section__item investors ${open === false ? "hide" : ""}`}>
                        <div className="select-wrap span-column-2">
                            {/* Investor Category */}

                            <Select
                                name="inverstor_category"
                                value={{
                                    label: `${
                                        investorCategory === ""
                                            ? "Investor Category *"
                                            : investorCategory
                                    } `,
                                    value: `${investorCategory}`,
                                }}
                                styles={selectStyles}
                                onChange={e => setInvestorCategory(e.value)}
                                placeholder="Investor Category *"
                                className={`${
                                    investorCategoryError && "borderError"
                                } w-100  react-select no-search-icon`}
                                classNamePrefix="react-select"
                                options={investorCategoryData.map((item, index) => ({
                                    label: `${item}`,
                                    value: `${item}`,
                                    key: index,
                                }))}
                            />
                        </div>
                        <div className="select-wrap span-column-2">
                            <Select
                                name="potential_investor"
                                value={{
                                    label: `${
                                        potentialInvestmentAmount === ""
                                            ? "Potential investment amount *"
                                            : potentialInvestmentAmount
                                    } `,
                                    value: `${potentialInvestmentAmount}`,
                                }}
                                styles={selectStyles}
                                onChange={e => setPotentialInvestmentAmount(e.value)}
                                placeholder="Potential investment amount *"
                                className={`${
                                    potentialInvestmentError && "borderError"
                                } react-select no-search-icon`}
                                classNamePrefix="react-select"
                                options={potentialInvesments.map((item, index) => ({
                                    label: `${item}`,
                                    value: `${item}`,
                                    key: index,
                                }))}
                            />
                        </div>
                        <input
                            className="span-column-2 w-100"
                            name="investment-amount"
                            type="number"
                            value={exactInvestmentAmount}
                            onChange={e => setExactInvestmentAmount(e.target.value)}
                            placeholder="If possible please share your exact intended amount of investment (USD)"
                            style={{ padding: "10px" }}
                        />

                        <div className="radio-button-section span-column-2">
                            <span>
                                Which of the following criteria do you meet (Only applicable to US
                                Citizens or Residents):
                            </span>
                            <legend>
                                A “qualified investor” is defined in Rule 501 of Regulation D issued
                                pursuant to the Securities Act of 1933.
                            </legend>
                            {radioButtonData.map((item, index) => (
                                <label key={index}>
                                    <Radio
                                        value={item}
                                        selected={selected}
                                        onClick={setSelected}
                                        onChange={setCriteria}
                                    />
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="form-section__item">
                        <textarea
                            className={`${messageError && "borderError"} w-100`}
                            name={pageType === "news-kit" ? "purpose" : "message"}
                            cols="30"
                            rows="10"
                            value={pageType === "news-kit" ? purpose : message}
                            onChange={
                                pageType === "news-kit"
                                    ? e => setPurpose(e.target.value)
                                    : e => setMessage(e.target.value)
                            }
                            id="message"
                            placeholder={pageType === "news-kit" ? "Purpose" : "Message *"}
                        ></textarea>
                    </div>
                    <div className="form-section__item ">
                        <p className="span-column-2">
                            NDB Inc. is committed to protecting and respecting your privacy, and we
                            will only use your personal information to administer your account and
                            to provide the products and services, you requested from us. From time
                            to time, we would like to contact you about our products and services,
                            as well as other content that may be of interest to you. If you consent
                            to us contacting you for this purpose, please tick below to say how you
                            would like us to contact you:
                        </p>

                        <label className="span-column-2">
                            <input
                                className={`${acceptedTermsError && "borderError"}`}
                                name="acceptedTerms"
                                type="checkbox"
                                onChange={e => setAcceptedTerms(e.target.value)}
                            />
                            I accept the terms of service
                        </label>
                    </div>
                    <div className="form-section__item ">
                        <p className="span-column-2">
                            You can unsubscribe from these communications at any time. For more
                            information on how to unsubscribe, our privacy practices, and how we are
                            committed to protecting and respecting your privacy, please review our
                            Privacy Policy.
                        </p>
                        <p className="span-column-2">
                            By clicking submit below, you consent to allow NDB Inc. to store and
                            process the personal information submitted above to provide you the
                            content requested.
                        </p>
                    </div>
                    <CustomButton
                        buttonTitle="Submit"
                        buttonType="button"
                        buttonImg={arrow}
                        buttonLink="#"
                        flex="flex-left"
                        buttonWidth="w-20 mobile-w-40"
                        textAlign="text-left"
                    />
                </form>
                {openSuccessModal && (
                    <div className="contactForm modal">
                        <section className="modal__content ">
                            <img src={success} alt="success" />
                            <h2>Success!</h2>
                            <p>Your form was submitted</p>
                        </section>
                    </div>
                )}
                {openErrorModal && (
                    <div className="contactForm modal">
                        <section className="modal__content ">
                            <img src={error} alt="success" />
                            <h2>Error! Submission failed.</h2>
                            <p>Please try to subscribe again</p>
                        </section>
                    </div>
                )}
            </GoogleReCaptchaProvider>
        </NDBWrapper>
    )
}

export default Form
