import Image from "next/image"
import ideoxanScreenshot from './../../../public/images/ix_screenshot_preview.webp'

export default function IdeoxanProjectCarousel () {
    return (
        <div className="flex flex-row w-full h-full px-4 md:px-6 lg:pl-12 lg:pr-0">
            <div className="flex flex-col flex-shrink my-auto mx-auto lg:mx-0 w-2/3">
                <div className="flex flex-row mx-auto lg:mx-0">
                    <img src="/images/beta_logo1_500px_accent_nobg.png" alt="Ideoxan Logo" className="w-5 h-auto my-auto"/>
                    <h3 className="my-auto ml-2 font-sans text-light font-bold text-3xl">ideoxan</h3>
                </div>
                <p className="mt-2 mx-auto lg:mx-0 pr-0 lg:pr-2 font-sans text-gray-200 font-medium text-normal text-center lg:text-left">Empowering the next generation of programmers, makers, and inventors.</p>
                <a href="https://ideoxan.com" className="mt-4 mx-auto lg:mx-0 px-8 py-3 bg-purple-600 hover:bg-purple-500 w-max rounded-md text-sans text-purple-100 font-semibold text-sm shadow-sm hover:shadow-lg ring-1 ring-purple-50 ring-opacity-20">
                    Learn More
                </a>
            </div>
            <div className="relative hidden lg:block my-auto ml-auto w-full h-full">
                <Image
                    src={ideoxanScreenshot} alt="A picture of the Ideoxan website"
                    placeholder="blur"
                    priority="true"
                />
            </div>
        </div>
    )
}
