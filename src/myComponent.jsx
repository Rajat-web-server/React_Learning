import {useState, useEffect} from "react"

export function MyComponent() {
    const[width,setWidth]=useState(window.innerWidth)
    const[height,setHeight]=useState(window.innerHeight)




    function handleResize(){
        setWidth(window.innerWidth)
        // 
        setHeight(window.innerHeight)
        // 
    }
    useEffect(()=>{
    window.addEventListener("resize",handleResize)
    console.log(window.innerWidth)
    console.log("Event Listener added")
    
},[])

    return (
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    )
}