import {useReducer} from "react"
function reducer(state, action){
    if(action === "add"){
        return state+1;
    }
    if (action === "subtract"){
        return state -1;
    }
    return state;
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={()=>dispatch("add")}>+</button>
            <button onClick={()=>dispatch("subtract")}>-</button>
        </div>
    )
}
export default Counter;