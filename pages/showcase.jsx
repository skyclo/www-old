import HeadMetaTags from '../components/meta/Meta'
import NavigationBar from '../components/navigation/NavigationBar'
import Header from '../components/header/Header'
import ProjectCarousel from '../components/projects_carousel/ProjectCarousel'
import IdeoxanProjectCarousel from '../components/projects_carousel/items/Ideoxan'
import SerenadeProjectCarousel from '../components/projects_carousel/items/Serenade'
import SCDLProjectCarousel from '../components/projects_carousel/items/SCDL'
import SkoshProjectCarousel from '../components/projects_carousel/items/Skosh'
import CallToAction from '../components/cta/CallToAction'
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
                <Header headerName="Showcase" colorFrom="orange-400" colorTo="yellow-400"/>
                <ProjectCarousel data={projectsData}/>
                <CallToAction data={{
                    title: 'Something Missing?',
                    description: 'Check out more of my projects and open source contributions on my GitHub profile.',
                    buttons: [
                        {
                            text: 'View Profile',
                            icon: 'GitHub',
                            url: 'https://github.com/skyclo'
                        },
                    ]
                }}/>
                <ProjectsArt/>
                <Footer/>
            </body>
        </>
    )
}
