import { useState } from "react";

export const Counter =()=>{
    // const [count, setcount]=useState(0)
    const [count, setcount]=useState(()=>{
        console.log("initial stae funciton")
        return 0;//lazy initialization initiats only 1 time --> reading from local storage, fetching data etc
    })
    console.log("Done!!")

    let handleClick =()=>{
        setcount(count+1)
        // count = count + 1;
        console.log(count);
    }
    return(
        <button className="p-2 bg-cyan-700" onClick={handleClick}>count : {count}</button>
    )
}