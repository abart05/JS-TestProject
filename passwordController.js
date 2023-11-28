const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptPassword = (userPassword) => {
    let encryptedPassword = bcrypt.hash(userPassword,saltRounds);
    return encryptedPassword;
};

module.exports = {
    encryptPassword
}