import * as Icon from 'react-feather'

export default function ProjectsCallToAction () {
    return (
        <div class="flex flex-col w-full py-16 bg-gray-950">
            <h3 className="mx-auto font-sans font-bold text-center text-2xl text-gray-50">Something Missing?</h3>
            <p className="mx-auto mt-2 px-2 font-sans font-medium text-center text-sm text-gray-200">Check out more of my projects and open source contributions on my GitHub profile.</p>
            <a target="_blank" href="https://github.com/skyclo" className="flex flex-row mt-4 mx-auto px-8 py-3 bg-transparent border-2 border-gray-50 w-max rounded-md text-sans text-gray-50 font-semibold text-sm ">
                <Icon.GitHub className="w-4 h-4 my-auto" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" stroke-width="2"/>
                <span className="ml-2">View Profile</span>
            </a>
        </div>
    )
}
