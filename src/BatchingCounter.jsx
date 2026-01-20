import { useState } from "react";

export const BatchingCounter = () => {

    const [Count, setCount] = useState(0)
    const [name, setName] = useState("");
    const [isActive, setisActive] = useState(false);
    console.log("Render phase : Component Rendering")

    const handleCount = () => {
        // console.log("Count value before : "+ Count)
        setCount((prev) => {
            return prev + 1;
        });

        setCount((prev) => {
            return prev + 5;
        });

        setCount((prev) => {
            return prev + 10;
        });
        setName("Updated");
        setisActive(true);

    }
    return (
        <div>
            <h2>Count: {Count}</h2>
            <p>Name: {name}</p>
            <p>Active:{isActive}</p>
            <button onClick={handleCount}>Count : {Count}</button>
        </div>

    )
}