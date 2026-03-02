import { useContext } from "react"
import { UserContext } from "./component" 

export function Component3(){
    const name = useContext(UserContext)
    return (
        <div class="box"
        
        >
            
            <h1>Component3</h1>
            <p>{`BYE ${name}`}</p>
        </div>
    )
}