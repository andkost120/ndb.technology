/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React, { useEffect, useRef, useState } from "react"
import Container from "../../../components/Container"
import { EnergyDistributionContent } from "../../../utilities/content/dep"
/* -------------------------------------------------------------------------- */
/*                            Functional Component                            */
/* -------------------------------------------------------------------------- */
export default function EnergyDistribution() {
    /* -------------------------------------------------------------------------- */
    /*                                 Containers                                 */
    /* -------------------------------------------------------------------------- */
    const cell1 = useRef()
    const cell2 = useRef()
    const cell3 = useRef()
    const [currentEnergyIndicator, setCurrentEnergyIndicator] = useState(0)
    /* -------------------------------------------------------------------------- */
    /*                                   Methods                                  */
    /* -------------------------------------------------------------------------- */
    const activateItem = index => {
        setCurrentEnergyIndicator(index)
    }

    const animatePageTitleSection = () => {
        const observer = new IntersectionObserver(
            entries => {
                const [entry] = entries
                const value = Number(entry.target.attributes.value.value)
                if (entry.isIntersecting) setCurrentEnergyIndicator(value)
            },
            {
                root: null,
                threshold: 0.5,
                rootMargin: "0px 0px -60% 0px",
            }
        )
        observer.observe(cell1.current)
        observer.observe(cell2.current)
        observer.observe(cell3.current)
    }
    useEffect(() => {
        animatePageTitleSection()
    }, [])
    /* -------------------------------------------------------------------------- */
    /*                                   Render                                   */
    /* -------------------------------------------------------------------------- */
    return (
        <Container>
            <div className="py-5 energy-distribution">
                <h2 className="text-center font-weight-bold mb-5">
                    Fair energy distribution and security
                </h2>
                {EnergyDistributionContent?.map((item, index) => {
                    return (
                        <div className="text-center" key={item.id}>
                            <img
                                ref={item.id == 0 ? cell1 : item.id == 1 ? cell2 : cell3}
                                value={item.id}
                                src={item.emptyEnergyImgage}
                                className={`img-fluid pointer energy-image-base ${
                                    currentEnergyIndicator === index ? "opacity-0" : "opacity-1"
                                }`}
                                alt="Empty Energy BluePrint"
                                onClick={() => activateItem(index)}
                            />
                            <img
                                src={item.filledEnergyImage}
                                className={`img-fluid pointer energy-image-overlay ${
                                    currentEnergyIndicator === index ? "opacity-1" : "opacity-0"
                                }`}
                                alt="Energy"
                            />
                            <div
                                className={`${
                                    currentEnergyIndicator === index
                                        ? "open-item-content"
                                        : "close-item-content"
                                }`}
                            >
                                <h3 className="text-center mt-2 text-uppercase">{item.title}</h3>
                                <p className="text-center col-lg-7 mx-auto mt-4">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}
