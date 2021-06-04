const { genPassword } = require('../utils/cryp')

const getUser = async (username, password) => {
    username = escape(username)
    password = escape(genPassword(password))
    console.log(username, password)
}

module.exports = {
    getUser
}