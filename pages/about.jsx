import NavigationBar from '../components/navigation/NavigationBar'
import HeadMetaTags from '../components/meta/Meta'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import SkillsCard from '../components/skills_card/SkillsCard'

export default function About() {
    let skillsData = [
        {
            skillName: 'Teamwork and FOSS Project Management',
            stars: 5,
            rankName: 'Experienced',
        },
        {
            skillName: 'HTML, CSS, JavaScript',
            stars: 5,
            rankName: 'Proficient',
        },
        {
            skillName: 'User Interface and User Experience (UI/UX) Design',
            stars: 5,
            rankName: 'Experienced',
        },
        {
            skillName: 'NodeJS',
            stars: 5,
            rankName: 'Proficient',
        },
        {
            skillName: 'MongoDB',
            stars: 4,
            rankName: 'Advanced',
        },
        {
            skillName: 'CI, Deployments, Linux Server Management',
            stars: 3,
            rankName: 'Intermediate',
        },
        {
            skillName: 'Git Version Control and GitHub',
            stars: 4,
            rankName: 'Advanced',
        },
        {
            skillName: 'Docker Container Managemnet',
            stars: 3,
            rankName: 'Intermediate',
        },
        {
            skillName: 'SQL Databases',
            stars: 3,
            rankName: 'Intermediate',
        },
        {
            skillName: 'React',
            stars: 2,
            rankName: 'Beginner',
        },
        {
            skillName: 'Web Assembly (WASM) and Web Assembly System Interface (WASI)',
            stars: 1,
            rankName: 'Learning...',
        },
        {
            skillName: 'Kubernetes and Distributed Computing',
            stars: 1,
            rankName: 'Learning...',
        },
    ]

    skillsData = skillsData.sort((a, b) => b.stars - a.stars)

    return (
        <>
            <HeadMetaTags pageTitle="About"/>
            <body className="h-screen w-screen bg-gray-50 overflow-x-hidden">
                <NavigationBar/>
                <Header headerName="About" colorFrom="green-400" colorTo="cyan-400"/>
                <div className="flex flex-col w-full px-24 py-16">
                    <h2 className="animate-fadeupwards mx-auto font-sans font-extrabold text-center text-4xl tracking-tight text-gray-950">About Me</h2>
                    <div className="animate-fadeupwards flex flex-col mt-8 mx-auto max-w-3xl w-full font-sans font-normal text-justify space-y-2 md:space-y-4 text-gray-700">
                        <p>My name is Conor Daly, a college student attending the University of Central Florida. I am a computer enthusiast focused on advancing my programming skills, giving back to the community, and improving the world one line at a time.</p>

                        <p>From the age of 8, I have been learning programming all while balancing school, sports, volunteering, and hobbies. In the past couple of years, I have worked heavily on open source technologies and discovered my love for NodeJS Full Stack development. Currently, I am fluent in multiple programming languages such as JavaScript, HTML, and CSS. I also have experience with Java, SQL, Python, and much more.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full px-24 py-16">
                    <h2 className="animate-fadeupwards mx-auto font-sans font-extrabold text-center text-4xl tracking-tight text-gray-950">Skills</h2>
                    <div className="animate-fadeupwards grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 auto-cols-fr auto-rows-min mt-8 gap-x-2 md:gap-x-6 gap-y-2 md:gap-y-8">
                        {
                            skillsData.map((skill, i, arr) => {
                                return (
                                    <SkillsCard data={skill}/>
                                )
                            })
                        }
                    </div>
                </div>
                <Footer/>
            </body>
        </>
    )
}
