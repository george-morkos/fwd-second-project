// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app=express();


const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors =require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 4000;
const hostname = "127.0.0.1";

// function to test the server 
const listening = () =>
console.log(`Server running at http://${hostname}:${port}/`);

// spin up the server
app.listen(port, listening);

const getAll = (req, res) => res.status(200).send(projectData);
app.get('/all',getAll);

const postData = (req, res) => {
  projectData = req.body;
  console.log(projectData);
  res.status(200).send(projectData);
}
app.post("/add", postData);