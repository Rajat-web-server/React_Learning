import { useReducer } from "react"

const initialState ={
    items : [],
    totalAmount : 0,
    totalItems : 0,
}

const reducer = (state,action) =>{
    switch(action.type){
        case "Add_Item":{
            const existingItemIndex = st
        }
        default:
            return state;
    }
}

export const CounterWithReducer = () => {
    const [state, dispatch]=useReducer(reducer, initialState)
    const Products =[
        {
            id:1, name: "Apple", price:100
        },
        {
            id:2, name: "Banana", price:50  
        },
        {
            id:3, name:"Sitar",price : 100
        }
    ]

    return(
        <div>
            <h2>Shopping Cart</h2>
            {Products.map((Product)=>(
              <div key={Product.id}>
                <h3>
                    {Product.name} - ${Product.price}
                </h3>
                <button>Add to cart</button>
              </div>
            ))}
        </div>
    )
}