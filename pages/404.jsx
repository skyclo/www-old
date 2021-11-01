import Head from 'next/head'
import NavigationBar from '../components/navigation/NavigationBar'

export default function Custom404Page () {
    return (
        <html lang="en">
            <Head>
                <title>Skyclo | 404</title>
            </Head>
            <body className="h-screen w-screen bg-gray-950 overflow-x-hidden">
                <NavigationBar/>
                <main className="flex flex-col h-full w-full bg-gray-950 -mt-12">
                    <div className="mx-auto my-auto">
                        <img src="/images/error_tv.png" alt="Old 90's CRT TV" className="mx-auto h-60 w-auto"/>
                        <h1 className="mx-auto font-sans text-center font-extrabold tracking-tight text-gray-50 text-6xl">Uh oh...</h1>
                        <h2 className="mx-auto mt-2 font-sans text-center font-medium text-gray-200 text-base">Looks like something broke</h2>
                        <p className="mx-auto mt-4 font-mono text-center font-medium text-gray-500 text-xs">404 - Not Found</p>
                    </div>
                </main>
            </body>
        </html>
    )
}
