import Link from 'next/link'

export default function NavigationBarLink({page, pageName}) {
    return (
        <Link href={page}>
            <a className="text-sm font-sans font-medium text-gray-400 hover:text-gray-200 rounded-md bg-gray-50 bg-opacity-0 hover:bg-opacity-10 py-2 px-5 leading-none">{pageName}</a>
        </Link>
    )
}
