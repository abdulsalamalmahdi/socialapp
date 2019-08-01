const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const database = require ('./modules/database');
const userRepo = require ('./modules/userRepo');
const app = express();

app.set('view engine', 'pug');

app.use(bodyparser.urlencoded({extended: true})); 

app.use("/public", express.static(path.join(__dirname, 'public')));

app.use(require('./routes/user.js'));

app.get('/', function (req, res) {
    return res.redirect('/user')
});


app.listen(4000, function () {
    console.log('listenning');
});