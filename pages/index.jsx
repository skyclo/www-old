import NavigationBar from '../components/navigation/NavigationBar'
import Hero from '../components/hero/Hero'
import IntroductionAnimation from '../components/intro/Intro'
import HeadMetaTags from '../components/meta/Meta'

export default function Home() {
    return (
        <>
            <HeadMetaTags pageTitle="Home"/>
            <body className="h-screen w-screen bg-gray-950 overflow-x-hidden">
                <IntroductionAnimation/>
                <NavigationBar/>
                <Hero/>
            </body>
        </>
    )
}
