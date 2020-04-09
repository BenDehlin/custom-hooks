import React, {useState, useEffect} from 'react'
import axios from 'axios'

const HookTutorial = (props) => {
  const [input, setInput] = useState('')
  const [input2, setInput2] = useState('')
  const [posts, setPosts] = useState([])
  const [people, setPeople] = useState([])
  useEffect(() => {
    axios.get(`/api/posts/${props.id}`).then(results => {
      setPosts(results.data)
    }).catch(err => console.log(err))
    axios.get(`/api/people/${props.people_id}`).then(results => {
      setPeople(results.data)
    }).catch(err => console.log(err))
    return () => {
      console.log('Component will unmount')
    }
  }, [props.id, props.people_id])
  return(
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <input value={input2} onChange={(e) => setInput2(e.target.value)} />
    </div>
  )
}

export default HookTutorial