import Head from 'next/head'
import NavigationBar from '../components/navigation/NavigationBar'
import Hero from '../components/hero/Hero'

export default function Home() {
    return (
        <>
            <Head>
                <title>Skyclo | Home</title>
            </Head>
            <body className="h-screen w-screen bg-gray-950 overflow-x-hidden">
                <NavigationBar/>
                <Hero/>
            </body>
        </>
    )
}
