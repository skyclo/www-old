import NavigationBarLink from './NavigationBarLink'
import Link from 'next/link'
import Image from 'next/image'
import skycloLogo from './../../public/images/Skyclo_logo.svg'

export default function NavigationBar() {
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
                        <NavigationBarLink page="/" pageName="Home"/>
                    </li>
                    <li>
                        <NavigationBarLink page="/showcase" pageName="Showcase"/>
                    </li>
                    <li>
                        <NavigationBarLink page="/about" pageName="About"/>
                    </li>
                    <li>
                        <NavigationBarLink page="/contact" pageName="Contact"/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
