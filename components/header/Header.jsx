
export default function Header({headerName, colorFrom, colorTo}) {
    return (
        <header className="w-full h-1/2 -mt-12">
            <div className="flex flex-col w-full h-full bg-gray-950">
                <div className="my-auto max-w-7xl w-full mx-auto">
                    <h1 className={"w-min font-sans font-extrabold text-5xl text-left tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-" + colorFrom + " to-" + colorTo}>
                        {headerName}
                    </h1>
                </div>
            </div>
            <div className="w-full h-12 bg-gray-950" style={{borderBottomLeftRadius: 50 + "% " + 40 + "%", borderBottomRightRadius: 50 + "% " + 40 + "%"}}>
                {/* Don't even ask */}
            </div>
        </header>
    )
}
