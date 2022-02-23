import React from "react"
import NDBWrapper from "../wrapper"

const TechGridOverlay = () => {
  return (
    <NDBWrapper>
      <div className="technology__gridOverlay">
        <div className="gridOverlay__head"></div>
        <div className="gridOverlay__content">
          <div className="gridOverlay__item">
            <p>
            NDB aims at converting power from more than one type of radiation and therefore has a broad spectrum of radioisotopes to power its nuclear voltaic cell. It can achieve this feat by using a unique and flexible design structure compatible with all of its prospective radioisotopes. NDB technology will overcome the world’s energy source problems by safely generating electricity from nuclear waste or radioisotopes for years, ranging up to the hundreds. This makes NDB’s technology system the best market and environmentally friendly battery system.
            </p>
            <div className="overlay top left">
              <p className="overlay-title">The Power Source: Radioisotopes</p>
              <span></span>
            </div>
          </div>
          <div className="gridOverlay__item">
            <p>
            The individual thickness of the cell is one of the critical parameters as the energy produced can be deposited within the radioisotope region; this is called internal absorption. The thin-film profile exhibited by NDB allows radiation to be absorbed in the collector with minimal self-absorption in the emitter and transformed into usable energy by the converter. Due to its flexible design structure, this technology can take any shape per application.
            </p>
            <div className="overlay top left">
              <p className="overlay-title">Thin-film structure</p>
            </div>
          </div>
          <div className="gridOverlay__item">
            <p>
            The underlying principles that govern a nuclear voltaic cell are the conservation of energy and momentum. The kinetic energy of incident radiation is converted to electricity by a transducer resulting in an inelastic scattering reaction. At NDB, we have identified transducers that can theoretically exceed the efficiency of the previous generation nuclear batteries and operate at a wide power output range.
            </p>
            <div className="overlay top left">
              <p className="overlay-title">NDB T1</p>
              <span>Transducer</span>
            </div>
          </div>
          <div className="gridOverlay__item">
            <p>
            All radioisotopes are known to produce high amounts of heat. The strategic placement of the source and the NDB cells optimizes inelastic scattering within certain designated materials in the nuclear voltaic cell. This design also captures the heat and light due to the ionization of the electrons produced by the radioisotope and enables rapid conversion to usable electricity.
            </p>
            <div className="overlay top left">
              <p className="overlay-title">RC-RE system</p>
              <span>Rapid conversion from radiation to electricity</span>
            </div>
          </div>
          <div className="gridOverlay__item">
            <p>
            The utilization of radioactive waste is a subject which we are considering. At NDB, we are entering discussions that aim to reuse nuclear fuel by reprocessing and recycling to enable sustainability and promote a clean energy source in a safe and secure environment.
            </p>
            <div className="overlay top left">
              <p className="overlay-title">NDB recycling process</p>
            </div>
          </div>
        </div>
      </div>
    </NDBWrapper>
  )
}

export default TechGridOverlay
