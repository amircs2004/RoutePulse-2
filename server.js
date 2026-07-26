require("dotenv").config();
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bddConnectionTest = require('./controllers/bddtest')

const  auth = require('../routes/auth.route')
const  test = require('../routes/bdd.route')

console.log("CHECKING AUTH ROUTER:", auth); // <-- Add this log
console.log("CHECKING TEST ROUTER:", test); // <-- Add this log


app.use(
  cors({
    //i need to make sure that my server accepts the the froennd requests 
    //i need to add origins inside of an array in case in the future i add more domaines
    origin: '*',
    //i need to specify the methods that are allawed !!
    methods : ['GET' , 'DELETE' , 'POST' , 'PUT' , 'OPTIONS'] ,
    credentials: true, // siri jidan lol
     allowedHeaders : ['Content-Type' , 'Authorization' , 'Cookie']
  })
);
app.use(cookieParser());
app.use(express.json());
//app.use('/api' , bddConnectionTest)
app.use('/api' , test)

app.use('/api' , auth)


module.exports = app