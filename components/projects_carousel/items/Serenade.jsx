import Image from "next/image"

export default function SerenadeProjectCarousel () {
    return (
        <div className="flex flex-row w-full h-full px-4 md:px-6 lg:pl-12 lg:pr-0">
            <div className="flex flex-col flex-shrink my-auto mx-auto lg:mx-0 w-2/3">
                <div className="flex flex-col mx-auto">
                    <img src="/images/serenade.svg" alt="Serenade Logo" className="w-10 h-auto mb-2 mx-auto"/>
                    <h3 className="my-auto font-sans text-gray-50 font-bold text-3xl text-center">Serenade 2.0</h3>
                </div>
                <p className="mt-2 mx-auto font-sans text-gray-200 font-medium text-normal text-center">An intelligent Discord music bot that uses machine learning algorithms and voice-activated queues to serve music to users. (Discontinued) </p>
            </div>
            <div className="relative hidden lg:block mt-auto ml-auto w-full h-full mr-4">
                <Image src="/images/serenade_screenshot_preview.webp" alt="A picture of the Serenade Help Command Output" layout="fill" objectFit="contain"/>
            </div>
        </div>
    )
}
