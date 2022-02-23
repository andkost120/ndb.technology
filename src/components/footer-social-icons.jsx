import React from "react"

//facebook
import facebook from "../assets/images/icons/facebook.svg"
import facebookWhite from "../assets/images/icons/facebookWhite.svg"

//youtube
import youtube from "../assets/images/icons/youtube.svg"
import youtubeWhite from "../assets/images/icons/youtubeWhite.svg"

//instagram
import instagram from "../assets/images/icons/instagram.svg"
import instagramWhite from "../assets/images/icons/instagramWhite.svg"

//linkedIn
import linkedin from "../assets/images/icons/in.svg"
import linkedinWhite from "../assets/images/icons/linkedinWhite.svg"

//twitter
import twitter from "../assets/images/icons/twitter.svg"
import twitterWhite from "../assets/images/icons/twitterWhite.svg"

//discord
import discord from "../assets/images/icons/discord.svg"
import whiteDiscord from "../assets/images/icons/whiteDiscord.svg"

//telegram
import telegram from "../assets/images/icons/telegram.svg"
import whiteTelegram from "../assets/images/icons/whiteTelegram.svg"

const FooterSocialIcons = ({ darkTheme }) => {
    const SocialIconsData = [
        {
            url: "https://www.linkedin.com/company/ndbtechnology/mycompany/",
            whiteIcon: linkedinWhite,
            icon: linkedin,
            alt: "linkedin",
        },
        {
            url: "https://twitter.com/ndbtechnology",
            whiteIcon: twitterWhite,
            icon: twitter,
            alt: "twitter",
        },
        {
            url: "https://discord.gg/w8DvXCNbyU",
            whiteIcon: whiteDiscord,
            icon: discord,
            alt: "discord",
        },
        {
            url: "https://www.facebook.com/ndbtechnology",
            whiteIcon: facebookWhite,
            icon: facebook,
            alt: "facebook",
        },
        {
            url: "https://www.youtube.com/ndbplus",
            whiteIcon: youtubeWhite,
            icon: youtube,
            alt: "youtube",
        },
        {
            url: "htpp://t.me/ndbplus",
            whiteIcon: whiteTelegram,
            icon: telegram,
            alt: "telegram",
        },
    ]
    return (
        <div className="social d-flex d-sm-none">
            {SocialIconsData.map(item => {
                return (
                    <a href={item.url} target="_blank">
                        <img src={darkTheme ? item.whiteIcon : item.icon} alt={item.alt} />
                    </a>
                )
            })}
        </div>
    )
}

export default FooterSocialIcons
