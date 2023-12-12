const ADD = require('../projects-schemas')


// const addcoment = (req , res)=>{
//     // console.log(req.cookies.ids)
//     // ADD.findByIdAndUpdate(req.cookies.comentid , {coments:{coment: { content : req.body.content  , username : req.body.username}}})
//     // .then((resault)=>{
//     //     console.log('coment saved')
//     // })
//     // .catch((err) => console.log(err))
// }


const addlike = (req , res)=>{
    // console.log(req.params.id)
    ADD.findById(req.params.id)
    .then((resault) => {
        const count = parseInt(resault.like)
        resault.like = count+1
        ADD.replaceOne({_id : req.params.id} , resault)
        .then((resault) => {
            console.log('update')
            res.redirect('/')
        })
        .catch((err)=>console.log(err))
    })
    .catch((err) => console.log(err))
}


const adddislike = (req , res)=>{
    ADD.findById(req.params.id)
    .then((resault) => {
        const count = parseInt(resault.dislike)
        resault.dislike = count+1
        ADD.replaceOne({_id : req.params.id} , resault)
        .then((resault) => {
            console.log('update')
            res.redirect('/')
        })
        .catch((err)=>console.log(err))
    })
    .catch((err)=>console.log(err))
}



module.exports = { addlike , adddislike}