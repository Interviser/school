const express = require('express');
const server = express();
const path = require('path');
const bodyParser = require('body-parser')
const route = require('./routes/signup_routes.js');
const login = require('./routes/login_routes.js');
require('dotenv').config()
const connectDb = require('./controller/db_connection');
server.use(bodyParser.json())
server.use(express.json({limit: '5mb'}));
server.use(express.urlencoded({extended: true}));


server.use('/api',route);
server.use('/api',login);

server.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
server.use(express.static(path.join(__dirname, "front_end")));



server.listen(process.env.PORT,()=>{
    console.log(`this app is running on port ${process.env.PORT}`)
})
