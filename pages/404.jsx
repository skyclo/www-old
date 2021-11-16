import { useEffect } from 'react'
import HeadMetadata from './../components/HeadMetadata'
import Navbar from './../components/navbar/Navbar'
import Image from 'next/image'
import errorImage from './../public/images/error_tv.webp'
import DevBanner from '../components/DevBanner'

export default function Custom404Page () {

    useEffect(() => {
        let c=0

        document.onkeyup = (e) => {
            if (e.key==' ') c++

            if (c==7) document.getElementById('u_0281392').classList.add('animate-bounce')
        }
    })

    return (
        <>
            <HeadMetadata pageTitle="Error: Not Found"/>
            <body className="h-screen w-screen bg-dark overflow-x-hidden">
                <Navbar/>
                <DevBanner/>
                <main className="flex flex-col h-full w-full bg-dark -mt-12">
                    <div className="mx-auto my-auto">
                        <div className="relative mx-auto w-48 h-auto">
                            <Image
                                id="u_0281392"
                                src={errorImage}
                                alt="Old 90's CRT TV"
                                placeholder="blur"
                            />
                        </div>
                        <h1 className="mx-auto font-sans text-center font-extrabold tracking-tight text-light text-6xl">Uh oh...</h1>
                        <h2 className="mx-auto mt-2 font-sans text-center font-medium text-gray-200 text-base">Looks like something broke</h2>
                        <p className="mx-auto mt-4 font-mono text-center font-medium text-gray-500 text-xs">404 - Not Found</p>
                    </div>
                </main>
            </body>
        </>
    )
}
