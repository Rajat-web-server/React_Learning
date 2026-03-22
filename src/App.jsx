// import { useState } from "react"
import { Child } from "./Lifting State/child"
import { Name } from "./Lifting State/name";
// import { Component } from "./useContext/component";
import { Counter } from "./CustomHooks/counter";
import "./index.css"


function App() {

  return(
    <>
    <Counter/>
    
    </>
  )


  // Lifting State up Part 

  // const [Count, setCount] = useState(0);
  // const [name, setname] = useState("");

  // return (
  //   <div>
  //     <h1>Parent Count : {Count}</h1>
  //     <Child Count={Count} setCount={setCount} />
  //     <Name name={name} setname={setname}/>
  //   </div>
  // )
}

export default App
