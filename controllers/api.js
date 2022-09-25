const { hashSync, compareSync } = require("bcrypt")
const jwt  = require('jsonwebtoken')
const { user, room } = require("../models")
const { Op } = require("sequelize")

exports.protected = (req, res) => {
  console.log(req.user)

  res.send({
    message: 'ok'
  })
}

exports.register = async (req, res) => {
 try{
  const data = await user.create({
    username: req.body.username,
    password: hashSync(req.body.password, 10),
    role: req.body.role
  })

  res.status(201).send({
    message: 'Register berhasil, silahkan login',
    user: {
      username: data.username,
      role: data.role
    }
  })
 }catch(error){
    res.status(422).send({
      message: 'Periksa kembali data login anda'
    })
 }
  
}

exports.login = async (req, res) => {
  // query user ke db
  const userData = await user.findOne({
    where: {
      username: req.body.username
    }
  })

  // kalau usernya ga exist, kasih response user not found
  if (!userData){
    return res.status(404).send({
      message: 'User not found'
    })
  }
  
  // kalau passwordnya salah
  if( !compareSync(req.body.password, userData.password) ){
    return res.status(401).send({
      message: 'Incorrect Password'
    })
  }

  const payload = {
    id: userData.id,
    username: userData.username,
    role: userData.role
  }

  const token = jwt.sign(payload, "supersecretkey", { expiresIn: '1d' });

  res.send({
    message: 'Login Success',
    token: `Bearer ${token}`,
    user: payload
  })
}

exports.createRoom = async (req, res) => {
  try{
    const data = await room.create({
      room_name: req.body.room_name
    })
  
    res.status(201).send({ message: 'Room berhasil dibuat',
      room: data 
    })
   }catch(error){
      res.status(422).send({
        message: 'Periksa kembali nama room anda'
      })
   }
} 

exports.putRoom = async (req, res) => {
  const server = await room.findByPk(req.params.id)
  console.log(server)
  // cek apakah sudah pernah mengisi
  if(server.player1_id === req.user.id){
    return res.send({
      message : "kamu sudah ngisi",
      "room status" : "waiting for second player"
    })
  }
  // cek apakah sudah ada yang masuk room sebelumnya
  if(server.player1_id === null){
    server.player1_id = req.user.id
    server.player1_pick = req.body.player_pick
  }else{
    if(server.player1_id !== req.user.id && server.player2_id === null){
      server.player2_id = req.user.id
      server.player2_pick = req.body.player_pick
    } 
  }
  // cek apakah pick p1 dan pick p2 sudah terisi
  if(server.player1_pick !== null && server.player2_pick !== null){
    server.player1_score = 0
    server.player2_score = 0
    for (let i = 0; i<3; i++){
      if(server.player1_pick[i] === server.player2_pick[i]){
          console.log('Tie')    
      }
      
      else if(server.player1_pick[i] === 'B'){
          if(server.player2_pick[i] === 'K'){
              console.log('P2 Menang')
              server.player2_score += 1  
          }else{
              console.log('P1 Menang')
              server.player1_score += 1  
          }}
      
      else if(server.player1_pick[i] === 'G'){
          if(server.player2_pick[i] === 'B'){
              console.log('P2 Menang')
              server.player2_score += 1
          }else{
              console.log('P1 Menang')
              server.player1_score += 1
      }}
      
      else if(server.player1_pick[i] === 'K'){
          if(server.player2_pick[i] === 'G'){
              console.log('P2 Menang')
              server.player2_score += 1
          }else{
              console.log('P1 Menang')
              server.player1_score += 1
          }}
    }
  }
  //cek siapa yang menang
  if(server.player1_score === server.player2_score){
    server.player1_result = "DRAW"
    server.player2_result = "DRAW"
  }else{
    if(server.player1_score>server.player2_score){
      server.player1_result = "WIN"
      server.player2_result = "LOSE"
    }else{
      server.player1_result = "LOSE"
      server.player2_result = "WIN"
    }
  }

  
  
  server.save()
  res.status(202).send({
    message : "data has inserted",
    data : server
  })
}

exports.allRoom = async (req,res) => {
  const server = await room.findAll()
  res.send(server)
}

exports.playerResult = async (req,res) => {
  const data = await room.findAll({
    where:{
      [Op.or]:[
        {player1_id: req.user.id},
        {player2_id: req.user.id}
      ]
    }
  })
  res.send(data)
}
