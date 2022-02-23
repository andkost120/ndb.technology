import React from "react"
import Award1 from "../../assets/images/homepage/award-logo-1.svg"
import Award2 from "../../assets/images/homepage/award-logo-2.svg"
import Award3 from "../../assets/images/homepage/award-logo-3.svg"
export default function Awards() {
    return (
        <>
            <div className="bg-black px-lg-5 px-2 homepage-awards-section mt-lg-5">
                <div className="row">
                    <div className="col-lg-5 my-auto homepage-awards-label pl-3 d-lg-block d-none">
                        <p>Awards</p>
                    </div>
                    <div className="col-lg-7 col-12 row m-0">
                        <div className="col-4 p-0 text-lg-left text-center homepage-award-1">
                            <img src={Award1} className="img-fluid" alt="Award One Logo" />
                        </div>
                        <div className="col-4 p-0 text-lg-left text-center homepage-award-2 pl-lg-3">
                            <img src={Award2} className="img-fluid" alt="Award Two Logo" />
                        </div>
                        <div className="col-4 p-0 text-lg-left text-center homepage-award-3">
                            <img src={Award3} className="img-fluid" alt="Award Three Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
