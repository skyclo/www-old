import dynamic from 'next/dynamic'
import Navbar from './../components/navbar/Navbar'
import HeadMetadata from './../components/HeadMetadata'
import HeaderLarge from './../components/HeaderLarge'
import RatingsCardThin from './../components/RatingsCardThin'
import DevBanner from '../components/DevBanner'

const Footer = dynamic(() => import('../components/Footer'))

export default function About() {
    let skillsData = [
        {
            name: 'Teamwork and FOSS Project Management',
            stars: 5,
            rating: 'Experienced',
        },
        {
            name: 'HTML, CSS, JavaScript',
            stars: 5,
            rating: 'Proficient',
        },
        {
            name: 'User Interface and User Experience (UI/UX) Design',
            stars: 5,
            rating: 'Experienced',
        },
        {
            name: 'NodeJS',
            stars: 5,
            rating: 'Proficient',
        },
        {
            name: 'MongoDB',
            stars: 4,
            rating: 'Advanced',
        },
        {
            name: 'CI, Deployments, Linux Server Management',
            stars: 3,
            rating: 'Intermediate',
        },
        {
            name: 'Git Version Control and GitHub',
            stars: 4,
            rating: 'Advanced',
        },
        {
            name: 'Docker Container Managemnet',
            stars: 3,
            rating: 'Intermediate',
        },
        {
            name: 'SQL Databases',
            stars: 3,
            rating: 'Intermediate',
        },
        {
            name: 'ReactJS and Next.js',
            stars: 2,
            rating: 'Beginner',
        },
        {
            name: 'Web Assembly (WASM) and Web Assembly System Interface (WASI)',
            stars: 1,
            rating: 'Learning...',
        },
        {
            name: 'Kubernetes and Distributed Computing',
            stars: 1,
            rating: 'Learning...',
        },
    ]

    skillsData = skillsData.sort((a, b) => b.stars - a.stars)

    return (
        <>
            <HeadMetadata pageTitle="About"/>
            <body className="h-screen w-screen bg-light overflow-x-hidden">
                <Navbar/>
                <DevBanner/>
                <HeaderLarge headerName="About" colorFrom="green-400" colorTo="cyan-400"/>
                <div className="flex flex-col w-full px-24 py-16">
                    <div className="flex flex-col mx-auto w-full max-w-7xl">
                        <h2 className="animate-fadeupwards mx-auto font-sans font-extrabold text-center text-4xl tracking-tight text-dark">About Me</h2>
                        <div className="animate-fadeupwards flex flex-col mt-8 mx-auto max-w-3xl w-full font-sans font-normal text-justify space-y-2 md:space-y-4 text-gray-700">
                            <p>My name is Conor Daly, a college student attending the University of Central Florida. I am a computer enthusiast focused on advancing my programming skills, giving back to the community, and improving the world one line at a time.</p>

                            <p>From the age of 8, I have been learning programming all while balancing school, sports, volunteering, and hobbies. In the past couple of years, I have worked heavily on open source technologies and discovered my love for NodeJS Full Stack development. Currently, I am fluent in multiple programming languages such as JavaScript, HTML, and CSS. I also have experience with Java, SQL, Python, and much more.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full px-24 py-16">
                    <div className="flex flex-col mx-auto w-full max-w-7xl">
                        <h2 className="animate-fadeupwards mx-auto font-sans font-extrabold text-center text-4xl tracking-tight text-dark">Skills</h2>
                        <div className="animate-fadeupwards grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-cols-fr auto-rows-min mt-8 gap-x-2 md:gap-x-6 gap-y-2 md:gap-y-8">
                            {
                                skillsData.map((skill, i, arr) => {
                                    return (
                                        <RatingsCardThin key={i} data={skill}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full px-24 py-16 gap-x-0 lg:gap-x-24 gap-y-16 lg:gap-y-0">
                    <div className="grid grid-flow-row auto-cols-fr auto-rows-min grid-cols-1 lg:grid-cols-2 lg:grid-flow-col mx-auto w-full max-w-7xl">
                        <div className="flex flex-col w-full space-y-16">
                            <div className="flex flex-col w-full">
                                <h2 className="animate-fadeupwards mx-auto lg:mx-0 font-sans font-extrabold text-center lg:text-left text-4xl tracking-tight text-dark">Relevant Coursework</h2>
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
                            <div className="flex flex-col w-full">
                                <h2 className="animate-fadeupwards mx-auto lg:mx-0 font-sans font-extrabold text-center lg:text-left text-4xl tracking-tight text-dark">Clubs and Involvement</h2>
                                <div className="animate-fadeupwards flex flex-col mt-8 mx-auto lg:ml-4 lg:mr-0 font-sans font-normal text-center lg:text-left text-gray-700">
                                    <ul className="list-disc space-y-2">
                                        <li>Knight Hacks 2021 Project Team 12</li>
                                        <li>100+ Hours of Community Service in High School</li>
                                        <li>Modeling and Simulation Club (&ldquo;Mod Squad&rdquo;)</li>
                                        <li>FIRST Technical Challenge Robotics Club</li>
                                        <li>Student Government Association</li>
                                        <li>Business Professionals of America</li>
                                        <li>Science National Honors Society</li>
                                        <li>Key Club</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-16">
                        <div className="flex flex-col w-full">
                                <h2 className="animate-fadeupwards mx-auto lg:mx-0 font-sans font-extrabold text-center lg:text-left text-4xl tracking-tight text-dark">Certifications</h2>
                                <div className="animate-fadeupwards flex flex-col mt-8 mx-auto lg:ml-4 lg:mr-0 font-sans font-normal text-center lg:text-left text-gray-700">
                                    <ul className="list-disc space-y-2">
                                        <li>NCS-100 Modeling and Simulation Certification</li>
                                        <li>Adobe Certified Associate</li>
                                        <li>IC3 Digital Literacy Certification (GS4)</li>
                                        <li>IC3 Microsoft Office 365 Certified Associate</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <h2 className="animate-fadeupwards mx-auto lg:mx-0 font-sans font-extrabold text-center lg:text-left text-4xl tracking-tight text-dark">Awards and Recognition</h2>
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
                </div>

                <Footer/>
            </body>
        </>
    )
}
