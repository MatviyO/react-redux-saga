import React from 'react';
import PostForm from "./component/PostForm";
import Posts from "./component/Posts";
import FetchedPost from "./component/FetchedPost";

function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostForm />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Sync Posts</h2>
                    <Posts posts={[]} />
                </div>
                <div className="col">
                    <h2>Asycn posts</h2>
                    <FetchedPost posts={[1,2,3]} />
                </div>
            </div>
        </div>
    );
}

export default App;
