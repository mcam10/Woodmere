const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config() // for loading env variables
const app = express();
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient
const db = process.env.MONGO_URI

// connect to db

const client = new MongoClient
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('mongo connected'))	
.catch(err => console.log('err')); 

//add in the use of bodyparser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/',(req, res) => {
   res.send('Hello World');	
})

app.listen(PORT, () => {
   console.log(`Testing app listening on ${PORT}`)	
})


app.post('/users', (req, res ) => {
	console.log(req.body);
	res.send(req.body)
})
