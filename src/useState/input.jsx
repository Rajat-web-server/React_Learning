import { useState } from "react";

export const Input =()=>{

    const [message, setMessage]=useState("");

    const handleInput = (event)=>{
        setMessage(event.target.value)
    }

    return (
        <div>
            <input type="text"value={message} placeholder="type" onChange={handleInput} />

        </div>
    )
}