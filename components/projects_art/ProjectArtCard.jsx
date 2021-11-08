import Image from 'next/image'

export default function ProjectArtCard ({data}) {
    return (
        <div
            className="relative group flex flex-col transform scale-100 hover:scale-105 w-full mb-6 bg-black rounded-lg ring-1 ring-gray-500 ring-opacity-20 shadow-lg hover:shadow-2xl cursor-pointer"
            onClick={(e) => {
                e.preventDefault()
                window.location.href = data.link.url
            }}
        >
            <Image
                src={data.coverImage.url}
                alt={data.coverImage.alt}
                className="w-full h-auto rounded-lg"
                placeholder="blur"
                blurDataURL={'data:image/jpeg;base64,/9j/' + data.coverImage.blurString}
            />
            <div className="absolute flex flex-col w-full h-full px-4 py-2 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 bg-opacity-20 rounded-lg">
                <h3 className="group-hover:animate-fadeupwards mt-auto font-sans font-bold text-left text-lg text-gray-50">{data.info.title}</h3>
                <div className="group-hover:animate-fadeupwards my-2 flex flex-row flex-wrap gap-2">
                    {
                        data.info.types.map((value, i, array) => {
                            switch (value) {
                                case 1:
                                    return (
                                        <div className="px-1.5 py-1 rounded-full w-max font-sans font-bold tracking-wide text-center text-2xs text-green-900 bg-green-200">
                                            User Interface (UI)
                                        </div>
                                    )
                                case 2:
                                    return (
                                        <div className="px-1.5 py-1 rounded-full w-max font-sans font-bold tracking-wide text-center text-2xs text-blue-900 bg-blue-200">
                                            Redesign
                                        </div>
                                    )
                                case 3:
                                    return (
                                        <div className="px-1.5 py-1 rounded-full w-max font-sans font-bold tracking-wide text-center text-2xs text-yellow-900 bg-yellow-200">
                                            Photography
                                        </div>
                                    )
                                case 4:
                                    return (
                                        <div className="px-1.5 py-1 rounded-full w-max font-sans font-bold tracking-wide text-center text-2xs text-purple-900 bg-purple-200">
                                            Digital Artwork
                                        </div>
                                    )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
