import Head from "next/head"

export default function HeadMetaTags ({pageTitle}) {
    if (pageTitle) pageTitle = ' | ' + pageTitle
    else pageTitle = ''
    return (
        <Head>
            <meta charSet="UTF-8"/>
            <meta lang="en"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            {/* Primary Meta Tags */}
            <title>Skyclo{pageTitle}</title>
            <meta name="title" content={"Conor's Website" + pageTitle}/>
            <meta name="description" content="Conor's interactive, online portfolio."/>

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.skyclo.dev/"/>
            <meta property="og:title" content={"Conor's Website" + pageTitle}/>
            <meta property="og:description" content="Conor's interactive, online portfolio."/>
            <meta property="og:image" content="https://www.skyclo.dev/images/og_thumbnail.png"/>

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:url" content="https://www.skyclo.dev/"/>
            <meta name="twitter:title" content={"Conor's Website" + pageTitle}/>
            <meta name="twitter:description" content="Conor's interactive, online portfolio."/>
            <meta name="twitter:image" content="https://www.skyclo.dev/images/og_thumbnail.png"/>

            <meta name="keywords" content="Skyclo, Conor Daly, Bryce Daly, Programming, Portfolio, ePortfolio, Online Portfolio, Website Development, Web Dev, Coding, Ideoxan, Serenade, node-scdl, Developer Portfolio, Developer, Backend, Frontend, Resume"/>
            <meta name="image" content="https://www.skyclo.dev/images/og_thumbnail.png"/>
            <meta name="theme-color" content="#050a15"/>

        </Head>
    )
}
