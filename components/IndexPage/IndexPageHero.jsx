import * as Icon from 'react-feather'
import CodeBlock from './../CodeBlock/CodeBlock'
import Image from 'next/image'
import heroBlurImage from './../../public/images/hero_glow1.webp'

export default function IndexPageHero() {
    let code = [
        'class Conor {',
        '\tconstructor() {',
        '\t\tthis.name = \'Conor\'',
        '\t}',
        '',
        '\tsayHelloWorld() {',
        '\t\tconsole.log(\`Hello, World! My name is $\{this.name\}\`)',
        '\t\treturn',
        '\t}',
        '}',
        '',
        'let Me = new Conor()',
        'Me.sayHelloWorld()'
    ]
    return (
        <header className="flex row px-4 lg:px-12 xl:px-24 2xl:px-0 mx-auto w-full 2xl:max-w-7xl h-screen -mt-12">
            <div className="flex flex-col my-auto mx-auto lg:ml-0 lg:mr-auto">
                <h1
                    className="mx-auto animate-fadeupwards font-sans text-center lg:text-left text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text">
                        Hello, my name is Conor.
                </h1>
                <h2 className="mt-2 mx-auto lg:mx-0 animate-fadeupwards font-sans text-center lg:text-left text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400">Designer, Programmer, Entrepreneur</h2>
                <div className="flex flex-row mx-auto lg:mx-0 mt-4 animate-fadeupwards space-x-6">
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
            <div className="hidden lg:flex flex-row relative ml-auto my-auto animate-fadeupwards">
                <div className="absolute z-0 opacity-30 -left-1/3 -top-2/3">
                    <Image
                        src={heroBlurImage}
                        alt=""
                        placeholder="blur"
                    />
                </div>
                <CodeBlock code={code} output={'"Hello, World! My name is Conor"'}/>
            </div>
        </header>
    )
}
