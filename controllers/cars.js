const express = require('express')
const carController = express.Router()
const Car = require('../models/cars.js')

const isAuthenticated = (req, res, next) =>{
    if (req.session.currentUser){
        return next()
    } else {
        res.redirect('/')
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
  carController.get('/New', (req, res) =>{
      res.render('New')
  })
  
  // Create
  carController.post('/', (req, res) =>{
      Car.create(req.body, (error, createCar) =>{
              res.redirect('/cars/display')
      })
  })
  
  // Seed
  carController.get('/display/seed', (req, res) =>{
      Car.deleteMany({}, () =>{})   // drop
      Car.create([
          {
              name: '2020 BMW 430',
              img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usc80bmc743a021001.png',
              img2: 'https://www.cstatic-images.com/car-pictures/xl/usc80bmc743a021003.png',
              price: 50000,
              mpg: '24-27',
              fuel_type: 'Premium',
              transmission: 'Automatic',
              features: 'USB Connection, 9 Total Speakers, Keyless Ignition, Front And Rear Parking Sensors, Interior Air Filtration, Wireless Charging, ',
          },
          {
              name: '2020 Mercedes-Benz Maybach S 560',
              img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usc90mbcbw1a021001.png',
              img2: 'https://www.cstatic-images.com/car-pictures/xl/usc90mbcbw1a021003.png',
              price: 173995,
              mpg: '16-25',
              fuel_type: 'Premium',
              transmission: 'Automatic w/OD',
              features: 'ABS brakes automatically sense when a tire has stopped rotating under extreme braking, and will modulate the brake pressure to allow the tire to rotate. This increases the vehicles ability to turn while braking. Stability control automatically senses when the vehicles handling limits have been exceeded and reduces engine power and/or applies select brakes to help prevent the driver from losing control of the vehicle. Knee airbags help to protect the occupants lower extremities from serious injury in the event of an accident. Seatbelt pretensioners automatically tighten seatbelts to place the occupant in the optimal seating position during a collision. The vehicle is equipped with a means of anticipating and/or detecting unwanted vehicle intrusion. The vehicle is equipped with an ignition disable device that will prevent the engine from starting if the correct original manufacturer key is not used.'
          },
          {
              name: '2020 Toyota Camery',
              img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usd00toc021i021001.png',
              img2: 'https://www.cstatic-images.com/car-pictures/xl/usd00toc021i021003.png',
              price: 24425,
              mpg: '28-39',
              fuel_type: 'Gasoline',
              transmission: '8-speed shiftable Automatic',
              features: 'Remote Anti-Theft Alarm System, Tire Pressure Monitoring, Pre-Collision Safety System, LED Headlamp, Interior Air Filtration, Remote Keyless Power Door Locks, '
          },
          {
              name: '2020 Audi A3',
              img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usc70auc151a021001.png',
              img2: 'https://www.cstatic-images.com/car-pictures/xl/usc70auc151a021003.png',
              price: 33300,
              mpg: '27-36',
              fuel_type: 'Gasoline',
              transmission: '7-speed automated manual',
              features: 'Remote Anti-Theft Alarm System, Side And Rear Cross Traffic Assist Package, Auxiliary Audio Input, Keyless Ignition,'
          },
          {
              name: '2020 Bentley Continental GT',
              img: 'https://car-pictures.cars.com/images/?IMG=USC90BEC062A01300.jpg&HEIGHT=600',
              img2: 'https://car-pictures.cars.com/images/?IMG=USD00BEC062B01300.jpg&HEIGHT=600',
              price: 202500,
              mpg: '16-26',
              fuel_type: 'Gasoline',
              transmission: '8-speed automated manual',
              features: 'Leather front and rear seat upholstery, Driver and passenger heated-seatbacks, Real-time weather display, Primary monitor touchscreen, Wireless phone connectivity'
          },
          {
              name: '2019 Cadillac ATS',
              img: 'https://www.cstatic-images.com/car-pictures/maxWidth503/usc80cac204a021001.png',
              img2: 'https://www.cstatic-images.com/car-pictures/xl/usc80cac204a021003.png',
              price: 32990,
              mpg: '22-30',
              fuel_type: 'Gasoline',
              transmission: '8-speed automatic',
              features: 'Emergency Braking Assist, Tire Pressure Monitoring, All-Weather Mat Protection Package, Heated Steering Wheel, Multi-Level Heating Driver Seat,'
          }
      ], (error, data) =>{
          res.redirect('/cars/display')
      })
  })
  
  // Delete
  carController.delete('/:id', (req, res) =>{
      Car.findByIdAndRemove(req.params.id, (error, data) =>{
          res.redirect('/cars/display')
      })
  })
  
// Display
carController.get('/display', (req, res) =>{
    Car.find({}, (error, allCars)=>{
        res.render('Display', {cars: allCars})
    })
})
  // Show
  carController.get('/:id', (req, res) =>{
      Car.findById(req.params.id, (error, foundCar) =>{
          res.render('Show', {car: foundCar})
      })
  })
  
  // Edit
  carController.get('/edit/:id', (req, res) =>{
      Car.findById(req.params.id, (error, foundCar) =>{
          res.render('Edit', {car: foundCar})
      })
  })
  
  // Update
  carController.put('/edit/:id', (req, res) =>{
      Car.findByIdAndUpdate(req.params.id, req.body, (error, data) =>{
          res.redirect('/cars/display')
      })
  })
  
  
  /// Export
  module.exports = carController