import CodeBlockLine from './CodeBlockLine'
import Highlight from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

export default function CodeBlock ({code, output}) {
    let highlightedCode = Highlight.highlightAuto(code.join('\n')).value.split('\n')
    return (
        <div className="flex flex-col flex-shrink z-10 my-auto ml-auto min-w-min max-w-full bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg shadow-2xl ring-1 ring-gray-500 ring-opacity-10">
            <div className="grid gird-flow-col grid-cols-3 w-full h-6 px-4 rounded-t-md">
                <div className="flex flex-row space-x-1 my-auto">
                    <div className="bg-gray-700 rounded-full w-2 h-2"></div>
                    <div className="bg-gray-700 rounded-full w-2 h-2"></div>
                    <div className="bg-gray-700 rounded-full w-2 h-2"></div>
                </div>
                <h6 className="font-sans font-bold text-gray-700 text-xs text-center mx-auto my-auto px-4">index.js</h6>
            </div>
            <div className="grid grid-flow-row bg-transparent space-y-0 mt-2 mb-4">
                {
                    highlightedCode.map((value, i, arr) => {
                        return <CodeBlockLine key={i} line={i} code={{__html: "<pre>" + value + "</pre>"}}/>
                    })
                }
            </div>
            <CodeBlockOutput output={output}/>
        </div>
    )
}

function CodeBlockOutput ({output}) {
    if (output) {
        return (
            <div className="border-t-2 border-gray-50 border-opacity-10 w-full px-6 py-3">
                <div className="flex flex-row font-mono text-left text-medium text-xs space-x-4 text-light">
                    <p>$</p>
                    <p className="text-green-500">{output}</p>
                </div>
            </div>
        )
    } else return null
}
