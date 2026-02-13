// Implementing useState using UseReducer

import { useReducer } from "react"

const useStateCustom = (initialValue) => {

    const reducer = (state, action) => {
        return action
    }
    const [state, dispatch] = useReducer(reducer, initialValue)

    const setState = (newValue) => {
        dispatch(newValue)
    }

    return [state, setState]
}


export const CustomCount = () => {
    const [count, setCount] = useStateCustom(0)
    return (

        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 10)}>increment</button>
            <button onClick={() => setCount(count - 10)}>decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}