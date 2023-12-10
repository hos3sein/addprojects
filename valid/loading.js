const PROJECT = require('../projects-schemas.js')
const fs = require('fs');




const load = (req , res)=>{
   
const name = req.cookies.username
res.status(200).render('indexvalid.ejs' , {username : name})
}




const load2 = (req , res)=>{
    PROJECT.find({'tag.name' : 'projects'})
    .then((resault)=>{
    const len = (resault.length);
    if (len <= 10){
       res.json(resault)
    }
    else{
        var newlist = []
        for (let i = (len-10) ; i < len ; i++){
            newlist.push(resault[i])
        }
       res.json(newlist)
    
}})
.catch((err) => console.log(err))
}



const comentloader = (req , res)=>{
    PROJECT.findById(req.cookies.comentid)
    .then((resault) => {
        const R = resault[0].tag.coments
        res.json(R)
    })
    .catch((err)=>console.log(err))
}



module.exports = {load , load2 , comentloader}