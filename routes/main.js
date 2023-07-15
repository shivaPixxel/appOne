const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
const articleModel = require('../model/articles')
const navLinkModel = require('../model/navModel')


route.get('/', async (req,res)=>{
    
    const navbar = await navLinkModel.find()
    const article = await articleModel.find()
    // console.log(navbar)
    res.render('index',{
        navbar:navbar,
        article:article
    })
})

route.get('/about', async (req,res)=>{
    // res.render('about')
})

route.get("/blog", async (req,res)=>{
    const navbar = await navLinkModel.find()
    res.render('blog',{
        navbar:navbar
    })
})

route.post('/post-article', async (req,res)=>{
    const result = await articleModel.create(req.body)
    console.log(result)
    res.redirect('/')
})

/*
route.get('/postarticle',(req,res)=>{
    res.render('postarticle')
})

route.post('/post-form', async (req,res)=>{
    const result = await articleModel.create(req.body)
    // console.log(req.body)
    res.redirect('/')
})
*/

module.exports = route