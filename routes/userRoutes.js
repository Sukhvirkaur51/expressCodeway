var express=require('express');
var userctrl= require('../controllers/userController');

var approutes=express.Router();

approutes.get('/',userctrl.main);
approutes.get('/user',userctrl.newFile);


module.exports=approutes;