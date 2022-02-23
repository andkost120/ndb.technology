//Dependencies
import React, { useEffect, useRef, useState } from "react"
import { EnergyRowContent } from "../../../utilities/content/dep"

export default function EnergyRow() {
    //Containers
    const [energyRowIndicator, setEnergyRowIndicator] = useState(0)
    const [energyRowInditatorOnMobile, setEnergyRowInditatorOnMobile] = useState(0)
    const [animation, setAnimation] = useState(true)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const timeout = useRef(null)
    const energyCellReferencesOnMobile = [
        { cellReference: useRef() },
        { cellReference: useRef() },
        { cellReference: useRef() },
        { cellReference: useRef() },
        { cellReference: useRef() },
        { cellReference: useRef() },
    ]

    //Methods
    const stopAnimationAndChangeContent = selectedItemId => {
        setAnimation(false)
        setEnergyRowIndicator(selectedItemId)
        clearTimeout(timeout.current)
    }

    const animateOnMobile = () => {
        const observer = new IntersectionObserver(
            entries => {
                const [entry] = entries
                const value = Number(entry.target.attributes.value.value)
                console.log(value)
                if (entry.isIntersecting) setEnergyRowInditatorOnMobile(value)
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: "0px 0px -60% 0px",
            }
        )
        energyCellReferencesOnMobile.forEach(item => observer.observe(item.cellReference.current))
    }

    useEffect(() => {
        animateOnMobile()
        setTitle(EnergyRowContent[energyRowIndicator].title)
        setDescription(EnergyRowContent[energyRowIndicator].description)
        if (animation)
            timeout.current = setTimeout(() => {
                if (energyRowIndicator < 5) return setEnergyRowIndicator(energyRowIndicator + 1)
                return setEnergyRowIndicator(0)
            }, 1500)
    }, [energyRowIndicator])

    //Render
    return (
        <>
            <div className="d-none d-lg-block">
                <div className="row col-lg-8 mx-auto energy-row">
                    {EnergyRowContent?.map(item => {
                        return (
                            <div className="col-lg-2 p-0 text-center">
                                <img
                                    src={item.emptyEnergyImgage}
                                    className={`pointer inactive-item ${
                                        item.id === energyRowIndicator ? "d-none" : "d-block"
                                    }`}
                                    onClick={() => stopAnimationAndChangeContent(item.id)}
                                    alt="Energy"
                                />
                                <img
                                    src={item.filledEnergyImage}
                                    className={`pointer active-item ${
                                        item.id === energyRowIndicator ? "d-block" : "d-none"
                                    }`}
                                    alt="Energy"
                                />
                            </div>
                        )
                    })}
                </div>
                <div className="row col-lg-8 mx-auto energy-row mb-5 pb-5">
                    <h2 className="text-center col-12 font-weight-bold text-dark mt-4">{title}</h2>
                    <h3 className="text-center col-8 font-weight-normal mt-4 mx-auto lh-sm energy-row-description">
                        {description}
                    </h3>
                </div>
            </div>
            <div className="d-block d-lg-none">
                <div className="col-12 mx-auto">
                    <div className="pb-5 energy-distribution">
                        {EnergyRowContent?.map((item, index) => {
                            return (
                                <div className="text-center">
                                    <img
                                        src={item.emptyEnergyImgage}
                                        value={item.id}
                                        ref={energyCellReferencesOnMobile[index].cellReference}
                                        className={`img-fluid energy-image-base  ${
                                            energyRowInditatorOnMobile === index
                                                ? "opacity-0"
                                                : "opacity-1"
                                        }`}
                                        alt="Energy"
                                    />
                                    <img
                                        src={item.filledEnergyImage}
                                        className={`img-fluid energy-image-overlay ${
                                            energyRowInditatorOnMobile === index
                                                ? "opacity-1"
                                                : "opacity-0"
                                        }`}
                                        alt="Energy"
                                    />
                                    <div>
                                        <h4 className="text-center text-dark mt-4 text-uppercase">
                                            {item.title}
                                        </h4>
                                        <p className="text-center col-lg-7 mx-auto mt-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
