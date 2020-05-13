import {CREATE_POST, FETCH_POSTS} from "./types";

export function createPost(post) {
 return {
     type: CREATE_POST,
     payload: post

 }
}
export function fetchPosts() {
    return async dispach => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        const json = await response.json()
        dispach({ type: FETCH_POSTS, payload: json})
    }
}
