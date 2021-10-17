const { Router } = require('express');
const router = new Router();


// ! controller
const sellerController = require('./sellerController');

// ! helper
const { auth } = require('../../middleware/auth');
const { isAdmin } = require('../../middleware/isAdmin');

// ? desc ==> create seller
// ? path ==> seller/create
router.post("/create", auth, isAdmin, sellerController.create);

// ? desc ==> getAllseller 
// ? path ==> seller/getAllseller
router.get("/getAllseller", auth, isAdmin, sellerController.getAllseller);



module.exports = router;