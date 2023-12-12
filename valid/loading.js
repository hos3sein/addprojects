// const { set } = require('mongoose');
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


const mlist = []
const maximum = (mlist)=>{
    let Maximum = mlist[0]
    for (let i =1 ; i < mlist.length ; i++ ){
        if (mlist[i] > Maximum){
            Maximum = mlist[i]
        }
        return Maximum
    }
}





const bestload = (req , res)=>{
    PROJECT.find()
    .then((resault) => {
        const len = resault.length;
        const likelist = []
        for (var i = 0 ; i < len ; i++){
            likelist.push(parseInt(resault[i].like))
        }
        // console.log(likelist)
        likelist.sort((a,b)=>{
            return b-a
        })
        // console.log(likelist)
        finallist = []
        for (let i = 0 ; i<= 10 ; i++){
            const m = maximum(likelist)
            // console.log(m)
            finallist.push(m)
            likelist.splice(likelist.indexOf(m) , 1)
        }
        // console.log(finallist)
        const lastlist = []
        
        // console.log(finallist)
        const s = new Set(finallist)
        const slen = (s.size)
        const iter = s.keys()
        for (let i = 0 ; i < slen ; i++ ){
            lastlist.push(iter.next().value)
        }
        // console.log(lastlist)
        const llist = []
        for (let i =0 ; i < lastlist.length ; i++){
            for (let j =0 ; j < len ; j++){
                if (parseInt(resault[j].like) == lastlist[i]){
                    llist.push(resault[j])
                }
            }
            
        }
        res.json(llist)
    })
    .catch((err) => console.log(err))
    
}





const worstload = (req , res)=>{
    PROJECT.find()
    .then((resault) => {
        const len = resault.length;
        const likelist = []
        for (var i = 0 ; i < len ; i++){
            likelist.push(parseInt(resault[i].dislike))
        }
        // console.log(likelist)
        likelist.sort((a,b)=>{
            return b-a
        })
        finallist = []
        for (let i = 0 ; i<= 10 ; i++){
            const m = maximum(likelist)
            // console.log(m)
            finallist.push(m)
            likelist.splice(likelist.indexOf(m) , 1)
        }
        // console.log(finallist)
        const lastlist = []
        const s = new Set(finallist)
        const slen = (s.size)
        const iter = s.keys()
        for (let i = 0 ; i < slen ; i++ ){
            lastlist.push(iter.next().value)
        }
        // console.log(lastlist)
        const llist = []
        for (let i =0 ; i < lastlist.length ; i++){
            for (let j =0 ; j < len ; j++){
                if (parseInt(resault[j].dislike) == lastlist[i]){
                    llist.push(resault[j])
                }
            }
            
        }
        res.json(llist)
    })
    .catch((err) => console.log(err))
    
}



// const comentloader = (req , res)=>{
//     PROJECT.findById(req.cookies.comentid)
//     .then((resault) => {
//         const R = resault[0].tag.coments
//         res.json(R)
//     })
//     .catch((err)=>console.log(err))
// }


const search = (req , res)=>{
    // console.log(req.params.id)
    PROJECT.find({ 'tag.username' :  req.params.id })
    .then((resault)=>{
        res.json({name : 'hossein'})
    })
    .catch((err)=>console.log(err))
}




module.exports = {load , load2 , bestload , worstload , search}