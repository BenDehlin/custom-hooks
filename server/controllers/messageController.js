let messages = [{id: 1, content: "hello message"}]

module.exports = {
  getMessages: (req, res) => {
    res.status(200).send(messages)
  },
  createMessage: (req, res) => {},
  editMessage: (req, res) => {},
  deleteMessage: (req, res) => {
    const {id} = req.params
    const messageIndex = messages.findIndex(message => +id === +message.id)
    messages.splice(messageIndex, 1)
    res.status(200).send(messages)
  }
}