const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    serviceName: process.env.SERVICE_NAME,
    urldb: process.env.MONGODB_URL
}