import * as Icon from 'react-feather'

export default function RatingsCardThin ({data}) {
    let stars = new Array(5)
    for (let i = 0; i < 5; i++) {
        stars[i] = (i < data.stars)
    }
    return (
        <div className="flex flex-col px-8 py-8 ring-1 ring-gray-500 ring-opacity-20 rounded-lg">
            <h3 className="mb-2 font-sans font-semibold text-xl text-left leading-none text-dark">{data.name}</h3>
            <div className="flex flex-row space-x-2 mt-auto">
                {
                    stars.map((starData, i, arr) => {
                        if (starData) {
                            return (
                                <Icon.Star className="my-auto w-4 h-4 text-purple-500" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" stroke="currentColor" stroke-width="2"/>
                            )
                        } else {
                            return (
                                <Icon.Star className="my-auto w-4 h-4 text-light-grayed-out" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" stroke="currentColor" stroke-width="2"/>
                            )
                        }

                    })
                }

                <div className="pl-2 font-sans font-medium text-sm my-auto text-left text-light-grayed-out">{data.rating}</div>
            </div>
        </div>
    )
}
