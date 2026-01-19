import { useState } from "react";

export const Counter =()=>{

    const [Count,setCount]=useState(0)
    console.log("The count in render phase : "+ Count)

    const handleCount=()=>
    {   
        // console.log("Count value before : "+ Count)
        setCount(Count+1);
        console.log("Trigger phase Count value after : "+ Count)
         setCount(Count+5);
        console.log("Trigger phase Count value after : "+ Count)
         setCount(Count+10);
        console.log("Trigger phase Count value after : "+ Count)
    }
    return (
        <button onClick={handleCount}>Count : {Count}</button>
    )
}