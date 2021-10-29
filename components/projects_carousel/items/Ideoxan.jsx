
export default function IdeoxanProjectCarousel () {
    return (
        <div className="flex flex-row w-full h-full pl-12">
            <div className="flex flex-col flex-shrink my-auto">
                <div className="flex flex-row">
                    <img src="/images/beta_logo1_500px_accent_nobg.png" alt="Ideoxan Logo" className="w-5 h-auto my-auto"/>
                    <h3 className="my-auto ml-2 font-sans text-gray-50 font-bold text-3xl">ideoxan</h3>
                </div>
                <p className="mt-2 font-sans text-gray-200 font-medium text-normal">Empowering the next generation of programmers, makers, and inventors.</p>
                <a href="https://ideoxan.com" className="mt-4 px-8 py-3 bg-purple-600 w-max rounded-md text-sans text-purple-100 font-semibold text-sm shadow-sm">
                    Learn More
                </a>
            </div>
            <img src="/images/ix_screenshot_preview.png" alt="Ideoxan Website Preview" className=" my-auto w-auto h-full"/>
        </div>
    )
}
