import ProjectArtCard from "./ProjectArtCard"
import spotifyRedesignImage from './../../public/images/works/spotify_redesign.jpeg'
import artNewKerbinImage from './../../public/images/works/new_kerbin.png'
import artTheLoneSurvivor from './../../public/images/works/the_lone_survivor.png'
import artSeries1 from './../../public/images/works/series_late_night_drive_thru.png'
import artSeries2 from './../../public/images/works/series_a_new_dawn.png'
import artDelephummingfly from './../../public/images/works/combinedcreature.png'
import photoClearSkies from './../../public/images/works/clear_skies.jpg'

export default function ProjectsArt () {
    // types: 1 (User Interface), 2 (Redesign), 3 (Photography), 4 (Digital Artwork)
    let artProjectData = [
        {
            info: {
                title: 'Spotify Desktop App UI Redesign',
                types: [1, 2]
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
                title: 'New Kerbin',
                types: [4]
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
                title: 'The Lone Survivor',
                types: [4]
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
                title: 'Series No. 1: Late Nights',
                types: [4]
            },
            coverImage: {
                url: artSeries1,
                alt: 'A parked red sedan sits outside of a donut shop at night',
                blurString: 'T49i[H0^0000-T?w83=P[w~qE1Dk'
            },
            link: {
                url: '/images/works/series_late_night_drive_thru.png'
            }
        },
        {
            info: {
                title: 'Series No. 2: A New Dawn',
                types: [4]
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
                title: 'Delephummingfly',
                types: [4]
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
                title: 'Clear Skies',
                types: [3]
            },
            coverImage: {
                url: photoClearSkies,
                alt: 'The branches of a tree intercept a lone cloud in the bright blue skies',
                blurString: 'T55r=jk]4s,~jDN38^s+?aIXjr%1'
            },
            link: {
                url: '/images/works/clear_skies.jpg'
            }
        },
    ]
    return (
        <div className="flex flex-col w-full px-24 py-16">
            <h2 className="mx-auto font-sans font-extrabold text-center text-4xl tracking-tight">Art, Photography and Designs</h2>
            <div className="masonry-col-1 md:masonry-col-2 lg:masonry-col-3 xl:masonry-col-4 2xl:masonry-col-5 before:box-inherit after:box-inherit mt-8 gap-x-4 gap-y-6">
                {
                    artProjectData.map((data, i, array) => {
                        return <ProjectArtCard data={data}/>
                    })
                }
            </div>
        </div>
    )
}
