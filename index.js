const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const catchAsync = require(path.join(__dirname, '/utils/catchAsync'));
const ExpressError = require(path.join(__dirname, '/utils/ExpressError'));
const methodOverride = require('method-override');
const User = require(path.join(__dirname, '/models/user'));
const passport = require('passport');
const LocalStrategy = require('passport-local');

const userRoutes = require('./routes/users');
const competitionRoutes = require('./routes/competitions');
const exerciseRoutes = require('./routes/exercises');
const recipeRoutes = require('./routes/recipes');

const {isLoggedIn} = require('./middleware');

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
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
app.use(express.static(path.join(__dirname, 'public')));

const sessionConfig = {
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
};
app.use(session(sessionConfig));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});


app.use('/', userRoutes);
app.use('/', competitionRoutes);
app.use('/', exerciseRoutes);
app.use('/', recipeRoutes);

app.get('/', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    res.render('home');
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found!', 404));
})

app.use((err, req, res, next) => {
    const {statusCode = 500} = err;
    if (!err.message) err.message = 'Oh no, something went wrong!';
    res.status(statusCode).render('error', {err});  
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});