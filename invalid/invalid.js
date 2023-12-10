const express = require('express')
const database = require('../database.js')
const app = express();
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser')
const auth = require('../authorization/authoriza')

const router = express.Router();

router.get('/' , (req , res)=>{
    res.status(200).render('index.ejs')
})


router.get('/best' , (req , res)=>{
    res.status(200).render('best.ejs')
})


router.get('/worst' , (req , res)=>{
    res.status(200).render('worst.ejs')
})


router.get('/search' , (req , res)=>{
    res.status(200).render('search.ejs')
})

router.get('/signing' , (req , res)=>{
    res.status(200).render('signin.ejs')
})


router.get('/coments' , (req , res)=>{
    res.status(200).render('coments.ejs')
})


router.get('/signUp' , (req , res)=>{
    res.status(200).render('signup.ejs')
})


router.post('/project-post' , (req , res)=>{
    res.status(200).redirect('/signing')
})


router.post('/register' , auth.saveuser)


router.post('/add-comments' , (req , res)=>{
    // console.log(req.body)
    res.status(200).redirect('/signing')
})

router.post('/search' , (req , res)=>{
    // console.log(req.body)
    console.log(req.headers)
})


router.post('/signIn' , auth.token)


module.exports = router;