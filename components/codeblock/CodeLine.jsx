import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-dark.css'

export default function CodeLine({line, code}) {
    return (
        <div className="flex flex-row">
            <div className="font-mono text-xs my-auto text-right align-right w-8 pl-4 pr-1 text-gray-700 font-bold">
                {line}
            </div>
            <Highlight className="font-mono text-xs bg-transparent my-auto bg-opacity-0 ml-4 mr-6">
                {code}
            </Highlight>
        </div>
    )
}