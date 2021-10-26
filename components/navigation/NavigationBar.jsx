import NavigationBarLink from './NavigationBarLink'
import Link from 'next/link'

export default function NavigationBar() {
    return (
        <nav className="flex flex-row w-full h-12 py-2 px-8 bg-transparent">
            <Link href="/">
                <a>
                    <img src="/images/Skyclo_logo_460x460.png" className="w-6 h-6 my-auto" alt="Brand Logo"/>
                </a>
            </Link>
            <div className="ml-auto my-auto">
                <ul className="flex flex-row space-x-4 ">
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
