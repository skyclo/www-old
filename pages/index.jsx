import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Splash from './../components/index_page/Splash'
import HeadMetadata from './../components/HeadMetadata'
import DevBanner from '../components/DevBanner'

const Navbar = dynamic(() => import('../components/navbar/Navbar'))
const IndexPageHero = dynamic(() => import('../components/index_page/IndexPageHero'))

export default function Home() {
    let [splashVisible, setSplashVisible] = useState(false)
    useEffect(() => {
        let key = "sk0_intro_already_shown"
        let alreadyShown = localStorage.getItem(key)
        if (!alreadyShown) {
            setSplashVisible(true)
            localStorage.setItem(key, true)
        }
    }, [])

    return (
        <>
            <HeadMetadata pageTitle="Home"/>
            <body className="container-full-screen bg-dark">
                {splashVisible? <Splash/> : null}
                <DevBanner/>
                <Navbar/>
                <IndexPageHero/>
            </body>
        </>
    )
}
