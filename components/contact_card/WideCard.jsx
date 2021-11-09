import * as Icon from 'react-feather'

export default function WideCard({data}) {
    let IconComponent = Icon[data.icon.name]
    return (
        <a target="_blank" href={data.url} className="flex flex-row flex-grow px-8 py-8 w-full bg-gray-50 ring-1 ring-gray-500 ring-opacity-20 shadow-md hover:shadow-lg rounded-lg">
            <IconComponent
                className="my-auto w-8 h-auto"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                stroke={data.icon.color}
                stroke-width="2"
            />
            <div className="mx-6 my-auto">
                <h3 className="font-sans font-semibold text-xl text-left leading-none text-gray-950">{data.name}</h3>
                <h4 className="font-sans font-bold text-xs text-left text-gray-400">{data.subtitle}</h4>
            </div>
            <Icon.ExternalLink className="ml-auto my-auto w-4 h-auto text-gray-400" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" stroke-width="2"/>
        </a>
    )
}
