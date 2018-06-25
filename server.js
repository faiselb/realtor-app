
require('dotenv').config()
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express()

app.use(function(err, req, res, next) {
  
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
