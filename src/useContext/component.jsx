import { Component1 } from "./component1"
import { useState } from "react"

export function Component (){
    const [name,setname]=useState("DripTex")
    return (
        <div class="box"
        
        >
            <h1>Component</h1>
            <p>{`Hello ${name}`}</p>
            <Component1 name={name}/>
        </div>
    )
}