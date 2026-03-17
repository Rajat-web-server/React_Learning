export const Event = ({on}) => {
    return (
        <button className={`${on ? "bg-amber-50 p-3" : "bg-amber-600 p-3"}`} onClick={() => alert("Clicked!!")}>
            Click me
        </button>
    )
}

