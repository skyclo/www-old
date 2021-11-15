
export default function CodeBlockLine({line, code}) {
    return (
        <div className="flex flex-row" key={line}>
            <span className="font-mono text-xs my-auto text-right align-right w-8 pl-4 pr-1 text-dark-body font-bold">
                {line}
            </span>
            <span className="font-mono text-xs bg-transparent my-auto bg-opacity-0 ml-4 mr-6 text-light-grayed-out" dangerouslySetInnerHTML={code}></span>
        </div>
    )
}
