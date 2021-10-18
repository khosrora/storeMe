const { Router } = require('express');
const router = new Router();


// ! controller
const bannerController = require('./bannerController');

// ! helper
const { auth } = require('../../middleware/auth');
const { isAdmin } = require('../../middleware/isAdmin');

// ? desc ==> create banner
// ? path ==> banner/create
router.post("/create", auth, isAdmin, bannerController.create);

// ? desc ==> get all banner
// ? path ==> banner/getAllBanner
router.get("/getallbanner", auth, isAdmin, bannerController.getAllBanner);


module.exports = router;