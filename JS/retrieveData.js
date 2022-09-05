const fs = require('fs')

const retrieveAllData = (source) => {
  return JSON.parse(fs.readFileSync(source, 'utf-8'))
}

module.exports = {
    retrieveAllData
  }