const express = require('express')
const passport = require('passport')
const router = express.Router()
const pageController = require('../controllers/page')
const customMiddleware = require('../utils/customMiddleware')

router.get('/admin-dashboard', customMiddleware.validateAdmin, pageController.adminDashboard)
router.get('/main-dashboard', pageController.mainDashboard)
router.get('/login',pageController.loginPage)


module.exports = router


// , customMiddleware.validateSuperadmin