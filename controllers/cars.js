const express = require('express')
const carController = express.Router()
const Car = require('../models/cars.js')

const isAuthenticated = (req, res, next) =>{
    if (req.session.currentUser){
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

//___________________
// Routes
//___________________
//localhost:3000 


  carController.get('/', (req, res) => {
      Car.find({}, (error, allCars) =>{
          res.render('Index', {
            cars: allCars,
  
          })
      })
  })
  
  // New
  carController.get('/New', isAuthenticated, (req, res) =>{
      res.render('New')
  })
  
  // Create
  carController.post('/', (req, res) =>{
      Car.create(req.body, (error, createCar) =>{
              res.redirect('/cars')
      })
  })
  
  // Seed
  carController.get('/cars/seed', (req, res) =>{
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
  carController.delete('/:id', (req, res) =>{
      Car.findByIdAndRemove(req.params.id, (error, data) =>{
          res.redirect('/cars')
      })
  })
  
  // Show
  carController.get('/:id', (req, res) =>{
      Car.findById(req.params.id, (error, foundCar) =>{
          res.render('Show', {Car: foundCar})
      })
  })
  
  // Edit
  carController.get('/edit/:id', (req, res) =>{
      Car.findById(req.params.id, (error, foundCar) =>{
          res.render('Edit', {Car: foundCar})
      })
  })
  
  // Update
  carController.put('/edit/:id', (req, res) =>{
      Car.findByIdAndUpdate(req.params.id, req.body, (error, data) =>{
          res.redirect('/cars')
      })
  })
  
  
  /// Export
  module.exports = carController