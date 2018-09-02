
let express = require('express')
let bodyParser = require('body-parser')
let routes = require('./routes/routes.js')
let app = express()
let cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

let port = process.env.PORT || 3000

let server = app.listen(port, () => {
  console.log('app running on port.', server.address().port)
})
