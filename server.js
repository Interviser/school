const express = require('express');
const server = express();
const path = require('path');
const bodyParser = require('body-parser')
const rateLimiter = require('express-rate-limit');
const cookieParser = require('cookie-parser');
require('dotenv').config()



require('./controller/db_connection.js');
const route= require('./routes/signup_routes.js');
const login_routes = require('./routes/login_routes.js');
const auth_routes = require('./routes/auth_routes.js'); 
const signupadmin_routes = require('./routes/signupadmin_routes.js');
const notification = require('./routes/noti_routes.js')
const getAnnouncementRoutes = require('./routes/getAnnouncementRoutes.js');
const editMessageRoutes = require('./routes/editMessageRoutes.js');
const deleteAnnouncementRoute = require('./routes/deleteAnnouncementRoute.js');
const changePasswordRoutes = require('./routes/changePasswordRoutes.js');
const changeStuPasswordRoutes = require('./routes/changeStuPasswordRoutes.js');
const createAssignmentRoutes = require('./routes/assignmentsRoutes.js');
const getAssignmentsRoutes = require('./routes/getAssignmentsRoutes.js');
const logOutRoutes = require('./routes/logOutRoutes.js');
const serveAdminRoute = require('./routes/serveAdminRoute.js');
const cors = require('cors');

const limiter = rateLimiter({
    windowMs: 15 * 60 * 1000, 
    max: 400, 
    message: "Too many requests from this IP, please try again after 15 minutes", 
    standardHeaders: true, 
    legacyHeaders: false, 
});




const corsOptoions = {
    origin: process.env.SERVER_URL,
    methods: ['GET','POST','PUT','DELETE'],
    Credentials: true,
}



server.use(limiter);
server.use(cors(corsOptoions));
server.use(bodyParser.json(corsOptoions));
server.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));
server.use(express.json({limit: '5mb'}));
server.use(express.urlencoded({extended: true}));
server.use(cookieParser());


server.use('/api',route);
server.use('/api',login_routes);
server.use('/api',auth_routes);
server.use('/api',signupadmin_routes);
server.use('/api', notification)
server.use('/api', getAnnouncementRoutes);
server.use('/api', editMessageRoutes);
server.use('/api', deleteAnnouncementRoute);
server.use('/api', changePasswordRoutes);
server.use('/api', changeStuPasswordRoutes);
server.use('/api', createAssignmentRoutes);
server.use('/api', getAssignmentsRoutes);
server.use('/api', logOutRoutes);
server.use('/api', serveAdminRoute);

server.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
server.use(express.static(path.join(__dirname,"front_end")));





server.listen(process.env.PORT,()=>{
    console.log(`this app is running on port ${process.env.PORT}`)
})
