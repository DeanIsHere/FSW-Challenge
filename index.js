const express = require('express')
const bodyParser = require('body-parser');
const { User, Biodatas } = require('./models')

const app = express()
const jsonParser = bodyParser.json()

app.use('/css', express.static(__dirname+'/css'))
app.use('/js', express.static(__dirname+'/js'))
app.set('view engine', 'ejs')

//VIEW
