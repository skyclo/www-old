import Image from 'next/image'
import svg from '../../public/images/Skyclo_logo.svg'

export default function Splash () {
    return (
        <div className="absolute z-40 flex container-full-screen bg-dark animate-logobackintro opacity-100">
            <div className="relative my-auto mx-auto w-48 h-auto">
                <Image src={svg} priority="" className="relative animate-logointro opacity-0" alt="Skyclo Branding Logo" layout="intrinsic"/>
            </div>
            <div className="">

            </div>
        </div>
    )
}
