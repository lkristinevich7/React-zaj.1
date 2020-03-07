import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
// import './App.css';
import { PostsPages } from './pages/Posts';
import { Route, Switch } from 'react-router-dom';
import { SinglePost } from './pages/SinglePost';


function App() {
  return (

    <div className="App">
     <div className="container">
       <div className="row">
         <div className="col">
           {/* <h1>Placki</h1> */}
           {/* <PostsPages/>   */}
           <Switch>
           <Route path="/" exact={true} render={()=><h1>Home</h1>}/>
           <Route path="/blog/:post_id" component={SinglePost}/>
           <Route path="/blog/" component={PostsPages}/>
           
           <Route path="**" render={()=><h1>Page not found</h1>}/>
           </Switch>
           
         </div>
       </div>
     </div> 
    </div>
  );
}

export default App;
