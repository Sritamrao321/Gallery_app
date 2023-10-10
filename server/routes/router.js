const route = require("express").Router();
const controller= require('../controllers/controller');
const store=require('../middlewares/multer')

//routes
route.get("/", controller.home);
route.post ('/',store.array('images',12),conntroller.uploads) 

module.exports=route;
