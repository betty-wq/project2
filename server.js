
//Dependencies
const express = require('express');
const methodOverride  = require('method-override');
const session = require('express-session')
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const Car = require('./models/cars.js')
const carsController = require('./controllers/cars.js')
const User = require('./models/users.js')
const userController = require('./controllers/users_controller.js')
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project2';
// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
// open the connection to mongo
db.on('open' , ()=>{});
//___________________
//Middleware
//___________________
//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(session({
    secret: 'mango',
        resave: false,
        saveUninitialized: false,
}))

// controllers
app.use('/cars', carsController)
app.use('/user', userController)
//___________________
// Routes
//___________________
//localhost:3000 

// app.get('/' , (req, res) => {
//   res.send('Hello World!');
// });

const isAuthenticated = (req, res, next) =>{
    if (req.session.currentUser){
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

// Route to login page
app.get('/sessions/new', (req, res) =>{
    res.render('sessions/New', {currentUser: req.session.currentUser})
})

// Authentication route login
app.post('/sessions/', (req, res) =>{
    User.findOne({username: req.body.username}, (err, foundUser) =>{
        if(err){
            res.send(err)
        } else if (!foundUser){
            res.redirect('/user/new')
        } else {
            if (bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser.username
                res.redirect('/cars/')
            } else{
                res.send('WRONG PASSWORD')
            }
        }
    })
})

app.delete('/sessions/', (req, res) =>{
    req.session.destroy(() =>{
        res.redirect('/sessions/new')
    })
})

//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

