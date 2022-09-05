const express = require('express')
const bodyParser = require('body-parser');
const {users, biodatas} = require('./models');

const app = express()
const jsonParser = bodyParser.json()

app.use('/css', express.static(__dirname+'/css'))
app.use('/js', express.static(__dirname+'/js'))
app.set('view engine', 'ejs')

//VIEW
//CREATE
app.post('/register', jsonParser, async (req, res)=> {
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
//PORT
app.listen(4030, () => {
    console.log('APP IS RUNNING ON PORT:4030')
  })