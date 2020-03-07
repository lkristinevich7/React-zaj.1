import React from 'react';
import { PostCard } from '../components/PostCard'
import { Post } from './Post';
import { RouteComponentProps } from 'react-router-dom';

export type P = {} & RouteComponentProps<{
    post_id: string
}>;
export type S = {
    post:Post|null;
};


export class SinglePost extends React.Component<P, S>{

    state: S = {
        post: null
    }


    componentDidMount(){
        this.fetchPost(this.props.match.params.post_id)
    } //jak tylko componenet sie pojawi => zaladuj posty

    // this.state.posts =(dane) tak niegdy nie robic=>ustwiamy stan => kolejkujemy
    fetchPost = (id : string) => {
        fetch(`http://localhost:9000/posts/${id}?_expand=user`)
            .then(r => r.json())
            .then((dane: Post) => {

                this.setState({
                    post: dane
                })
            })
    }

    render(){
    return <div>
        {! this.state.post? <div>Loading...</div> : null }
        {this.state.post&& <PostCard post={this.state.post}/> }
    
    </div>
    }

}