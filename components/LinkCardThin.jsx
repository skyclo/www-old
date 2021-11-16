import * as Icon from 'react-feather'

export default function LinkCardThin({data}) {
    let IconComponent = Icon[data.icon.name]
    return (
        <a target="_blank" href={data.url} className="flex flex-row flex-grow px-8 py-8 w-full bg-light ring-1 ring-gray-500 ring-opacity-20 shadow-md hover:shadow-lg rounded-lg" rel="noreferrer">
            <IconComponent
                className="my-auto w-8 h-auto"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                stroke={data.icon.color}
                stroke-width="2"
            />
            <div className="mx-6 my-auto">
                <h3 className="font-sans font-semibold text-xl text-left leading-none text-dark">{data.name}</h3>
                <h4 className="font-sans font-bold text-xs text-left text-light-grayed-out">{data.subtitle}</h4>
            </div>
            <Icon.ExternalLink className="ml-auto my-auto w-4 h-auto text-light-grayed-out" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" stroke-width="2"/>
        </a>
    )
}
