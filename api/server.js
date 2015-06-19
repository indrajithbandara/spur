var express = require('express')
  , app = module.exports = express()
  , bodyParser = require('body-parser')
  , router = express.Router()
  , r = require('rethinkdb')
  , config = require('../config')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

r.connect(config.rethink).then(function(conn) {
	app.db = conn
})

app.use(function(req, res, next) {
	req.db = app.db
	next()
})

app.use(function(req, res, next) {
	res.set('Access-Control-Allow-Origin', '*')
	res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE')
	next()
})

app.use(require('./router'))

app.listen(config.api.port, function(err) {
  if(err) throw err
  console.log('api server running on port', config.api.port)
})