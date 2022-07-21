const mongoose = require('mongoose')
const { urldb } = require('../config')

mongoose.connect(urldb, {})

const db = mongoose.connection

module.exports = db