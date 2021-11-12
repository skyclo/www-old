import ProjectArtCard from "./ProjectArtCard"
import spotifyRedesignImage from './../../public/images/works/spotify_redesign.jpeg'
import artNewKerbinImage from './../../public/images/works/new_kerbin.png'
import artTheLoneSurvivor from './../../public/images/works/the_lone_survivor.png'
import artSeries1 from './../../public/images/works/series_late_night_drive_thru.png'
import artSeries2 from './../../public/images/works/series_a_new_dawn.png'
import artDelephummingfly from './../../public/images/works/combinedcreature.png'
import photoClearSkies from './../../public/images/works/clear_skies.jpg'
import amdRedesignImage from './../../public/images/works/amd_redesign.png'
import skycloBrandingV2 from './../../public/images/works/skyclo_branding_logo_v2.png'
import discordUIOverhaul from './../../public/images/works/discord_redesign_ui.png'
import amazonWebsiteRedo2 from './../../public/images/works/amazon_website_redo.png'
import ProjectArtFilterPill from "./ProjectArtFilterPill"
import { useEffect, useState } from "react"

export default function ProjectsArt () {
    // types: 1 (User Interface), 2 (Redesign), 3 (Photography), 4 (Digital Artwork), 5 (Branding)
    let artProjectData = [
        {
            info: {
                title: 'Spotify Desktop App UI Redesign',
                types: [1, 2],
                id: 'spotify-redesign'
            },
            coverImage: {
                url: spotifyRedesignImage,
                alt: 'A screenshot of the Spotify desktop app user interface redone',
                blurString: 'TD6Sl{spMgd5VtVbKZs;s;t8X5R$'
            },
            link: {
                url: 'https://dribbble.com/shots/14118643-Spotify-Redesign'
            }
        },
        {
            info: {
                title: 'The Lone Survivor',
                types: [4],
                id: 'lone-survivor'
            },
            coverImage: {
                url: artTheLoneSurvivor,
                alt: 'A man stands in the quiet streets of dismay',
                blurString: 'TE27S7kcaHaHkFkZVUavkZktfAac'
            },
            link: {
                url: '/images/works/the_lone_survivor.png'
            }
        },
        {
            info: {
                title: 'Delephummingfly',
                types: [4],
                id: 'morphed-creature'
            },
            coverImage: {
                url: artDelephummingfly,
                alt: 'A hummingbird with the head of an elephant, wings of a butterfly, and deer horns',
                blurString: 'TFE399||$*qkVGXzByEMTZO,bbrw'
            },
            link: {
                url: '/images/works/combinedcreature.png'
            }
        },
        {
            info: {
                title: 'AMD Brand Redesign',
                types: [2, 5],
                id: 'amd-rebrand'
            },
            coverImage: {
                url: amdRedesignImage,
                alt: 'This is a redesign of the AMD logo, transforming it from its sub-standard 2000\'s style to a modern and flowing style',
                blurString: 'T55r=jk]4s,~jDN38^s+?aIXjr%1'
            },
            link: {
                url: 'https://dribbble.com/shots/14118704-AMD-Logo-Redesign/'
            }
        },
        {
            info: {
                title: 'Series No. 2: A New Dawn',
                types: [4],
                id: 'series-2'
            },
            coverImage: {
                url: artSeries2,
                alt: 'A man stands on a pier gazing at the rising sun',
                blurString: 'T~MN.LtQW=}skVfRVuWBn%M|aef6'
            },
            link: {
                url: '/images/works/series_a_new_dawn.png'
            }
        },
        {
            info: {
                title: 'Skyclo Branding V2',
                types: [5],
                id: 'skyclo-v2-brand'
            },
            coverImage: {
                url: skycloBrandingV2,
                alt: 'The second branding iteration of the Skyclo brand',
                blurString: 'LC8:|.WV00ofofofWBRj0Kj[~WWB'
            },
            link: {
                url: 'https://dribbble.com/shots/14118594-Skyclo-Branding-v2'
            }
        },
        {
            info: {
                title: 'New Kerbin',
                types: [4],
                id: 'new-kerbin'
            },
            coverImage: {
                url: artNewKerbinImage,
                alt: 'Two alien astronaughts on a cliff overlooking a colony and watching a rocket launch',
                blurString: 'TLB|jEn5sU00bHWW~WbuWoIUofs:'
            },
            link: {
                url: '/images/works/new_kerbin.png'
            }
        },
        {
            info: {
                title: 'Amazon Website Redesign',
                types: [1, 2],
                id: 'amazon-web-redesign'
            },
            coverImage: {
                url: amazonWebsiteRedo2,
                alt: 'This was an unfinished redesign of the Amazon homepage, search page, and product pages that was entered for a competition',
                blurString: 'LC8:|.WV00ofofofWBRj0Kj[~WWB'
            },
            link: {
                url: 'https://imgur.com/a/nhQGsUA'
            }
        },
        {
            info: {
                title: 'Series No. 1: Late Nights',
                types: [4],
                id: 'series-1'
            },
            coverImage: {
                url: artSeries1,
                alt: 'A parked red sedan sits outside of a donut shop at night',
                blurString: 'L1Mj]+^:00$@00%B?cIT00xlxvM{'
            },
            link: {
                url: 'https://imgur.com/a/ZBVEuHU'
            }
        },
        {
            info: {
                title: 'Discord UI Overhaul',
                types: [1, 2],
                id: 'discord-redesign'
            },
            coverImage: {
                url: discordUIOverhaul,
                alt: 'This is my version of an overhaul of the early 2020 version of the Discord desktop application UI.',
                blurString: 'L15#nn~qxvRP_4.8-=xv00a$tQ%L'
            },
            link: {
                url: 'https://imgur.com/a/nhQGsUA'
            }
        },
        {
            info: {
                title: 'Clear Skies',
                types: [3],
                id: 'clear-skies-photo'
            },
            coverImage: {
                url: photoClearSkies,
                alt: 'The branches of a tree intercept a lone cloud in the bright blue skies',
                blurString: 'L5SidIS#tR-p-paykCj[?^$+a0NG'
            },
            link: {
                url: '/images/works/clear_skies.jpg'
            }
        },
    ]

    let artProjectPills = [
        {
            name: 'User Interface (UI)',
            color: 'green'
        },
        {
            name: 'Redesigns',
            color: 'blue'
        },
        {
            name: 'Photography',
            color: 'yellow'
        },
        {
            name: 'Digital Artwork',
            color: 'purple'
        },
        {
            name: 'Branding',
            color: 'pink'
        },
    ]

    /* console.log(artProjectData.filter((value) => {
        return value.info.types.includes(4)
    })) */

    const [currentFilter, setCurrentFilter] = useState(null)

    useEffect(() => {
        let cardsToHide = [], cardsNotToHide = []

        if (currentFilter == null) {
            cardsNotToHide.push(...(artProjectData.map((data) => data.info.id)))

            for (let i = 0; i < artProjectPills.length; i++) {
                document.getElementById(`filter-id-${i + 1}`).style.display = 'flex'
            }
        } else {
            artProjectData.forEach((data) => {
                if (data.info.types.includes(currentFilter)) {
                    cardsNotToHide.push(data.info.id)
                } else {
                    cardsToHide.push(data.info.id)
                }
            })

            for (let i = 0; i < artProjectPills.length; i++) {
                document.getElementById(`filter-id-${i + 1}`).style.display = 'none'
            }
            document.getElementById(`filter-id-${currentFilter}`).style.display = 'flex'
        }

        cardsNotToHide.forEach((card, i, arr) => {
            document.getElementById('project-art-card-' + card).style.display = 'flex'
        })
        cardsToHide.forEach((card, i, arr) => {
            document.getElementById('project-art-card-' + card).style.display = 'none'
        })

    }, [currentFilter])

    return (
        <div className="flex flex-col w-full px-24 py-16">
            <div className="flex flex-col mx-auto w-full max-w-7xl">
                <h2 className="animate-fadeupwards mx-auto font-sans font-extrabold text-center text-4xl tracking-tight">Art, Photography and Designs</h2>
                <div className="animate-fadeupwards flex flex-row mx-auto mt-8 mb-2 space-x-2 font-sans font-semibold text-sm text-center">
                    {
                        artProjectPills.map((pillData, i) => {
                            return (
                                <ProjectArtFilterPill
                                    filterID={i+1}
                                    setParentFilter={setCurrentFilter}
                                    name={pillData.name}
                                    color={pillData.color}
                                />
                            )
                        })
                    }
                </div>
                <div className="animate-fadeupwards masonry-col-1 md:masonry-col-2 lg:masonry-col-3 xl:masonry-col-4 before:box-inherit after:box-inherit mt-8 gap-x-4 gap-y-6">
                    {
                        artProjectData.map((data, i, array) => {
                            return <ProjectArtCard data={data}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
