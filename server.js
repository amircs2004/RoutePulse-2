require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

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