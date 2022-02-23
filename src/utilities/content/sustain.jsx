/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */
import React from "react"
/* -------------------------------------------------------------------------- */
/*                    Sustain Page Images For Desktop View                    */
/* -------------------------------------------------------------------------- */
import A from "../../assets/images/sustainability/A.svg"
import B from "../../assets/images/sustainability/B.svg"
import C from "../../assets/images/sustainability/C.svg"
import D from "../../assets/images/sustainability/D.svg"
/* -------------------------------------------------------------------------- */
/*                     Sustain Page Images For Mobile View                    */
/* -------------------------------------------------------------------------- */
import AMobile from "../../assets/images/sustainability/AMobile.png"
import BMobile from "../../assets/images/sustainability/BMobile.png"
import CMobile from "../../assets/images/sustainability/CMobile.png"
import DMobile from "../../assets/images/sustainability/DMobile.png"
/* -------------------------------------------------------------------------- */
/*                          Sustain Page Grid Images                          */
/* -------------------------------------------------------------------------- */
import grid1 from "../../assets/images/sustainability/grid1.svg"
import grid2 from "../../assets/images/sustainability/grid2.svg"
import grid3 from "../../assets/images/sustainability/grid3.svg"
import grid4 from "../../assets/images/sustainability/grid4.svg"
import moneyImage from "../../assets/images/sustainability/money.png"
import image4 from "../../assets/images/sustainability/heartHands.svg"
import image1 from "../../assets/images/sustainability/abstractColor.svg"
import image2 from "../../assets/images/sustainability/leafHorizontal.png"
/* -------------------------------------------------------------------------- */
/*                  Sustain Page Grid Images For Mobile View                  */
/* -------------------------------------------------------------------------- */
import grid1Mobile from "../../assets/images/sustainability/grid1Mobile.svg"
import grid2Mobile from "../../assets/images/sustainability/grid2Mobile.svg"
import grid3Mobile from "../../assets/images/sustainability/grid3Mobile.svg"
import grid4Mobile from "../../assets/images/sustainability/grid4Mobile.svg"
/* -------------------------------------------------------------------------- */
/*                     Sustain Page Properties and Content                    */
/* -------------------------------------------------------------------------- */
export const SustainPageContent = {
    data1: {
        backgoundText1: "environ-",
        backgoundText2: "mental",
        NDBSectionTitle: "Vision",
        paragraphOverQuote1: (
            <>
                At NDB, we pursue sustainable innovation based on our
                sustainability strategy, including our community, environment,
                and social value throughout our business activities.{" "}
            </>
        ),
        paragraphOverQuote2: (
            <>
                We deliver advance, innovative, and green solutions for our
                environment and society. We aim to lead sustainable innovation
                across cultures.
            </>
        ),
        paragraphOverQuote3: (
            <>
                NDB is ready to take action to protect the environment and
                manage the various impacts of climate change
            </>
        ),
        quote:
            "“There’s no Innovation without taking into account: Sustainability, Accessibility, and Quality.”",
        paragraphUnderQuote1:
            "Building a sustainable business based on cutting-edge technologies is a significant challenge. Nevertheless, we remain determined to provide professional and outstanding services.",
    },
    data2: {
        backgoundText1: "health",
        backgoundText2: "and",
        NDBSectionTitle: "Our environmental, health and safety policy",
        paragraphUnderQuote1:
            "At NDB, we are committed to offering a safe and healthy workplace for all our employees, who are highly encouraged to use their judgment capacity to contribute effectively to its success and growth. To achieve this point, we strive to implement EH&S policy without sacrificing the attractiveness of our products in terms of quality, accessibility, and sustainability.",
    },

    data3: {
        backgoundText1: "social",
        backgoundText2: "partner-",
        NDBSectionTitle: "Corporate social responsibility",
        paragraphOverQuote1:
            "NDB aims to provide environmental value to our customers' lives and society in general. NDB corporate social activities as a green connection in Education, Energy, Ecology, and Economy.",
        paragraphOverQuote2:
            "Green education: NDB engages in youth education support activities to help in improving talent for the future of tech and the environment.",
        quote:
            "“We are educating young minds to start building tomorrow’s world.”",
        paragraphUnderQuote1:
            "At NDB, we want to help each individual reach their full potential in the hope that they will give back to communities worldwide and contribute to the greater good.",
    },
    data5: {
        backgoundText1: "ethics",
        NDBSectionTitle: "Code of Conduct",
        paragraphUnderQuote1:
            "NDB's Code of Conduct is one of the ways we apply NDB's values into practice. Our Code of Conduct recognizes that every activity we perform will be, and should be, measured against the highest possible standards of ethical business conduct.",
        paragraphUnderQuote2:
            "We expect all of our employees and Board members to know and follow our Code of Conduct. Failure to do so can be sanctioned with disciplinary action, including termination of employment.",
        paragraphUnderQuote3:
            "We expect our extended workforce, including temps, vendors, independent contractors, and others who may be temporarily assigned to perform work or services for NDB, to follow our Code of Conduct.",
    },
    data6: {
        backgoundText1: "compl-",
        NDBSectionTitle: "Integrity and Standards",
        paragraphUnderQuote1:
            "NDB has implemented a unique compliance activities management method and program led by a Compliance Officer. The Compliance Officer oversights the activities and plans in accordance with the national and international compliance standards. ",
        paragraphUnderQuote2:
            "NDB’s compliance program selects themes following priority control targets, enabling our Legal Team to evaluate risk factors, new regulations, and implementations. Our plan is also based on post-management monitoring, measuring, and evaluating performances.",
    },
    data7: {
        backgoundText1: "iance",
        NDBSectionTitle: "Compliance guidelines",
        paragraphUnderQuote1:
            "NDB is a multinational company expanding and conducting businesses across the world. Employees can perform their work through its Compliance Report without violating applicable laws and regulations such as internal and local regulations.",
    },
    cards1: [
        {
            cardTitle: "",
            cardContent: "Conduct yourself honestly and ethically",
            cardImage: A,
        },
        {
            cardTitle: "",
            cardContent:
                "Guidance to your daily activities within the workplace",
            cardImage: B,
        },
        {
            cardTitle: "",
            cardContent: "Understand what NDB expects from you.",
            cardImage: C,
        },
        {
            cardTitle: "",
            cardContent:
                "Prevention of any unethical, inappropriate, or illegal behavior from our workforce.",
            cardImage: D,
        },
    ],
    cards1Mobile: [
        {
            cardTitle: "",
            cardContent: "Conduct yourself honestly and ethically",
            cardImage: AMobile,
        },
        {
            cardTitle: "",
            cardContent:
                "Guidance to your daily activities within the workplace",
            cardImage: BMobile,
        },
        {
            cardTitle: "",
            cardContent: "Understand what NDB expects from you.",
            cardImage: CMobile,
        },
        {
            cardTitle: "",
            cardContent:
                "Prevention of any unethical, inappropriate, or illegal behavior from our workforce.",
            cardImage: DMobile,
        },
    ],
    gridItems: [
        {
            cardTitle: "",
            cardContent:
                "We aim to protect the environment through activities that preserve biodiversity",
            cardImage: image1,
            cardImageMobile: image1,
        },
        {
            cardTitle: "",
            cardContent:
                "Social activities to actively preserve the environment, such as clean-up weeks, plastic removal, and more.",
            cardImage: image2,
            cardImageMobile: image2,
        },
        {
            cardTitle: "",
            cardContent:
                "NDB leads the formation of a circular economy valuing the recycling of waste, hazardous, non-hazardous, and eco-friendly materials.",
            cardImage: moneyImage,
            cardImageMobile: moneyImage,
        },
        {
            cardTitle: "",
            cardContent:
                "A mentorship program in a rural or in an underprivileged environment for society leaders who want to improve their economy and society from a green point of view. ",
            cardImage: image4,
            cardImageMobile: image4,
        },
    ],
    cards2Mobile: [
        {
            cardTitle: "",
            cardContent:
                "Developing innovations that will have a limited impact on our environment during the life cycle of our products.",
            cardImage: grid1,
            cardImageMobile: grid1Mobile,
        },
        {
            cardTitle: "",
            cardContent:
                "Ensuring our products and operations comply or exceed local, national and international environmental requirements.",
            cardImage: grid2,
            cardImageMobile: grid2Mobile,
        },
        {
            cardTitle: "",
            cardContent:
                "Practicing eco-friendly management and implementing processes that allow the efficient use of our resources.",
            cardImage: grid3,
            cardImageMobile: grid3Mobile,
        },
        {
            cardTitle: "",
            cardContent:
                "Offering a workplace that protects the safety and health of our employees.",
            cardImage: grid4,
            cardImageMobile: grid4Mobile,
        },
    ],
}
