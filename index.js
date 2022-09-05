const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const jsonParser = bodyParser.json()
const fs = require('fs')
const md5 = require('md5')
const path = require('path')

const {users, biodatas, histories} = require('./models');
const { retrieveAllData } = require('./JS/retrieveData')

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
  //VIEWS
  
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
  //information page
  app.get('/user-list-page',(req,res)=>{
    res.render("user-list-page")
  })
  // user details page
  app.get('/user-details-page',(req,res)=>{
    res.render("user-details-page")
  })
  // user add page
  app.get('/user-add-page',(req,res)=>{
    res.render("user-add-page")
  })
//VIEW
//CREATE user+biodatas
app.post('/add-user', jsonParser, async (req, res)=> {
    try{
    // INSERT KE DATABASE USER
    const userData = await users.create({
        username: req.body.username,
        password: req.body.password
      })
      // INSERT KE DATABASE BIODATA
      const userBio = await biodatas.create({
        userID: userData.id,
        fullname: req.body.fullname,
        address: req.body.address,
        email: req.body.email,
        age: req.body.age
      })
      res.status(201).send('Done Insert User')
    }catch{
      res.status(403).send('Username Already Exist')
    }    
  })
//CREATE histories
app.post('/add-record/:id', jsonParser, async (req, res)=> {
  try{
  // INSERT KE DATABASE USER
  const userHistories = await histories.create({
    userID: req.params.id,
    score: req.body.score,
    attempt: req.body.attempt,
    win: req.body.win,
    lose: req.body.lose,
    draw: req.body.draw
    })
    res.status(201).send('Record added')
  }catch{
    res.status(403).send('fail to add record')
  }    
})
// READ user 
app.get('/find/:username', async (req,res) => {
  // SELECT * FROM Users WHERE username=req.params.username
  const data = await users.findOne({
    where: {
      username: req.params.username
    }
  })
  if (data != null){
    res.send(data)
  }else{
    res.status(404).send('User not found')
  }
})
// READ biodatas from user
app.get('/user-details/:id', async (req, res) => {
  const data = await users.findByPk(req.params.id, {
    include: {biodatas, histories}
  })
  res.send(data)
})
//PORT
app.listen(4030, () => {
    console.log('APP IS RUNNING ON PORT:4030')
  })