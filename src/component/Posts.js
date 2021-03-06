import React from "react";
import Post from "./Post";
import {connect} from 'react-redux'

const Posts =  ({syncPosts}) => {
    if (!syncPosts.length) {
        return <div><p className="text-center">Null</p></div>
    }
    return syncPosts.map(post => <Post post={post} key={post.id} />)
}
const mapStateToProps = state => {
    return {
        syncPosts: state.post.posts
    }
}

export default connect(mapStateToProps, null)(Posts)
