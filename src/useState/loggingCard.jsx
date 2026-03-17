import { useState } from "react";

export const Logincard = () => {
    const [login, setlogin] = useState(false)

    const handlelogin = () => {
        setlogin(!login)
    }
    return (
        < div >
            < button onClick={handlelogin} > {login ? "Login" : "Logout"}</button >
        </div >
        
    )
    
}