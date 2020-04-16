import React from "react"
import useAxios from "../hooks/useAxios"

const Messages = (props) => {
  const [{ messages, message }, actions] = useAxios("message")
  return (
    <div>
      {messages &&
        messages[0] &&
        messages.map(({ id, content }) => (
          <div key={id}>
            <h1>{content}</h1>
            <button onClick={() => actions.deleteMessage(id)}>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default Messages
