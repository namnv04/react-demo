
const postService = require('../services/posts')

let appRouter = (app) => {
  app.get('/posts', async (req, res) => {
    try {
      let { titleName } = req.query
      let posts = await postService.searchPostByTitle(titleName)
      res.status(200).send(posts)
    } catch (error) {
      res.status(500).send(error.message)
    }
  })

  app.get('/post/:id', async (req, res) => {
    try {
      let { id } = req.params
      let post = await postService.getPostById(id)
      res.status(200).send(post)
    } catch (error) {
      res.status(500).send(error.message)
    }
  })
}

module.exports = appRouter
