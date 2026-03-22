
export const Name =({name, setname})=>{

    return(
        <>
           <h2>Name : {name}</h2> 
           <button onClick={()=>setname("rajat")}>Change name</button>
        </>
    )
}