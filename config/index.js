const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

module.exports = {
    rootPath: path.resolve(__dirname, '..'),
    urldb: process.env.MONGODB_URL
}