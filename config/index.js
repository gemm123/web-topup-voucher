const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    urldb: process.env.MONGODB_URL
}