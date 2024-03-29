import Link from 'next/link'

export default function NavbarButton({url, name}) {
    return (
        <Link href={url}>
            <a className="text-xs md:text-sm font-sans font-medium text-light rounded-md bg-gray-50 bg-opacity-0 hover:bg-opacity-10 opacity-30 hover:opacity-90 py-2 px-2 md:px-5 leading-none">{name}</a>
        </Link>
    )
}
