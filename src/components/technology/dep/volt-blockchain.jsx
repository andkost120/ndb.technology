import React from "react"
import Container from "../../Container"
import voltTokenImage from "../../../assets/images/technology/dep/volt-blockchain.svg"

export default function VoltBlockchain() {
    return (
        <Container>
            <div className="py-5 my-5">
                <h1 className="text-center font-weight-bold mt-5">VOLT Blockchain</h1>
                <h3 className="text-center text-uppercase text-green mt-3">
                    The currency of energy
                </h3>
                <div className="col-lg-3 col-7 mx-auto mt-4 text-center">
                    <img src={voltTokenImage} className="img-fluid mx-auto" alt="Energy" />
                </div>
                <h2 className="text-center text-uppercase my-4">
                    automated, fast, and real-time settlements
                </h2>
                <p className="text-center col-lg-10 mx-auto">
                    The VOLT algorithm matches the market's supply and demand to maximize the
                    welfare of all market players while enabling the trading of market products with
                    and without inter-temporal dependency.
                    <br />
                    <br />
                    While VOLT's value varies, DEP allows the users to pay/receive according to
                    their bidding prices.
                </p>
            </div>
        </Container>
    )
}
