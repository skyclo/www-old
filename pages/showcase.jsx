import Head from 'next/head'
import NavigationBar from '../components/navigation/NavigationBar'
import Header from '../components/header/Header'
import ProjectCarousel from '../components/projects_carousel/ProjectCarousel'
import IdeoxanProjectCarousel from '../components/projects_carousel/items/Ideoxan'
import SerenadeProjectCarousel from '../components/projects_carousel/items/Serenade'
import SCDLProjectCarousel from '../components/projects_carousel/items/SCDL'
import SkoshProjectCarousel from '../components/projects_carousel/items/Skosh'
import ProjectsCallToAction from '../components/projects_cta/ProjectsCTA'
import Footer from '../components/footer/Footer'

export default function Showcase() {
    let projectsData = [
        {
            name: "Ideoxan",
            objects: {
                Component: IdeoxanProjectCarousel
            }
        },
        {
            name: "Serenade",
            objects: {
                Component: SerenadeProjectCarousel
            }
        },
        {
            name: "SCDL",
            objects: {
                Component: SCDLProjectCarousel
            }
        },
        {
            name: "Skosh",
            objects: {
                Component: SkoshProjectCarousel
            }
        },
    ]
    return (
        <html lang="en">
            <Head>
                <title>Skyclo | Showcase</title>
            </Head>
            <body className="h-screen w-screen bg-gray-50 overflow-x-hidden">
                <NavigationBar/>
                <Header headerName="Showcase" colorFrom="orange-500" colorTo="yellow-500"/>
                <ProjectCarousel data={projectsData}/>
                <ProjectsCallToAction/>
                <Footer/>
            </body>
        </html>
    )
}
