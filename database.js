const mongoos = require('mongoose')


const url = "mongodb+srv://kianlucifer0098:Lucifer2552@hackernews.0bnzgq5.mongodb.net/?retryWrites=true&w=majority"

const schema = mongoos.Schema

mongoos.connect(url)
.then((res) => console.log('database connected'))
.catch((err) => console.log(err))

const blog = new schema( {
    username : {
        type : String,
        require : true
    },
    password:{
        type : String,
        require : true
    },
    name : {
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true
    },
    tag : {
        number : {
            type : String,
            require : true
        },
        name : {
            type : String,
            require : true
        }

    }

})

const BLOG = mongoos.model('data' , blog)

module.exports = BLOG