import { useState } from "react";

export const PrevStateCounter =()=>{

    const [Count,setCount]=useState(0)
    console.log("The count in render phase : "+ Count)

    const handleCount=()=>
    {   
        // console.log("Count value before : "+ Count)
        setCount((prev)=>{
            console.log("First updater fn: prev count :", prev)
            return prev+1;
        });
        
         setCount((prev)=>{
            console.log("Second updater fn: prev count :", prev)
            return prev+5;
        });
        
         setCount((prev)=>{
            console.log("Third updater fn: prev count :", prev)
            return prev+10;
        });
    }
    return (
        <button onClick={handleCount}>Count : {Count}</button>
    )
}