import { Component1 } from "./component1"
import { useState } from "react"
import { UserContext } from "./userContext"


export function Component() {
    const [name, setname] = useState("DripTex")
    return (
        <div className="box"

        >
            <h1>Component</h1>
            <p>{`Hello ${name}`}</p>
            <UserContext.Provider value={[name, setname]}>
                <Component1  />
            </UserContext.Provider>
        </div>
    )
}