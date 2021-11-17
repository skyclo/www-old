let packageInfo = require('./../package.json')

export default function DevBanner () {
    if (process.env.APP_DEV_MODE == 'false') return (<></>)

    return (
        <div className="dev-banner-info absolute z-40 top-auto bottom-0 container-full-width py-4 px-3 overflow-hidden">
            <div className="animate-fadeupwards flex flex-row content-max px-6 py-4 bg-gray-900 rounded-2xl shadow-md">
                <div className="flex flex-col mr-4 my-auto">
                    <h3 className="animate-fadeupwards font-sans font-extrabold text-left text-sm tracking-tight text-light">You are viewing an in-development version of the website</h3>
                    <p className="animate-fadeupwards mt-0.5 font-sans font-medium text-left text-2xs tracking-normal text-light-body">To view the production-ready build, visit <a href="https://skyclo.dev" className="hover:opacity-70">skyclo.dev</a></p>
                    <p className="animate-fadeupwards mt-1 font-mono font-normal text-left text-3xs tracking-normal text-light-grayed-out">buildinfo: proj_ver {packageInfo.version}, provider_ver {packageInfo.dependencies['next']}, renderer_ver {packageInfo.dependencies['react']}, deps [{Object.keys(packageInfo.dependencies).join(', ')}], dev_deps [{Object.keys(packageInfo.devDependencies).join(', ')}]</p>
                </div>
                <div
                    className="amimate-fadeupwards ml-auto bg-light my-auto px-4 py-2 rounded-lg text-center text-xs font-sans font-semibold tracking-tight cursor-pointer"
                    onClick={(e) => {
                        document.getElementsByClassName('dev-banner-info')[0].remove()
                    }}
                >
                    Okay
                </div>
            </div>
        </div>
    )
}
