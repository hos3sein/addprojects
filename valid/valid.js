const express = require('express')
const database = require('../database.js')
const app = express();
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser')
const addprojects = require('../add-projects/addproject')
const addcomment = require('../add-comment/addcomment')
const PROJECT = require('../projects-schemas.js')
const router = express.Router();
const fs = require('fs');
const loading = require('./loading')


router.get('/' , loading.load)

router.get('/post' , loading.load2)

router.get('/best' , (req , res)=>{
    const name = req.cookies.username
    res.status(200).render('validbest.ejs', {username : name})
})


router.get('/worst' , (req , res)=>{
    const name = req.cookies.username
    res.status(200).render('worstvalid.ejs', {username : name})
})


router.get('/search' , (req , res)=>{
    const name = req.cookies.username
    res.status(200).render('searchvalid.ejs', {username : name})
})



router.get('/comments/:name' , (req , res)=>{
    const name = req.cookies.username
    console.log(req.params)
    const nameid = req.params
    res.status(200).render('comentsvalid.ejs', {username : name , id : nameid})
})


router.get('/loadcoment' , loading.comentloader)


router.post('/project-post' , addprojects.addproject)

router.post('/add-comments' , addcomment.addcoment)

router.post('/search' , (req , res)=>{
    console.log(req.headers)
})



module.exports = router;