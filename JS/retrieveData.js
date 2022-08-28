const fs = require('fs')

const retrieveAllData = (source) => {
  return JSON.parse(fs.readFileSync(source, 'utf-8'))
}

const passwordChecker = (bodyPasword) => {
    let my_user = retrieveAllData('user.json')
    for (let i =0; i < my_user.length; i++){
        if(my_user[i].password === bodyPasword){
            return true
        }else{
            return false
        } 
  }
}
module.exports = {
    retrieveAllData,passwordChecker
  }