import React from "react"
import useInput from "../hooks/useInput"

const PostForm = (props) => {
  const [{ firstName, lastName }, { setInput, resetInputs }] = useInput({
    firstName: "",
    lastName: "",
  })
  return (
    <div>
      <input name="firstName" value={firstName} onChange={setInput} />
      <button onClick={() => console.log(firstName)}>Submit</button>
      <button onClick={resetInputs}>Clear</button>
    </div>
  )
}

export default PostForm
