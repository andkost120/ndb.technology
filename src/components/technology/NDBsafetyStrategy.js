import React from "react"
import Container from "../Container"
import NDBWrapper from "../wrapper"

const NDBsafetyStrategy = ({ id, style }) => {
  return (
    <NDBWrapper>
      <div id={id} className={`technology__gridOverlay ${style && style}`}>
        <Container>
          {" "}
          <div className="gridOverlay__head">
            <p className="grid-title">NDB Safety Strategy</p>
            <p className="grid-desc">
            According to three main safety strategies, the NDB has been built to fulfill the international nuclear safety standards associated with systems, equipment, or materials.{" "}
            </p>
          </div>
        </Container>
        <div className="gridOverlay__content smallGrid">
          <div className="gridOverlay__item ">
            <p>
            The key principle of DiD is to create multiple independent and protective layers of defense to compensate for any NDB potential human and mechanical failures. The stacks and the source are coated with a layer of polycrystalline diamond (PCD), which is known for being the most thermally conductive material. It also can contain radiation within the device and is the hardest material, twelve times tougher than stainless steel. This makes our product extremely robust and tamperproof.
            </p>
            <div className="overlay top left">
              <p className="overlay-title">Defence in Depth Strategy (DiD)</p>
              {/* <span>Title</span> */}
            </div>
          </div>
          <div className="gridOverlay__item">
            <p>
            A featured barrier integrity safety design guard against a release of radioactivity to the environment and public covers the three most important aspects of protection: thermal, mechanical, and radiation.
            </p>
            <div className="overlay top left">
              <p className="overlay-title">Multi Barriers Safety Features</p>
            </div>
          </div>
          <div className="gridOverlay__item">
            <p>
            NDB uses an ion implantation mechanism called a "lock-in system", which prevents access to radioactive material. This increases usability by meeting consumer safety requirements.
            </p>
            <div className="overlay top left">
              <p className="overlay-title">Lock-in System</p>
            </div>
          </div>
        </div>
      </div>
    </NDBWrapper>
  )
}

export default NDBsafetyStrategy
