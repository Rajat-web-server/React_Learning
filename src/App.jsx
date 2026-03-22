import { useState } from "react"
import { Child } from "./Lifting State/child"
import { Name } from "./Lifting State/name";


function App() {

  const [Count, setCount] = useState(0);
  const [name, setname] = useState("");

  return (
    <div>
      <h1>Parent Count : {Count}</h1>
      <Child Count={Count} setCount={setCount} />
      <Name name={name} setname={setname}/>
    </div>
  )
}

export default App
