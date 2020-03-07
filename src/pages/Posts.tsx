import React from 'react'
import { PostCard } from '../components/PostCard'
import { Post } from './Post';

export type P = {};
export type S = {
    posts: Post[];
};

export class PostsPages extends React.Component<P, S>{

    state: S = {
        posts: [
            { id: 123, title: 'Placki 123' },
            { id: 231, title: 'Placki 231' },
            { id: 321, title: 'Placki 321' }
        ]
    }

    componentDidMount(){
        this.loadPosts()
    } //jak tylko componenet sie pojawi => zaladuj posty

    // this.state.posts =(dane) tak niegdy nie robic=>ustwiamy stan => kolejkujemy

    loadPosts = () => {
        fetch('http://localhost:9000/posts?_limit=10&_expand=user')
            .then(r => r.json())
            .then((dane: Post[]) => {

                this.setState({
                    posts: dane
                })
            })
    }



    render() {
        return <div>
            <h3>Blog3</h3>
            <button onClick={this.loadPosts}>refresh</button>
            <div >
                {this.state.posts.map(post => {
                    return <PostCard post={post} key={post.id} />
                })}
            </div>
        </div>
    }
}