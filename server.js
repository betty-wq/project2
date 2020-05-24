
//Dependencies
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const Car = require('./models/cars.js')
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
//___________________
// Routes
//___________________
//localhost:3000 

app.get('/' , (req, res) => {
  res.send('Hello World!');
});


app.get('/cars', (req, res) => {
    Car.find({}, (error, allCars) =>{
        res.render('Index', {
          cars: allCars,

        })
    })
})

// New
app.get('/cars/New', (req, res) =>{
    res.render('New')
})

// Create
app.post('/cars', (req, res) =>{
    Car.create(req.body, (error, createCar) =>{
            res.redirect('/cars')
    })
})

// Seed
app.get('/cars/seed', (req, res) =>{
    Car.create([
        {
            name: '2020 BMW 430',
            img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usc80bmc743a021001.png',
            price: 50000,
            stock: 5,
            mpg: 24-27,
            fuel_type: 'Premium',
            Transmission: 'Automatic',
            features: 'USB Connection, 9 Total Speakers, Keyless Ignition, Front And Rear Parking Sensors, Interior Air Filtration, Wireless Charging, ',
        },
        {
            name: '2020 Mercedes-Benz Maybach S 560',
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-mercedes-maybach-s650-mmp-1-1578591259.jpg?crop=0.752xw:1.00xh;0.152xw,0&resize=768:*',
            price: 173995,
            stock: 3,
            mpg: 16-25,
            fuel_type: 'Premium',
            Transmission: 'Automatic w/OD',
            features: 'ABS brakes automatically sense when a tire has stopped rotating under extreme braking, and will modulate the brake pressure to allow the tire to rotate. This increases the vehicles ability to turn while braking. Stability control automatically senses when the vehicles handling limits have been exceeded and reduces engine power and/or applies select brakes to help prevent the driver from losing control of the vehicle. Knee airbags help to protect the occupants lower extremities from serious injury in the event of an accident. Seatbelt pretensioners automatically tighten seatbelts to place the occupant in the optimal seating position during a collision. The vehicle is equipped with a means of anticipating and/or detecting unwanted vehicle intrusion. The vehicle is equipped with an ignition disable device that will prevent the engine from starting if the correct original manufacturer key is not used.'
        },
        {
            name: '2020 Toyota Camery',
            img: 'https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2020/camry/3U5/1.png?bg=fff&fm=webp',
            price: 173000,
            stock: 10,
            mpg: 28-39,
            fuel_type: 'Gasoline',
            Transmission: '8-speed shiftable Automatic',
            features: 'Remote Anti-Theft Alarm System, Tire Pressure Monitoring, Pre-Collision Safety System, LED Headlamp, Interior Air Filtration, Remote Keyless Power Door Locks, '
        },
        {
            name: '2020 Audi A3',
            img: 'https://inventory-dmg.assets-cdk.com/7/7/3/21479253377.jpg',
            price: 33300,
            stock: 20,
            mpg: 27-36,
            fuel_type: 'Gasoline',
            Transmission: '7-speed automated manual',
            features: 'Remote Anti-Theft Alarm System, Side And Rear Cross Traffic Assist Package, Auxiliary Audio Input, Keyless Ignition,'
        },
        {
            name: '2020 Bentley Continental GT',
            img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2020-bentley-continental-gt-v8-coupe-110-1561493228.jpg',
            price: 218900,
            stock: 5,
            mpg: 16-26,
            fuel_type: 'Gasoline',
            Transmission: '8-speed automated manual',
            features: 'Leather front and rear seat upholstery, Driver and passenger heated-seatbacks, Real-time weather display, Primary monitor touchscreen, Wireless phone connectivity'
        },
        {
            name: '2019 Cadillac ATS',
            img: 'https://media.cadillac.com/content/media/us/en/cadillac/vehicles/ats/2019/_jcr_content/mediaVehiclePar/image.img.jpg/1539872271436.jpg',
            price: 39990,
            stock: 8,
            mpg: 22-30,
            fuel_type: 'Gasoline',
            Transmission: '8-speed automatic',
            features: 'Emergency Braking Assist, Tire Pressure Monitoring, All-Weather Mat Protection Package, Heated Steering Wheel, Multi-Level Heating Driver Seat,'
        }
    ], (error, data) =>{
        res.redirect('/cars')
    })
})

// Delete
app.delete('/cars/:id', (req, res) =>{
    Car.findByIdAndRemove(req.params.id, (error, data) =>{
        res.redirect('/cars')
    })
})

// Show
app.get('/cars/:id', (req, res) =>{
    Car.findById(req.params.id, (error, foundCar) =>{
        res.render('Show', {Car: foundCar})
    })
})

// Edit
app.get('/cars/edit/:id', (req, res) =>{
    Car.findById(req.params.id, (error, foundCar) =>{
        res.render('Edit', {Car: foundCar})
    })
})

// Update
app.put('/cars/edit/:id', (req, res) =>{
    Car.findByIdAndUpdate(req.params.id, req.body, (error, data) =>{
        res.redirect('/cars')
    })
})




//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

