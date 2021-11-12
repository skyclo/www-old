import ProjectArtCard from "./ArtCard"
import artData from './artData'
import artPills from './artFilters'
import ProjectArtFilterPill from "./ArtFilterPill"
import { useEffect, useState } from "react"

export default function ProjectsArt () {
    const [currentFilter, setCurrentFilter] = useState(null)

    useEffect(() => {
        let cardsToHide = [], cardsNotToHide = []

        if (currentFilter == null) {
            cardsNotToHide.push(...(artData.map((data) => data.info.id)))

            for (let i = 0; i < artPills.length; i++) {
                document.getElementById(`filter-id-${i + 1}`).style.display = 'flex'
            }
        } else {
            artData.forEach((data) => {
                if (data.info.types.includes(currentFilter)) {
                    cardsNotToHide.push(data.info.id)
                } else {
                    cardsToHide.push(data.info.id)
                }
            })

            for (let i = 0; i < artPills.length; i++) {
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
                        artPills.map((pillData, i) => {
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
                        artData.map((data, i, array) => {
                            return <ProjectArtCard data={data}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
