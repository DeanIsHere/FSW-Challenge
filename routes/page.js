const express = require('express')
const router = express.Router()
const pageController = require('../controllers/page')
const customMiddleware = require('../utils/customMiddleware')
const passport = require('passport');

router.get('/admin-dashboard', 
passport.authenticate('jwt', { session: false }),
customMiddleware.validateAdmin, 
pageController.adminDashboard)

router.get('/main-dashboard', 
passport.authenticate('jwt', { session: false }),
customMiddleware.validatePlayer, 
pageController.mainDashboard)

router.get('/login',pageController.loginPage)


module.exports = router