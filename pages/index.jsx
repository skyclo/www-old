import Navbar from './../components/navbar/Navbar'
import IndexPageHero from './../components/index_page/IndexPageHero'
import IntroductionAnimation from './../components/index_page/IntroductionAnimation'
import HeadMetadata from './../components/HeadMetadata'

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
