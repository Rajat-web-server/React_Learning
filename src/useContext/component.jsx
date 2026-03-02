import { Component1 } from "./component1"
import { useState, createContext } from "react"

export const UserContext = createContext();
export function Component() {
    const [name, setname] = useState("DripTex")
    return (
        <div className="box"

        >
            <h1>Component</h1>
            <p>{`Hello ${name}`}</p>
            <UserContext.Provider value={name}>
                <Component1  />
            </UserContext.Provider>
        </div>
    )
}