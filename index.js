const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const ejs = require('ejs')
const mongoose = require('mongoose')
const uri = "mongodb+srv://pixxelarts:JcZMCHLNDf6BXAil@dynamicwebsite.0j1proq.mongodb.net/pixxelarts?retryWrites=true&w=majority";
const route = require('./routes/main')
const bodyParser = require('body-parser')
// Model
const navModel = require('./model/navModel')

// View Engine
app.set('view engine','ejs')
app.set('views','views')

// App configuration
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('',route)
app.use(express.json())
app.use(express.static('public'))

// Database Connection
// mongoose.connect("mongodb://0.0.0.0:27017/website")
mongoose.connect(uri)

// articleModel.create({title:"political news",content:"this news about politics"})
// navModel.create({href:"/",text:"home"},{href:"/about",text:"about"})    
// Port
app.listen(port,()=>{console.log('server is running at :' + port)})