import CodeLine from './CodeLine'

export default function CodeBlock () {
    let code = [
        'class Conor {',
        '\tconstructor() {',
        '\t\tthis.name = \'Conor\';',
        '\t}',
        '',
        '\tsayHelloWorld() {',
        '\t\tconsole.log(\`Hello, World! My name is $\{this.name\}\`);',
        '\t\treturn;','\t}',
        '}',
        '',
        'let Me = new Conor();',
        'Me.sayHelloWorld();'
    ]
    return (
        <div className="flex flex-col z-10 my-auto ml-auto w-max max-w-full bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg shadow-2xl">
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
                    code.map((value, index, array) => {
                        return <CodeLine line={index} code={value}/>
                    })
                }
            </div>
            <div className="border-t-2 border-gray-50 border-opacity-10 w-full px-6 py-3">
                <div class="flex flex-row font-mono text-left text-medium text-xs space-x-4 text-gray-50">
                    <p>$</p>
                    <p className="text-green-500">"Hello, World! My name is Conor"</p>
                </div>
            </div>
        </div>
    )
}
