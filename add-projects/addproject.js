const ADD = require('../projects-schemas')


const addproject = (req,res)=>{
    req.body['tag'] = {name : 'projects' , number : '1' , username : req.cookies.username}
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