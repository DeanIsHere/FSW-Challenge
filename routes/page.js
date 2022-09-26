const express = require('express')
const router = express.Router()
const pageController = require('../controllers/page')
const customMiddleware = require('../utils/customMiddleware')
const passport = require('passport');

router.get('/admin-dashboard',
pageController.adminDashboard)

router.get('/main-dashboard',  
pageController.mainDashboard)

router.get('/login',pageController.loginPage)

router.get('/register',pageController.registerPage)

router.get('/fight/:id',pageController.fightPage)

module.exports = router