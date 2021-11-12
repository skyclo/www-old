import Navbar from '../components/Navbar/Navbar'
import HeadMetadata from '../components/HeadMetadata'
import HeaderLarge from '../components/HeaderLarge'
import LinkCardThin from '../components/LinkCardThin'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

export default function Contact() {
    let data = [
        {
            name: 'GitHub',
            icon: {
                name: 'GitHub',
                color: '#181717'
            },
            subtitle: 'skyclo',
            url: 'https://github.com/skyclo'
        },
        {
            name: 'Twitter',
            icon: {
                name: 'Twitter',
                color: '#1DA1F2'
            },
            subtitle: 'skyclo_',
            url: 'https://twitter.com/skyclo_'
        },
        {
            name: 'Dribbble',
            icon: {
                name: 'Dribbble',
                color: '#EA4C89'
            },
            subtitle: 'skyclo',
            url: 'https://dribbble.com/skyclo'
        },
        {
            name: 'Linkedin',
            icon: {
                name: 'Linkedin',
                color: '#0A66C2'
            },
            subtitle: 'skyclo',
            url: 'https://linkedin.com/in/skyclo'
        },
        {
            name: 'Discord',
            icon: {
                name: 'MessageSquare',
                color: '#5865F2'
            },
            subtitle: 'skyclo#5742',
            url: 'https://discordapp.com/users/717468257107574804'
        },
    ]
    return (
        <>
            <HeadMetadata pageTitle="Contact"/>
            <body className="h-screen w-screen bg-gray-50 overflow-x-hidden">
                <Navbar/>
                <HeaderLarge headerName="Contact" colorFrom="purple-400" colorTo="blue-400"/>
                <div className="flex flex-col w-full px-24 py-16">
                    <div className="flex flex-col mx-auto w-full max-w-7xl">
                        <h2 className="animate-fadeupwards mx-auto font-sans font-extrabold text-center text-4xl tracking-tight text-gray-950">Socials</h2>
                        <div className="animate-fadeupwards grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-cols-fr auto-rows-fr mt-8 gap-x-2 md:gap-x-6 gap-y-2 md:gap-y-8">
                            {
                                data.map((profile, i, arr) => {
                                    return (<LinkCardThin data={profile}/>)
                                })
                            }
                        </div>
                    </div>
                </div>
                <CallToAction data={{
                    title: 'Lets Talk!',
                    description: 'If you want to reach out through email or phone, contact me using either one of the buttons on the right',
                    buttons: [
                        {
                            icon: 'Mail',
                            text: 'Email',
                            url: 'mailto:hello@skyclo.dev'
                        },
                        {
                            icon: 'Phone',
                            text: 'Telephone/SMS',
                            url: 'tel:6672176172'
                        }
                    ]
                }}/>
                <div className="flex flex-col w-full px-24 py-16">
                    <div className="flex flex-col mx-auto w-full max-w-7xl">
                        <h2 className="animate-fadeupwards mx-auto font-sans font-extrabold text-center text-4xl tracking-tight text-gray-950">Problems?</h2>
                        <div className="animate-fadeupwards grid grid-flow-row grid-cols-1 lg:grid-cols-2 auto-cols-fr auto-rows-fr mt-8 gap-x-2 md:gap-x-6 gap-y-2 md:gap-y-8">
                            <LinkCardThin data={{
                                name: 'Report an Issue with the Site',
                                subtitle: 'skyclo-www:skyclo.dev Issue Tracker',
                                icon: {
                                    name: 'GitHub',
                                    color: '#181717'
                                },
                                url: 'https://github.com/skyclo/skyclo-www/issues'
                            }}/>
                            <LinkCardThin data={{
                                name: 'Report an Issue with the Server',
                                subtitle: 'kraken:skyclo.dev Issue Tracker',
                                icon: {
                                    name: 'GitHub',
                                    color: '#181717'
                                },
                                url: 'https://github.com/skyclo/kraken-hardware/issues'
                            }}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </body>
        </>
    )
}
