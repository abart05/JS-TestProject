const passwordController = require('./passwordController');

const processUserLogin = (req, res) => {
    if(req.body.Username !='Andy' || req.body.Password!='world'){
        res.render('login', {errorMessage: 'Invalid Username or Password'});
            } else {
        let username = req.body.Username;
        res.render('welcome', {username: username});
        passwordController.encryptPassword(req.body.Password)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            
        })
     }
};

module.exports = {
    processUserLogin
}