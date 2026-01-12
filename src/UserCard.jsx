import { Userinfo } from "./UserInfo";  

export const Usercard =(Props)=>{
    return (
        <div>
            <div>
                <h2>User Details</h2>
                <Userinfo {...Props}/>
            </div>
        </div>
    )
}

//Spread Operator {...Props} is used to pass all the props received by Usercard to Userinfo component