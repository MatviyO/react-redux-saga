import React from "react";
import Post from "./Post";
import {useDispatch} from "react-redux";
import {fetchPosts} from "../redux/actions";

export default ({posts}) => {
    const dispatch = useDispatch()
    if (!posts.length) {
        return <button onClick={() => dispatch(fetchPosts()) } className="btn btn-primary">Load</button>
    }
    return posts.map(post => <Post post={post} key={post} />)

}
