const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000
const db = mongoose.connection
const show = console.log

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project2'
app.use(express.json());

mongoose.connect(MONGO_URI, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true})
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('open', ()=>{
    show('mongo works')
})

app.use(methodOverride('_method'))

app.get('/' , (req, res) => {
    res.send('Hello World!');
  });





app.listen(PORT, ()=>{
    show('I am listening')
})

