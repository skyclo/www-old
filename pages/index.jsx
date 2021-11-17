import Navbar from './../components/navbar/Navbar'
import dynamic from 'next/dynamic'
import IntroductionAnimation from './../components/index_page/IntroductionAnimation'
import HeadMetadata from './../components/HeadMetadata'
import DevBanner from '../components/DevBanner'

const IndexPageHero = dynamic(() => import('../components/index_page/IndexPageHero'))

export default function Home() {
    return (
        <>
            <HeadMetadata pageTitle="Home"/>
            <body className="container-full-screen bg-dark">
                <IntroductionAnimation/>
                <DevBanner/>
                <Navbar/>
                <IndexPageHero/>
            </body>
        </>
    )
}
