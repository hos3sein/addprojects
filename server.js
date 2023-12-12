const express = require('express');
const database = require('./database.js')
const app = express();
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser')
const invalidrout = require('./invalid/invalid')
const validrout = require('./valid/valid')
const Token = require('./authorization/getandverifytoken')


app.set('view engine' , 'ejs')
app.set('views', __dirname + '/views');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())


app.listen(3000 , (err , res)=>{
    if (err) throw (err)
    console.log('app is listening')    
})


app.use((req , res ,next)=>{
    const auth = req.cookies.authorization;
    try {
        Token.verify(auth)
        app.use(validrout)
      } catch(err) {
        app.use(invalidrout)
      }
    next()
})

