import React from "react";

function ErrorUser ({user}) {
    // if(!user){
    //     return null
    // }

    return (
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>Username</b>: {user.username}
            </div>
        </div>
    );
}

export default ErrorUser;