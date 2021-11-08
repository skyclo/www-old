import HeadMetaTags from '../components/meta/Meta'
import NavigationBar from '../components/navigation/NavigationBar'
import Header from '../components/header/Header'
import ProjectCarousel from '../components/projects_carousel/ProjectCarousel'
import IdeoxanProjectCarousel from '../components/projects_carousel/items/Ideoxan'
import SerenadeProjectCarousel from '../components/projects_carousel/items/Serenade'
import SCDLProjectCarousel from '../components/projects_carousel/items/SCDL'
import SkoshProjectCarousel from '../components/projects_carousel/items/Skosh'
import ProjectsCallToAction from '../components/projects_cta/ProjectsCTA'
import Footer from '../components/footer/Footer'
import ProjectsArt from '../components/projects_art/ProjectsArt'

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
        <>
            <HeadMetaTags pageTitle="Showcase"/>
            <body className="h-screen w-screen bg-gray-50 overflow-x-hidden">
                <NavigationBar/>
                <Header headerName="Showcase" colorFrom="orange-500" colorTo="yellow-500"/>
                <ProjectCarousel data={projectsData}/>
                <ProjectsCallToAction/>
                <ProjectsArt/>
                <Footer/>
            </body>
        </>
    )
}
