const express = require('express')
const router = express.Router()
const pageController = require('../controllers/page')

router.get('/admin-dashboard', pageController.adminDashboard)
router.get('/main-dashboard', pageController.mainDashboard)
router.get('/login',pageController.loginPage)


module.exports = router


// , customMiddleware.validateSuperadmin