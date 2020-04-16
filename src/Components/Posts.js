import React from 'react'
import useAxios from '../hooks/useAxios'

const Posts = (props) => {
  const [posts, {getPost, getPosts, postPost, putPost, deletePost}] = useAxios('post')
  return (
    <div>
      {posts && posts[0] && posts.map(({id, content}) => (
        <div key ={id}>
          <h1>{content}</h1>
          <button onClick={() => deletePost(id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Posts