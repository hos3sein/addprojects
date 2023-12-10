const ADD = require('../projects-schemas')


const addcoment = (req , res)=>{
    console.log(req.cookies.ids)
    // ADD.findByIdAndUpdate(req.cookies.comentid , {coments:{coment: { content : req.body.content  , username : req.body.username}}})
    // .then((resault)=>{
    //     console.log('coment saved')
    // })
    // .catch((err) => console.log(err))
}



module.exports = {addcoment}