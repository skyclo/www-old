import Head from "next/head"

export default function HeadMetaTags ({pageTitle}) {
    if (pageTitle) pageTitle = ' | ' + pageTitle
    else pageTitle = ''
    return (
        <Head>
            <meta charSet="UTF-8"/>
            <meta lang="en"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Skyclo{pageTitle}</title>

            <meta name="title" content={"Conor's Website" + pageTitle}/>
            <meta name="description" content="Conor's interactive, online portfolio."/>
            <meta name="keywords" content="Skyclo, Conor Daly, Bryce Daly, Programming, Portfolio, ePortfolio, Online Portfolio, Website Development, Web Dev, Coding, Ideoxan, Serenade, node-scdl, Developer Portfolio, Developer, Backend, Frontend, Resume"/>
            <meta name="image" content="https://skyclo.dev/images/og_thumbnail.png"/>
            <meta name="theme-color" content="#050a15"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:site" content="@skyclo_"/>
            <meta name="twitter:creator" content="@skyclo_"/>
            <meta name="twitter:title" content={"Conor's Website" + pageTitle}/>
            <meta name="twitter:image" content="https://skyclo.dev/images/og_thumbnail.png"/>
            <meta name="twitter:url" content="https://skyclo.dev"/>

            <meta prefix="og: http://ogp.me/ns#" property="og:title" content={"Conor's Website" + pageTitle}/>
            <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website"/>
            <meta prefix="og: http://ogp.me/ns#" property="og:locale" content="en_US"/>
            <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="Skyclo"/>
            <meta prefix="og: http://ogp.me/ns#" property="og:description" content="Conor's interactive, online portfolio."/>
            <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://skyclo.dev/"/>
            <meta prefix="og: http://ogp.me/ns#" property="og:image" content="https://skyclo.dev/images/og_thumbnail.png"/>
            <meta prefix="og: http://ogp.me/ns#" name="theme-color" content="#050a15"/>
        </Head>
    )
}
