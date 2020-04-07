import React from 'react'
import useAxios from '../hooks/useAxios'

const Posts = (props) => {
  const [posts, {deletePosts}] = useAxios('/api/posts', 'posts')
  return (
    <div>
      {posts && posts[0] && posts.map(({id, content}) => (
        <div key ={id}>
          <h1>{content}</h1>
          <button onClick={() => deletePosts(id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Posts