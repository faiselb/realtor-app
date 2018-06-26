
require('dotenv').config()
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')    
}) 

connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
}) 

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(function(err, req, res, next) {
  
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
