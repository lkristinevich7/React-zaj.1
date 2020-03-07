import React from "react"
import { User } from "../pages/User"
// import User from "../pages/User";

type P ={
    user: User
}

export const UserAvatar = (props: P)=>{
    return <div>
                <h4>
                    <span style={{
                        width : '30px',
                        height: '30px',
                        background: '#ccc',
                        display: 'inline-block'
                    
                    }}></span>
                    <span style ={{
                        verticalAlign: 'top',
                        paddingLeft: '10px',
                    }}>{props.user.name}</span>
                </h4>
             </div>
}
