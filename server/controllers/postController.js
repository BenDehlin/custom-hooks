let posts = [{id: 1, content: "hello world"}]

module.exports = {
  getPosts: (req, res) => {
    res.status(200).send(posts)
  },
  createPost: (req, res) => {},
  editPost: (req, res) => {},
  deletePost: (req, res) => {
    const {id} = req.params
    const postIndex = posts.findIndex(post => +id === +post.id)
    posts.splice(postIndex, 1)
    res.status(200).send(posts)
  }
}