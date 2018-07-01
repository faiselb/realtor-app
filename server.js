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


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/client/build/'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


const RealtorsController = require('./controllers/realtorsController')
app.use('/api/realtors', RealtorsController)

const CommunitiesController = require('./controllers/communitiesController')
app.use('/api/realtors/:realtorId/communities', CommunitiesController)

const ListingsController = require('./controllers/listingsController')
app.use('/api/realtors/:realtorId/communities/:communityId/listings', ListingsController)

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function (err, req, res, next) {

  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}


  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
