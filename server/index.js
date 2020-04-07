require('dotenv').config({path: __dirname + '/../.env'})
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const app = express()
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

//CONTROLLERS
const postCtrl = require('./controllers/postController')

//MIDDLEWARE

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

//CONNECTIONS
massive(CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log('database connected')
  app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))
})

//ENDPOINTS

app.get('/api/posts', postCtrl.getPosts)
app.post('/api/posts', postCtrl.createPost)
app.put('/api/posts/:id', postCtrl.editPost)
app.delete('/api/posts/:id', postCtrl.deletePost)