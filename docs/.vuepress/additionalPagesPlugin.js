const path = require('path')

module.exports = {
  additionalPages: [
    {
     path: '/log.html',
     filePath: path.resolve(__dirname, '../../CHANGELOG.md')
    }
  ]
}