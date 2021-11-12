import { useEffect, useState } from 'react'

export default function ProjectArtFilterPill ({filterID, setParentFilter, name, color}) {
    const [filterActive, setFilterActive] = useState(false)

    const defaultPillClassNames     = `flex flex-row my-auto px-4 py-2 w-max rounded-full cursor-pointer ring-1 `

    const inactivePillClassNames    = `ring-gray-500 ring-opacity-20 bg-gray-50 bg-opacity-100 text-gray-500`
    const activePillClassNames      = `ring-${color}-500 ring-opacity-50 bg-${color}-200 bg-opacity-50 text-${color}-500`

    useEffect(() => {
        const elm = document.getElementById(`filter-id-${filterID}`)
        if (filterActive) {
            elm.setAttribute('class', defaultPillClassNames + activePillClassNames)
            setParentFilter(filterID)
        } else {
            elm.setAttribute('class', defaultPillClassNames + inactivePillClassNames)
            setParentFilter(null)
        }

    }, [filterActive])
    return (
        <div id={'filter-id-' + filterID} className="" onClick={(e) => {setFilterActive(!filterActive)}}>
            {name}
        </div>
    )
}
