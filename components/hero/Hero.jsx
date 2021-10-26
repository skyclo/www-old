import * as Icon from 'react-feather'
import CodeBlock from '../codeblock/CodeBlock'

export default function Hero() {
    return (
        <header className="flex row w-screen max-w-7xl mx-auto h-screen -mt-12">
            <div className="flex flex-col my-auto">
                <h1
                    className="font-sans text-left text-6xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text">
                        Hello, my name is Conor.
                </h1>
                <h2 className="mt-2 font-sans text-left text-xl font-semibold text-gray-400">Designer, Programmer, Entrepreneur</h2>
                <div className="flex flex-row mt-4 space-x-6">
                    <a target="_blank" href="https://github.com/skyclo">
                        <Icon.GitHub className="w-4 h-4 text-gray-50 opacity-50 hover:opacity-100" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" stroke-width="2"/>
                    </a>
                    <a target="_blank" href="https://twitter.com/skyclo_">
                        <Icon.Twitter className="w-4 h-4 text-gray-50 opacity-50 hover:opacity-100" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" stroke-width="2"/>
                    </a>
                    <a target="_blank" href="https://dribbble.com/skyclo">
                        <Icon.Dribbble className="w-4 h-4 text-gray-50 opacity-50 hover:opacity-100" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" stroke-width="2"/>
                    </a>
                    <a target="_blank" href="https://discordapp.com/users/717468257107574804">
                        <Icon.MessageSquare className="w-4 h-4 text-gray-50 opacity-50 hover:opacity-100" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" stroke-width="2"/>
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/skyclo">
                        <Icon.Linkedin className="w-4 h-4 text-gray-50 opacity-50 hover:opacity-100" strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="currentColor" stroke-width="2"/>
                    </a>
                </div>
            </div>
            <div className="flex flex-row relative ml-auto my-auto">
                <img src="/images/hero_glow1.png" className="absolute right-1/4 -top-1/2 opacity-30" alt=""/>
                <CodeBlock/>
            </div>
        </header>
    )
}
