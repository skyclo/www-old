import * as Icon from 'react-feather'

export default function CallToAction ({data}) {
    return (
        <div className="flex w-full py-16 px-24 bg-gray-950">
            <div className="flex flex-col lg:flex-row mx-auto w-full max-w-7xl">
                <div className="animate-fadeupwards flex flex-col my-auto lg:pr-12">
                    <h3 className="mx-auto lg:mx-0 font-sans font-bold text-center lg:text-left text-2xl text-gray-50">{data.title}</h3>
                    <p className="mx-auto lg:mx-0 mt-2 font-sans font-medium text-center lg:text-left text-sm text-gray-200">{data.description}</p>
                </div>
                <div className="animate-fadeupwards flex flex-col sm:flex-row mx-auto lg:mr-0 lg:my-auto sm:space-x-8 ml-auto">
                    {
                        data.buttons.map((button) => {
                            let IconComponent = Icon[button.icon]
                            return (
                                <a
                                    target="_blank"
                                    href={button.url}
                                    className="flex flex-row flex-shrink-0 h-min mt-4 mx-auto px-8 py-3 bg-transparent border-2 border-gray-50 w-max rounded-md text-sans text-gray-50 font-semibold text-sm"
                                >
                                    <IconComponent className="w-4 h-4 my-auto" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" stroke-width="2"/>
                                    <span className="ml-2 my-auto">{button.text}</span>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
