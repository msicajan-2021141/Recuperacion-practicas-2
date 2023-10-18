'use strict' 

require('dotenv').config();

const mongoConfig = require('./configs/mongo');
const taskController = require('./src/taks/task.controller')
const app = require('./configs/app');

mongoConfig.connect();
//taskController.addTask();
app.initServer();


