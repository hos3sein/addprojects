const express = require('express')
const database = require('../database.js')
const app = express();
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser')
const Token = require('./getandverifytoken')



const saveuser = (req ,res)=>{
    req.body['tag'] = {name : 'users' }
    const data = new database (
        req.body
    )
    data.save()
    .then((res)=>console.log('data saved'))
    .catch((err) => console.log(err))
}



const token = (req , res)=>{
try {
    database.find({username : req.body.username})
    .then((res1) => {
        if (res1[0].password === req.body.password){
            console.log('u enter')
            const token =  Token.token(res1)
            console.log(token)
            //   req.headers['authorization'] = token;
            console.log(res.cookies)
            res.cookie('authorization' , token)
            res.cookie('username' , res1[0].username)
            console.log(res.cookies)
            res.render('indexvalid.ejs' , ({username : res1[0].username}))
        }else{
            console.log('password is incorrect')
        }
    })
} catch (error) {
    console.log('user not found')
}}


module.exports = {token , saveuser}