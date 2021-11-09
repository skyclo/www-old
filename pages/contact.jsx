import NavigationBar from '../components/navigation/NavigationBar'
import HeadMetaTags from '../components/meta/Meta'
import Header from '../components/header/Header'
import ContactCard from '../components/contact_card/ContactCard'

export default function Contact() {
    let data = [
        {
            platform: {
                name: 'GitHub',
                icon: {
                    name: 'GitHub',
                    color: '#181717'
                }
            },
            profile: {
                username: 'skyclo',
                url: 'https://github.com/skyclo'
            }
        },
        {
            platform: {
                name: 'Twitter',
                icon: {
                    name: 'Twitter',
                    color: '#1DA1F2'
                }
            },
            profile: {
                username: 'skyclo_',
                url: 'https://twitter.com/skyclo_'
            }
        },
        {
            platform: {
                name: 'Dribbble',
                icon: {
                    name: 'Dribbble',
                    color: '#EA4C89'
                }
            },
            profile: {
                username: 'skyclo',
                url: 'https://dribbble.com/skyclo'
            }
        },
        {
            platform: {
                name: 'Linkedin',
                icon: {
                    name: 'Linkedin',
                    color: '#0A66C2'
                }
            },
            profile: {
                username: 'skyclo',
                url: 'https://linkedin.com/in/skyclo'
            }
        },
        {
            platform: {
                name: 'Discord',
                icon: {
                    name: 'MessageSquare',
                    color: '#5865F2'
                }
            },
            profile: {
                username: 'skyclo#5742',
                url: 'https://discordapp.com/users/717468257107574804'
            }
        },
    ]
    return (
        <>
            <HeadMetaTags pageTitle="Contact"/>
            <body className="h-screen w-screen bg-gray-50 overflow-x-hidden">
                <NavigationBar/>
                <Header headerName="Contact" colorFrom="purple-500" colorTo="blue-500"/>
                <div className="flex flex-col w-full px-24 py-16">
                    <h2 className="mx-auto font-sans font-extrabold text-center text-4xl tracking-tight">Socials</h2>
                    <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 auto-cols-fr auto-rows-fr mt-8 gap-x-2 md:gap-x-6 gap-y-2 md:gap-y-8">
                        {
                            data.map((profile, i, arr) => {
                                return (<ContactCard data={profile}/>)
                            })
                        }
                    </div>
                </div>
            </body>
        </>
    )
}
