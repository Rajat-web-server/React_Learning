
export const Things = ({name,price, added, Categories})=>{

return (
    <div>
        <h2>Product : {name}</h2>
        <p>Price : {price}</p>
        <p>Added : {added ? "Yes" : "No"}</p>
        <p>Categories : {Categories.join(", ")}</p>

    </div>
)

}
//destructuring props is also possible by writing the name of the argument as {name, price, added, Categories}