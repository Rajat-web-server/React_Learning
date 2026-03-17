export const Cardwrapper = ({name , children, child})=>{

    return (
        <div>
            <h1>{name}</h1>
            <div className="card-content">{children}</div>
            <div className="card-footer"> {child}</div>
        </div>
    )
}