const bcrypt = require('bcrypt')

function hash(textPassword:string){
    return bcrypt.hash(textPassword, 10)
}

module.exports = {
    ...bcrypt,
    hash
}