import React from "react";
import Post from "./Post";
export default ({posts}) => {
    if (!posts.length) {
        return <div><p className="text-center">Null</p></div>
    }    return posts.map(post => <Post post={post} key={post} />)

}
