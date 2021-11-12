import NavbarButton from './NavbarButton'
import Link from 'next/link'
import Image from 'next/image'
import skycloLogo from './../../public/images/Skyclo_logo.svg'

export default function Navbar() {
    return (
        <nav className="relative flex flex-row z-20 w-full h-12 py-2 px-8 bg-transparent">
            <Link href="/" className="">
                <a className="relative w-4 h-4 sm:w-6 sm:h-6 flex-shrink-0 my-auto">
                    <Image
                        src={skycloLogo}
                        alt="Brand Logo"
                    />
                </a>
            </Link>
            <div className="ml-auto my-auto">
                <ul className="flex flex-row space-x-1 md:space-x-2 lg:space-x-4 2xl:space-x-6">
                    <li>
                        <NavbarButton
                            url="/"
                            name="Home"
                        />
                    </li>
                    <li>
                        <NavbarButton
                            url="/showcase"
                            name="Showcase"
                        />
                    </li>
                    <li>
                        <NavbarButton
                            url="/about"
                            name="About"
                        />
                    </li>
                    <li>
                        <NavbarButton
                            url="/contact"
                            name="Contact"
                        />
                    </li>
                </ul>
            </div>
        </nav>
    )
}
