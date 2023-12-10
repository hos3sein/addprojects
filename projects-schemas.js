const mongoos = require('mongoose');

const schema = mongoos.Schema;

const url = "mongodb+srv://kianlucifer0098:Lucifer2552@hackernews.0bnzgq5.mongodb.net/?retryWrites=true&w=majority"

mongoos.connect(url)
.then((res) => console.log('project database connected!'))
.catch((err) => console.log(err))

const blog = new schema({
    url : {
        type : String,
        require : true
    },
    content : {
        type : String,
        require : true
    },
    coments : {
        coment : {
            content : {
                type : String,
                require : true
            },
            username : {
                type : String,
                require : true
            }
        }
    },
    like : {
        type : String,
        require : true
    },
    dislike : {
        type : String,
        require : true
    },
    tag : {
        number : {
            type : Number,
            require : true
        },
        name : {
            type : String,
            require : true
        },
        username : {
            type : String,
            require : true
    }
}
})


const b = mongoos.model('projects' , blog)

module.exports = b