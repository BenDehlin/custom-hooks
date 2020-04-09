import React from "react"
import useInput from "../hooks/useInput"

const PostForm = (props) => {
  const [{ firstName, lastName, email }, { setInput, resetInputs }] = useInput({
    firstName: "",
    lastName: "",
    email: '',
  })
  return (
    <div>
      <input name= "firstName" value={firstName} onChange={(e) => setInput(e)} />
      <input name= "lastName" value={lastName} onChange={setInput} />
      <button onClick={() => console.log(firstName)}>Submit</button>
      <button onClick={resetInputs}>Clear</button>
    </div>
  )
}

export default PostForm
