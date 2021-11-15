import CodeBlock from "../../code_block/CodeBlock"

export default function SCDLProjectCarousel () {
    let code = [
        "const SCDL = require('node-scdl')",
        "",
        "const SoundCloudDownloader = new SCDL('<client_id>')",
        "",
        "let id = SoundCloudDownloader.getID('<song_url>')",
        "let info = SoundCloudDownloader.getInfo(id)",
        "console.log(info) // Returns Soundcloud Metadata",
        "",
        "SoundCloudDownloader.getStream(id) // Pipe the ReadableStream",
    ]
    return (
        <div className="flex flex-row w-full h-full px-4 md:px-6 lg:px-12">
            <div className="flex flex-col flex-shrink my-auto mx-auto lg:mx-0">
                <div className="flex flex-row mx-auto lg:mx-0">
                    <h3 className="my-auto font-sans text-gray-50 font-bold text-3xl">node-scdl</h3>
                </div>
                <p className="mt-2 mx-auto lg:mx-0 pr-0 lg:pr-2 font-sans text-gray-200 font-medium text-normal text-center lg:text-left">An easy to use, minimal dependency Soundcloud song downloader package for NodeJS.</p>
                <a href="https://github.com/skyclo/node-scdl" className="mt-4 mx-auto lg:mx-0 px-8 py-3 bg-blue-500 w-max rounded-md text-sans text-blue-100 font-semibold text-sm shadow-sm ring-1 ring-blue-50 ring-opacity-20">
                    View the Source Code
                </a>
            </div>
            <div className="my-auto ml-auto hidden lg:flex">
                <CodeBlock code={code}/>
            </div>
        </div>
    )
}
