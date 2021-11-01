
export default function Header({headerName, colorFrom, colorTo}) {
    return (
        <header className="w-full h-1/4 md:h-1/3 lg:h-1/2 -mt-12 bg-gray-950 pb-12">
            <div className="flex flex-col w-full h-full px-4 lg:px-12 xl:px-24">
                <div className="my-auto w-full mx-auto">
                    <h1 className={"animate-fadeupwards mt-12 mx-auto lg:mx-0 w-min font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-" + colorFrom + " to-" + colorTo}>
                        {headerName}
                    </h1>
                </div>
            </div>
        </header>
    )
}
