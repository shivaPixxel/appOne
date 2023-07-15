const mongoose = require('mongoose')

let articleSchema = mongoose.Schema({
    title:String,
    content:String
})

let articleModel = mongoose.model('articles', articleSchema)
module.exports = articleModel