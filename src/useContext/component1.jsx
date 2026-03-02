import { Component2 } from "./comnponent2"

export function Component1(props){


    return (
        <div class="box"
        
        >
            
            
            <h1>Component1</h1>
            <Component2 name={props.name}/>
        </div>
    )
}