import React from "react";
import { UseCounter } from "./useCounter";

export const Counter = () => {
    const { count, increment, decrement, reset } = UseCounter(0)

    return (
        <>
            <h1>count :{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            {console.log("hello")}
        </>
    )

}