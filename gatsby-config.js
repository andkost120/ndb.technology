require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
const GATSBY_ANALYTIC_KEY = "UA-129911168-1"
module.exports = {
    siteMetadata: {
        title: `NDB`,
        description: `NDB: Nano Diamond Battery is an innovative energy generator and storage that redefines and revolutionizes the battery as we know it.`,
        author: `NDB`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: "src/assets/images/logo.png",
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown-pages`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `carousel`,
                path: `${__dirname}/src/markdown-pages/carousel`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                footnotes: true,
                gfm: true,
                plugins: [],
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [GATSBY_ANALYTIC_KEY],
                gtagConfig: {
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
    ],
}
