const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient
const db = process.env.MONGO_URI

// connect to db

const client = new MongoClient(db, { useNewUrlParser: true }, { useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get('/',(req, res) => {
   res.send('Hello World');	
})

app.listen(PORT, () => {
   console.log(`Testing app listening on ${PORT}`)	
})

