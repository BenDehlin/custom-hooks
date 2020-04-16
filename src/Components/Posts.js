import React from "react"
import useAxios from "../hooks/useAxios"

const Posts = (props) => {
  const [
    {posts, post},
    { getPost, getPosts, postPost, putPost, deletePost }
  ] = useAxios("post")
  return (
    <div>
      <button onClick={()=>getPosts()}>Refresh</button>
      {posts &&
        posts[0] &&
        posts.map(({ id, content }) => (
          <div key={id}>
            <h1>{content}</h1>
            <button onClick={() => deletePost(id)}>Delete</button>
            <button
            onClick={()=>getPost(id)}
            >Get Post</button>
          </div>
        ))}
    </div>
  )
}

export default Posts
