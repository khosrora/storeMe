const { Router } = require('express');
const router = new Router();


// ! controller
const sliderController = require('./sliderController');

// ! helper
const { auth } = require('../../middleware/auth');
const { isAdmin } = require('../../middleware/isAdmin');

// ? desc ==> create slider
// ? path ==> slider/create
router.post("/create", auth, isAdmin, sliderController.create);

// ? desc ==> fet all sliders
// ? path ==> slider/getAllSliders
router.get("/getAllSliders", auth, isAdmin, sliderController.getAllSliders);


module.exports = router;