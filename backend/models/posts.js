
const { MongoClient } = require('mongodb')

let mongoUri = process.env.mongoUri || `mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge`

let _dbClient
const dbClient = async (dbName) => {
  let _dbName = dbName || 'dev-challenge'

  try {
    if (_dbClient && _dbClient.serverConfig && _dbClient.serverConfig.isConnected()) {
      return _dbClient
    }

    const _client = await MongoClient.connect(mongoUri, { useNewUrlParser: true, poolSize: 10 })
    _dbClient = _client.db(_dbName)
    return _dbClient
  } catch (error) {
    console.log('database connection failed: ', error)
    throw error
  }
}

const titleCollection = async () => {
  try {
    let db = await dbClient()
    return db.collection('Titles')
  } catch (error) {
    throw error
  }
}

const searchByTitle = async (search) => {
  try {
    let titleCol = await titleCollection()
    let posts = await titleCol.find({ TitleName: new RegExp(search, 'i') }).toArray()
    return posts
  } catch (error) {
    throw error
  }
}

const getPostById = async (id) => {
  try {
    let titleCol = await titleCollection()
    let posts = await titleCol.find({ _id: id }).toArray()
    if (posts && posts[0]) {
      return posts[0]
    }
    return null
  } catch (error) {
    throw error
  }
}

module.exports = {
  searchByTitle,
  getPostById
}
