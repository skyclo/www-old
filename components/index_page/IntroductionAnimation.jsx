import { useEffect, useState } from 'react'

export default function IntroductionAnimation () {
    let [visible, setVisible] = useState(false)
    useEffect(() => {
        let key = "sk0_intro_already_shown"
        let alreadyShown = localStorage.getItem(key)
        if (!alreadyShown) {
            setVisible(true)
            localStorage.setItem(key, true)
        }
    })

    if (visible) return (
        <div className="absolute flex container-full-screen bg-dark animate-logobackintro opacity-0">
            <img src="/images/Skyclo_logo.svg" className="my-auto mx-auto w-48 h-auto animate-logointro opacity-0" alt="Skyclo Branding Logo"/>
            <div className="">

            </div>
        </div>
    )

    return (<></>)
}
