import ProjectArtCard from "./ProjectArtCard"

export default function ProjectsArt () {
    // types: 1 (User Interface), 2 (Redesign), 3 (Photography), 4 (Digital Artwork)
    let artProjectData = [
        {
            info: {
                title: 'Spotify Desktop App UI Redesign',
                types: [1, 2]
            },
            coverImage: {
                url: 'https://i.imgur.com/HPrNX8M.jpeg',
                alt: 'A screenshot of the Spotify desktop app user interface redone'
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
                url: '/images/works/new_kerbin.png',
                alt: 'Two alien astronaughts on a cliff overlooking a colony and watching a rocket launch'
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
                url: '/images/works/the_lone_survivor.png',
                alt: 'A man stands in the quiet streets of dismay'
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
                url: '/images/works/series_late_night_drive_thru.png',
                alt: 'A parked red sedan sits outside of a donut shop at night'
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
                url: '/images/works/series_a_new_dawn.png',
                alt: 'A man stands on a pier gazing at the rising sun'
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
                url: '/images/works/combinedcreature.png',
                alt: 'A hummingbird with the head of an elephant, wings of a butterfly, and deer horns'
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
                url: '/images/works/clear_skies.jpg',
                alt: 'The branches of a tree intercept a lone cloud in the bright blue skies'
            },
            link: {
                url: '/images/works/clear_skies.jpg'
            }
        },
    ]
    return (
        <div class="flex flex-col w-full px-24 py-16">
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