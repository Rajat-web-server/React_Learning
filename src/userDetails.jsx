
export const Userdetails = ({ name, isOnline, hideOffline, isPremium, isNewuser, role }) => {

    //If statement approach

    if (hideOffline && !isOnline) {
        return null;
    }
    //variable for complex logic
    let rolebadge=null;
    if(role==="admin"){
        rolebadge=<p>Admin User</p>
    }else if(role==="moderator"){
        rolebadge=<p>Moderator User</p>
    }
        // if (isOnline) {
        //     return (
        //         <div>
        //             <h2>{name}</h2>
        //             <p>online</p>
        //             <span>available for chat</span>
        //             <br />

        //             <button>chat</button>

        //         </div>
        //     );
        // };
        // return (
        //     <div>
        //         <h2>{name}</h2>
        //         <p>offline</p>
        //         <small> not available for chat</small>
        //     </div>
        // )


    //Ternary operator approach

    return (
        
        <div>
            <h2>{name}</h2>
            <p>{rolebadge}</p>
            <p>{isOnline ? "online" : "offline"}</p>
            <span>{isOnline ? "Available for chat" : "Not available for chat"}</span>
            {
                isOnline ? (<button>chat</button>)
                    : null
            }
            {isPremium && <p>Premium User</p>}
            {isNewuser && <p>Welcome New User!</p>}
        </div>
    );

    //&& operator approach
    //only render the chat button if the value is true



}