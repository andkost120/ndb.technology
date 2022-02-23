import React from "react"
import circuit from "../../assets/images/technology/circuit2.svg"
import circuitMobile from "../../assets/images/technology/circuit2Mobile.svg"
import NDBWrapper from "../wrapper"
import Accordion from "../accordion/Accordion"
import { ndbCircuitSection } from "../accordion/Data"

const NDBdifference = ({ width, marginBottom, id }) => {

  const circuitData = [
    <>
      NDB generates electricity similar to a solar cell but using radiation from
      radioactive decay instead of sunlight. It would be possible also to store
      the energy from the radiation.
    </>,
    <>
      The NDB battery generally consists of three main components: isotope,
      transducer, and storage unit.
    </>,
    <>
      The isotope decays and emits radiation which converts into electricity in
      the transducer. The storage unit stores the excess energy for future
      usage.
    </>,
    <>
      Where a chemical battery needs external power to recharge it, NDB is an
      independent power source in itself.
    </>,
    <>
      Depending on its capacity, the chemical battery can only contain a certain
      amount of energy. In contrast, an NDB can provide energy until the end of
      its used isotopic lifetime.
    </>,
    <>
      The NDB cell stores the excess charge created from the radiation in a
      built-in charge storage device, so the charge generated while idle is
      appropriately utilized.
    </>,
    <>
      The cell can theoretically last longer than typical lithium-ion and
      silver-oxide batteries of comparable volume and power.
    </>,
  ]
  return (
    <NDBWrapper width={width}>
      <p className="circuit-title">NDB versus Standard Batteries</p>
      <div
        id={id}
        className={`technology__ndb-circuit ${marginBottom && "mb-100"}`}
      >
        <div className="left">
          <img src={circuit} alt="circuit background" className="mobile-hide" />
          <img
            src={circuitMobile}
            alt="circuit background"
            className="mobile-show"
          />
        </div>
        <div className="right">
          <p className="mobile-show">
            We can see that, unlike other battery types, the NDB source does not
            wear out over time.
          </p>
          {circuitData.map((item, index) => (
            <div className="circuit__gridItem mobile-hide" key={index}>{item}</div>
          ))}
        </div>
        <Accordion
          accordionTitle=""
          data={ndbCircuitSection}
          darkTheme="true"
          mobile="mobile-show"
        />
      </div>
      <p className="circuit-fineprint mobile-hide">
        We can see that, unlike other battery types, the NDB source does not
        wear out over time.
      </p>
    </NDBWrapper>
  )
}

export default NDBdifference
