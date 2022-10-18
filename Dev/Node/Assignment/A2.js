var express = require('express')
var app = express()
var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: true }))

app.listen(4500)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/user', function (req, res) {
  res.sendFile(__dirname + '/user.html')
})

