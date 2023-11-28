const express = require('express');
const app = express();
var http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
let PORT = process.env.PORT || 6000;
const webController = require('./webController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/welcome', (req, res) => {
    let userName = 'Andy'
    console.log('Welcome page opened');
    res.render('welcome', {userName: userName});
});

app.get('/newUser', (req, res) => {
    res.render('newUser', {errorMessage: ''});
});

app.get('/login', (req, res) => {
    res.render('login', {errorMessage: ''});
});

app.get('/logout', (req, res) => {
    console.log('Logged out');
});

app.post('/login2', webController.processUserLogin);

app.post('/newUser', (req, res) => {
    console.log(req.body);
    });

app.listen(PORT, function () {
    console.log(`running on port ${PORT}`);
});