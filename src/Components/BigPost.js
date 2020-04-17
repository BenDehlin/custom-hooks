import React from 'react'
import useAxios from '../hooks/useAxios'
import {useParams} from 'react-router-dom'

const BigPost = () => {
  const {id} = useParams()
  const {post, getPost} = useAxios('post', id)
  return(
    <div>
      <h1>{post.content}</h1>
      <button
      onClick={()=>getPost(id)}
      >Refresh Post</button>
    </div>
  )
}

export default BigPost