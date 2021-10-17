const { Router } = require('express');
const router = new Router();


// ! controller
const productController = require("./productController")

// !middleware
const { auth } = require('../../middleware/auth');
const { isAdmin } = require('../../middleware/isAdmin');
// const { uploadBrand } = require('../../middleware/multer');


// ? desc ==> create specs product
// ? path ==> product/create specs 
router.post("/createSpecs", auth, isAdmin, productController.createSpecs)

// ? desc ==> get all specs product
// ? path ==> product/getSpecs  
router.get("/getSpecs", auth, isAdmin, productController.getSpecs)



// ? desc ==> create specs details product
// ? path ==> product/create specsDetails  
router.post("/specsDetails", auth, isAdmin, productController.createSpecsDetails)

// ? desc ==> get all specs details product
// ? path ==> product/get all specsDetails   
router.get("/getAllspecsDetails", auth, isAdmin, productController.getAllSpecsDetails)



module.exports = router;