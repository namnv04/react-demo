
const postModel = require('../models/posts')

const searchPostByTitle = async (search) => {
  try {
    if (!search) {
      return null
    }

    let posts = await postModel.searchByTitle(search)
    return posts
  } catch (error) {
    throw error
  }
}

const getPostById = async (id) => {
  try {
    if (!id) {
      return null
    }

    let post = await postModel.getPostById(id)
    return post
  } catch (error) {
    throw error
  }
}

module.exports = {
  searchPostByTitle,
  getPostById
}
