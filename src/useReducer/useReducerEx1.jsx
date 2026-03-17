import { useReducer } from "react"

function reducer(state, action) {
    if (action.type === "increment") {
        return state + 1;
    }
    else if (action.type === "decrement") {
        return state - 1
    }
    return state
}

export const Reducer_counter = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => dispatch({
                type: "increment"
            })}>+</button>
            <button onClick={() => dispatch({
                type: "decrement"
            })}>-</button>
        </div>

    )
}