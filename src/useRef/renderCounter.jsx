import { useState, useEffect, useRef } from "react"

export const Render = () => {
    const [Text, setText] = useState("")
    const Render = useRef(0)

    useEffect(() => {
        Render.current = Render.current + 1;
    })

    return (
        <>
            <input type="text" onChange={e => setText(e.target.value)}/>
            <div>My name is {Text}</div>
            <div>
                I rendered {Render.current} times
            </div>
        </>
    )

}