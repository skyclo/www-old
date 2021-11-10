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
            skillName: 'ReactJS and Next.js',
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
                <div className="grid grid-flow-row auto-cols-fr auto-rows-min grid-cols-1 lg:grid-cols-2 lg:grid-flow-col w-full px-24 py-16 gap-x-0 lg:gap-x-24 gap-y-16 lg:gap-y-0">
                    <div class="flex flex-col w-full space-y-16">
                        <div class="flex flex-col w-full">
                            <h2 className="animate-fadeupwards mx-auto lg:mx-0 font-sans font-extrabold text-center lg:text-left text-4xl tracking-tight text-gray-950">Relevant Coursework</h2>
                            <div className="animate-fadeupwards flex flex-col mt-8 mx-auto lg:ml-4 lg:mr-0 font-sans font-normal text-center lg:text-left text-gray-700">
                                <ul className="list-disc space-y-2">
                                    <li>Intro to Programming with C</li>
                                    <li>Calculus III</li>
                                    <li>AP Calculus AB and BC</li>
                                    <li>Digital Graphical Art 1 and 2</li>
                                    <li>AP Computer Science Principles and A</li>
                                    <li>Modeling and Simulation I-IV</li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col w-full">
                            <h2 className="animate-fadeupwards mx-auto lg:mx-0 font-sans font-extrabold text-center lg:text-left text-4xl tracking-tight text-gray-950">Clubs and Involvement</h2>
                            <div className="animate-fadeupwards flex flex-col mt-8 mx-auto lg:ml-4 lg:mr-0 font-sans font-normal text-center lg:text-left text-gray-700">
                                <ul className="list-disc space-y-2">
                                    <li>Knight Hacks 2021 Project Team 12</li>
                                    <li>100+ Hours of Community Service in High School</li>
                                    <li>Modeling and Simulation Club ("Mod Squad")</li>
                                    <li>FIRST Technical Challenge Robotics Club</li>
                                    <li>Student Government Association</li>
                                    <li>Business Professionals of America</li>
                                    <li>Science National Honors Society</li>
                                    <li>Key Club</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full space-y-16">
                    <div class="flex flex-col w-full">
                            <h2 className="animate-fadeupwards mx-auto lg:mx-0 font-sans font-extrabold text-center lg:text-left text-4xl tracking-tight text-gray-950">Certifications</h2>
                            <div className="animate-fadeupwards flex flex-col mt-8 mx-auto lg:ml-4 lg:mr-0 font-sans font-normal text-center lg:text-left text-gray-700">
                                <ul className="list-disc space-y-2">
                                    <li>NCS-100 Modeling and Simulation Certification</li>
                                    <li>Adobe Certified Associate</li>
                                    <li>IC3 Digital Literacy Certification (GS4)</li>
                                    <li>IC3 Microsoft Office 365 Certified Associate</li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col w-full">
                            <h2 className="animate-fadeupwards mx-auto lg:mx-0 font-sans font-extrabold text-center lg:text-left text-4xl tracking-tight text-gray-950">Awards and Recognition</h2>
                            <div className="animate-fadeupwards flex flex-col mt-8 mx-auto lg:ml-4 lg:mr-0 font-sans font-normal text-center lg:text-left text-gray-700">
                                <ul className="list-disc space-y-2">
                                    <li>2021 AP Scholar with Distinction</li>
                                    <li>2021 Florida BrightFutures Academic Scholar</li>
                                    <li>Business Professionals of America, 2021 Regional Graphic Design Competition, 5th Place</li>
                                    <li>National Scholastic Press Association, 2020 Best in Show Award, 5th Place</li>
                                    <li>2020 AP Scholar with Distinction</li>
                                    <li>National Center for Simulation, 2020 Team Orlando Day Competition, 4th Place</li>
                                    <li>FIRST Robotics, 2018 World Championship, FIRST Technical Challenge, Design Award</li>
                                    <li>FIRST Robotics, 2018 Florida Championship, FIRST Technical Challenge, Inspire Award</li>
                                    <li>FIRST Robotics, 2017 Space Coast League Championship, FIRST Technical Challenge, Inspire Award</li>
                                    <li>2016 United States Department of Education Presidential Award for Academic Excellence</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </body>
        </>
    )
}
