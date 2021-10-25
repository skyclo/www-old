import Head from 'next/head'
import NavigationBar from '../components/navigation/NavigationBar'


export default function Home() {
    return (
        <>
            <Head>
                <title>Skyclo | Home</title>
            </Head>
            <body className="h-screen w-screen bg-gray-900">
                <NavigationBar/>
            </body>
        </>
    )
}
