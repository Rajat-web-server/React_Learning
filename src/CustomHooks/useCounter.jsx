//Custom Hook

import {useState} from "react"

export const UseCounter = (initialValue=0)=>{

    const [count, setcount] = useState(initialValue);

    const increment =()=>{setcount(prev=>prev+1)}
    const decrement =()=>{setcount(prev=>prev-1)}
    const reset =()=>{setcount(initialValue)}

    return{count, increment, decrement, reset};


}