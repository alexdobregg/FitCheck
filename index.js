const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const Joi = require('joi');
const catchAsync = require(path.join(__dirname, '/utils/catchAsync'));
const ExpressError = require(path.join(__dirname, '/utils/ExpressError'));
const methodOverride = require('method-override');
const User = require(path.join(__dirname, '/models/user'));
const passport = require('passport');
const LocalStrategy = require('passport-local');

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/fit-check');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error.'));
db.once('open', () => {
    console.log('Database connected.')
})

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/makeuser', async (req, res) =>{
    const user1 = new User({
        username: 'alex',
        password: 'alex',
        name: 'Alex Dobre',
        weight: 85,
        height: 1.77,
        age: 24,
        gender: 'Male'
    })
    await user1.save();
    const user2 = new User({
        username: 'alex',
        password: 'alex',
        name: 'Alex Dobre',
        weight: 85,
        height: 1.77,
        age: 24,
        gender: 'Male'
    })
    await user2.save();
    user2.friends.push(user1);
    await user2.save();
    res.send(user1 + '\n' + user2);
});

app.get('/showUsers', async (req, res) =>{
    const rezultat = await User.find();
    res.send(rezultat);
});

app.use((err, req, res, next) => {
    const {statusCode = 500} = err;
    if (!err.message) err.message = 'Oh no, something went wrong!';
    res.status(statusCode).render('error', {err});  
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});