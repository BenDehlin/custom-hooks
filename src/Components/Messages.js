import React from "react"
import useAxios from "../hooks/useAxios"

const Messages = (props) => {
  const [messages, actions] = useAxios("messages")
  return (
    <div>
      {messages &&
        messages[0] &&
        messages.map(({ id, content }) => (
          <div key={id}>
            <h1>{content}</h1>
            <button onClick={() => actions.deleteMessages(id)}>Delete</button>
          </div>
        ))}
    </div>
  )
}

export default Messages