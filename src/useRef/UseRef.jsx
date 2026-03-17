import { useRef } from "react";

export function Appp() {
    const countRef = useRef(0);

    function handleClick() {
        countRef.current++;
        console.log(countRef.current)
    }

    return(
        <button onClick={handleClick}>Click me</button>
    )
}