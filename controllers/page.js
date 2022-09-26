exports.adminDashboard = (req, res) => {  
    res.render('adminDashboard')
  }
  
exports.mainDashboard = (req, res) => {
    res.render('mainDashboard')
  }

exports.loginPage = (req, res) => {
  res.render('login')
}

exports.registerPage = (req, res) => {
  res.render('register')
}

exports.fightPage = (req, res) => {
  res.render('fightDashboard')
}