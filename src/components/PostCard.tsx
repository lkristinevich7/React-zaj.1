import React from "react";
import { Post } from "../pages/Post";
import { UserAvatar } from "./UserAvatar";


type P ={
    post : Post
}

export const PostCard = (props: P)=>(
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">

            {props.post.user && 
            <UserAvatar user={props.post.user}/>}

            {props.post.title}
            </h5>

        </div>
    </div>
)