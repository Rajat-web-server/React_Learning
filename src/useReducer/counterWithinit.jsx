import { useReducer } from "react"

const initialCount = 0

function reducer(state, action) {
    if (action.type === "increment") {
        return state + 1;
    }
    else if (action.type === "decrement") {
        return state - 1
    }
    return state
}
const init =(initialCount)=>{
    console.log("Init function called - this only runs once!")

    const savedCount = localStorage.getItem("count");

    if (savedCount !== null)
    {
        console.log("found saved count : ", savedCount)
        return parseInt(savedCount)
    }

    console.log("No saved count, using initial value : ",initialCount)
    return initialCount

}

export const CounterWithInit = () => {
    const [count, dispatch] = useReducer(reducer, initialCount,init);
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