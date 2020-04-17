import React from "react"
import useAxios from "../hooks/useAxios"
import { useHistory } from "react-router-dom"

const Posts = (props) => {
  const {
    posts,
    post,
    getPost,
    getPosts,
    postPost,
    putPost,
    deletePost,
  } = useAxios("post")
  const { push } = useHistory()
  return (
    <div>
      <button onClick={() => getPosts()}>Refresh</button>
      {posts &&
        posts[0] &&
        posts.map(({ id, content }) => (
          <div key={id}>
            <h1>{content}</h1>
            <button onClick={() => deletePost(id)}>Delete</button>
            <button onClick={() => push(`/post/${id}`)}>View Post</button>
          </div>
        ))}
    </div>
  )
}

export default Posts
