const { json } = require('body-parser')
const express = require('express')
const passport = require('passport')
const jsonParser = require('body-parser').json()
const router = express.Router()
const apiController = require('../controllers/api')
const customMiddleware = require('../utils/customMiddleware')
const { route } = require('./page')

router.post('/register', 
    jsonParser, 
    apiController.register)

router.post('/login', 
    jsonParser, 
    apiController.login)

router.post('/create-room', 
    jsonParser, 
    passport.authenticate('jwt', { session: false }),
    customMiddleware.validateAdmin,
    apiController.createRoom)

router.get('/protected', 
    passport.authenticate('jwt', { session: false }), 
    apiController.protected)

router.put('/fight/:id',
    jsonParser,
    passport.authenticate('jwt', { session: false }),
    customMiddleware.validatePlayer,
    apiController.putRoom)

router.get('/room',
    passport.authenticate('jwt', { session: false }),
    apiController.allRoom)    

router.get('/result',
    passport.authenticate('jwt', { session: false }),
    customMiddleware.validatePlayer,
    apiController.playerResult)

router.delete('/deleteRoom/:id',
    passport.authenticate('jwt', { session: false }),
    customMiddleware.validateAdmin,
    apiController.deleteRoom)

router.get('/player',
    passport.authenticate('jwt', { session: false }),
    customMiddleware.validateAdmin,
    apiController.playerList)


router.delete('/deletePlayer/:id',
    passport.authenticate('jwt', { session: false }),
    customMiddleware.validateAdmin,
    apiController.deletePlayer)    
    module.exports = router



