import Link from "next/link"

export default function Footer () {
    return (
        <footer className="relative flex flex-row w-full mt-16 bg-gray-950 overflow-hidden">
            <div className="px-12 py-14">
                <h2 className="font-sans font-extrabold tracking-wide text-left text-4xl text-gray-50 opacity-30">skyclo</h2>
                <h3 className="mt-0.5 font-sans font-bold tracking-normal text-left text-xs text-gray-50 opacity-30">A Conor Daly Brand</h3>
                <p className="mt-6 font-sans font-medium text-left text-xs text-gray-50 opacity-30">(C) 2018 - 2021</p>
                <ul className="mt-10 space-y-2">
                    <li className="w-max font-sans font-semibold text-left text-sm text-gray-50 opacity-30 hover:opacity-70">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="w-max font-sans font-semibold text-left text-sm text-gray-50 opacity-30 hover:opacity-70">
                        <Link href="/showcase">
                            <a>Showcase</a>
                        </Link>
                    </li>
                    <li className="w-max font-sans font-semibold text-left text-sm text-gray-50 opacity-30 hover:opacity-70">
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="w-max font-sans font-semibold text-left text-sm text-gray-50 opacity-30 hover:opacity-70">
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <img src="/images/Skyclo_logo.svg" alt="Skyclo Branding Logo" className="relative ml-auto -mt-12 -mb-14 transform scale-200 opacity-10"/>
        </footer>
    )
}
