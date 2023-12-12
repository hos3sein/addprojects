const ADD = require('../projects-schemas')


const addproject = (req,res)=>{
    req.body['tag'] = {name : 'projects' , number : '1' , username : req.cookies.username}
    req.body['like'] = 0
    req.body['dislike'] = 0
    const NEW = new ADD (
        req.body
    )
    NEW.save()
    .then((resault)=>{
        // console.log('data-saved')
        res.redirect('/')        
    })
    .catch((err) => console.log(err))
}




module.exports = {addproject}