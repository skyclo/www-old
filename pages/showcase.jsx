import HeadMetadata from './../components/HeadMetadata'
import Navbar from './../components/navbar/Navbar'
import HeaderLarge from './../components/HeaderLarge'
import ProjectCarousel from './../components/showcase_page/projects_section/ProjectCarousel'
import ProjectCarouselSlideIdeoxan from './../components/showcase_page/projects_section/ProjectCarouselSlideIdeoxan'
import ProjectCarouselSlideSerenade from './../components/showcase_page/projects_section/ProjectCarouselSlideSerenade'
import ProjectCarouselSlideSCDL from './../components/showcase_page/projects_section/ProjectCarouselSlideSCDL'
import ProjectCarouselSlideSkosh from './../components/showcase_page/projects_section/ProjectCarouselSlideSkosh'
import CallToAction from './../components/CallToAction'
import Footer from './../components/Footer'
import ArtSection from './../components/showcase_page/art_section/Art'
import DevBanner from '../components/DevBanner'

export default function Showcase() {
    let projectsData = [
        {
            name: "Ideoxan",
            objects: {
                Component: ProjectCarouselSlideIdeoxan
            }
        },
        {
            name: "Serenade",
            objects: {
                Component: ProjectCarouselSlideSerenade
            }
        },
        {
            name: "SCDL",
            objects: {
                Component: ProjectCarouselSlideSCDL
            }
        },
        {
            name: "Skosh",
            objects: {
                Component: ProjectCarouselSlideSkosh
            }
        },
    ]
    return (
        <>
            <HeadMetadata pageTitle="Showcase"/>
            <body className="h-screen w-screen bg-light overflow-x-hidden">
                <Navbar/>
                <DevBanner/>
                <HeaderLarge headerName="Showcase" colorFrom="orange-400" colorTo="yellow-400"/>
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
                <ArtSection/>
                <Footer/>
            </body>
        </>
    )
}
