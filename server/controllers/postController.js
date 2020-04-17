let posts = [{ id: 1, content: "hello world" }]
let id = 2

module.exports = {
  getPosts: (req, res) => {
    res.status(200).send(posts)
  },
  getPost: (req, res) => {
    const { id } = req.params
    const post = posts.find((post) => +post.id === +id)
    if (!post) {
      res.status(404).send("post not found")
    }
    res.status(200).send(post)
  },
  createPost: (req, res) => {
    const { content } = req.body
    const post = { id, content }
    posts.push(post)
    id++
    res.status(200).send(posts)
  },
  editPost: (req, res) => {
    const { id } = req.params
    const { content } = req.body
    const postIndex = posts.findIndex((post) => +id === +post.id)
    posts.splice(postIndex, 1, { id, content })
    res.status(200).send(posts)
  },
  deletePost: (req, res) => {
    const { id } = req.params
    const postIndex = posts.findIndex((post) => +id === +post.id)
    posts.splice(postIndex, 1)
    res.status(200).send(posts)
  },
}
