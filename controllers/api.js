const { hashSync, compareSync } = require("bcrypt")
const jwt  = require('jsonwebtoken')
const { user } = require("../models")

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
      message: 'Periksa kembali data login anda',
      pesan: error
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
