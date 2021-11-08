import NavigationBar from '../components/navigation/NavigationBar'
import Hero from '../components/hero/Hero'
import IntroductionAnimation from '../components/intro/Intro'
import HeadMetaTags from '../components/meta/Meta'
import Header from '../components/header/Header'

export default function Contact() {
    return (
        <>
            <HeadMetaTags pageTitle="Contact"/>
            <body className="h-screen w-screen bg-gray-50 overflow-x-hidden">
                <NavigationBar/>
                <Header headerName="Contact" colorFrom="purple-500" colorTo="blue-500"/>
            </body>
        </>
    )
}
