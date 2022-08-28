// initialize package
const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path')
const md5 = require('md5')
const { retrieveAllData } = require('./JS/retrieveData')

const jsonParser = bodyParser.json()
// set view enginer
app.set('view engine','ejs')
// introduce static file
app.use('/CSS', express.static(__dirname+'/CSS'))
app.use('/JS', express.static(__dirname+'/JS'))
app.use('/game-assets', express.static(__dirname+'/game-assets'))
app.use('/assets', express.static(__dirname+'/assets'))

// read user data from json
app.get('/', function (req, res) {
  res.status(404).send(retrieveAllData('user.json')) 
  })
// user login
app.post('/login', jsonParser, (req, res) => {
  let my_user = retrieveAllData('user.json')
  let checker = false
    for (let i =0; i < my_user.length; i++){   
      if(my_user[i].password === md5(md5(req.body.password)) && my_user[i].user_name === (req.body.user_name)){
        checker = true
        console.log(`${i+1}-${checker}`)
      } 
    }
  if(checker){
    res.send("Authorized")
  } else {
    res.status(401).send("Unauthorized")
  }
})
// main page
app.get('/main-page', (req, res)=>{
  res.render("main-page")
})
// game page
app.get('/game-page', (req, res)=>{
  res.render("game-page")
})
// login page
app.get('/login-page',(req,res)=>{
  res.render("login-page")
})
// PORT
app.listen(8000, () =>{
  console.log("Application is running at localhost:8000")
})

