import Image from "next/image"
import skoshImage from './../../../public/images/skosh_screenshot_preview.webp'

export default function SkoshProjectCarousel () {
    return (
        <div className="flex flex-row w-full h-full px-4 md:px-6 lg:pl-12 lg:pr-0">
            <div className="flex flex-col flex-shrink my-auto mx-auto lg:mx-0 w-2/3">
                <div className="flex flex-row mx-auto lg:mx-0">
                    <h3 className="my-auto font-sans text-light font-bold text-3xl">Skosh</h3>
                </div>
                <p className="mt-2 mx-auto lg:mx-0 pr-0 lg:pr-2 font-sans text-gray-200 font-medium text-normal text-center lg:text-left">Skosh (Skyclo Shell) is a bash-lookalike in the browser. It&rsquo;s based on modern DOM and web technologies. Done as a fun little project, it includes a simple command syntax parser and interpreter.</p>
            </div>
            <div className="relative hidden lg:block mt-auto ml-auto w-full h-full">
                <Image
                    src={skoshImage}
                    alt="A picture of the Skosh (Skyclo Shell) window"
                    placeholder="blur"
                />
            </div>
        </div>
    )
}
