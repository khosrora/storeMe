const { Router } = require('express');
const router = new Router();


// ! controller
const warrantyController = require('./warrantyController');

// ! helper
const { auth } = require('../../middleware/auth');
const { isAdmin } = require('../../middleware/isAdmin');

// ? desc ==> create warranty
// ? path ==> warranty/create
router.post("/create", auth, isAdmin, warrantyController.create);

// ? desc ==> getAllWarranty
// ? path ==> warranty/getAllWarranty
router.get("/getAllWarranty", auth, isAdmin, warrantyController.getAllWarranty);


module.exports = router;