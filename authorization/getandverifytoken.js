const jwt = require('jsonwebtoken');


const verify = (auth)=>{
    return jwt.verify(auth, 'secret-key');
}


const token =(res1) => {
  return jwt.sign({ username: res1[0].username }, "secret-key", {expiresIn : '1h'});
}




module.exports = {token , verify}