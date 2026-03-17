import { useState } from "react";

export const ObjectProfile = () => {
    const [user, setUser] = useState(
        {
            name: "Bruce Wayne",
            age: 30,
            email: "batman@gmail.com",
        }
    )
    const changeName = () => {
        setUser({
            ...user,
            name: "Bruce Banner",
        })
    }
    const increaseAge = ()=>{
        setUser(
            {
                ...user,
                age: user.age +1
            }
        )

    }
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Age : {user.age}</p>
            <p>Email : {user.email}</p>
            <button onClick={changeName}>Change name to Bruce Banner</button>
            <button onClick={increaseAge}>Update Age</button>
        </div>
    )
}