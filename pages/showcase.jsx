import Head from 'next/head'
import NavigationBar from '../components/navigation/NavigationBar'
import Header from '../components/header/Header'

export default function Showcase() {
    return (
        <html lang="en">
            <Head>
                <title>Skyclo | Showcase</title>
            </Head>
            <body className="h-screen w-screen bg-gray-50 overflow-x-hidden">
                <NavigationBar/>
                <Header headerName="Showcase" colorFrom="orange-500" colorTo="yellow-500"/>
            </body>
        </html>
    )
}
