
export const Child = ({Count,setCount}) => {
    return (
        <>
            <div>
                <p>Count: {Count}</p>
                <button onClick={() => setCount(Count+1) }>Increment</button>
            </div>
        </>
    )
}