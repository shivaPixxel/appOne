const mongoose = require('mongoose')

const navLinkSchema = mongoose.Schema({
    label:String,
    link:String
})

module.exports = mongoose.model('navbar', navLinkSchema)