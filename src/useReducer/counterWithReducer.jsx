import {useReducer} from "react";

const initialState =0;
const reducer = (state, action)=>{
    // must returns+ a new state
    switch (action) {
        case "increment":
            return state +1;
        case "decrement":
            return state -1;
        case "reset":
            return initialState;
        default :
        return state ;

    }
}

export const CounterWithReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState) //count --> current state value
    //dispatch --> to send action to the reducer
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch("increment")}>Increment</button>
            <button onClick={() => dispatch("decrement")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
    )
}