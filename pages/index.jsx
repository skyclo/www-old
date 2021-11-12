import Navbar from '../components/Navbar/Navbar'
import IndexPageHero from '../components/IndexPage/IndexPageHero'
import IntroductionAnimation from '../components/IndexPage/IntroductionAnimation'
import HeadMetadata from '../components/HeadMetadata'

export default function Home() {
    return (
        <>
            <HeadMetadata pageTitle="Home"/>
            <body className="h-screen w-screen bg-gray-950 overflow-x-hidden">
                <IntroductionAnimation/>
                <Navbar/>
                <IndexPageHero/>
            </body>
        </>
    )
}
