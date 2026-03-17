import { useReducer } from "react"

const initialState = {
    name: "JIXX",
    age: 20,
    city: "Mumbai"
}

function reducer(state, action) {
    if (action.type === "set_age") {
        return {
            ...state,
            age: action.payload
        }
    }
    if (action.type === "set_city") {
        return {
            ...state,
            city: action.payload
        }
    }
    if (action.type === "set_name") {
        return {
            ...state,
            name: action.payload
        }
    }
    return state

}

export const Person = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
    <div>
      <h2>User Form</h2>

      {/* USING STATE */}
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
      <p>City: {state.city}</p>

      {/* CHANGING STATE */}
      <input
        placeholder="Enter name"
        onChange={(e) =>
          dispatch({
            type: "set_name",
            payload: e.target.value
          })
        }
      />

      <input
        placeholder="Enter age"
        onChange={(e) =>
          dispatch({
            type: "set_age",
            payload: e.target.value
          })
        }
      />
      <input
        placeholder="Enter city"
        onChange={(e) =>
          dispatch({
            type: "set_city",
            payload: e.target.value
          })
        }
      />
    </div>
  );
}