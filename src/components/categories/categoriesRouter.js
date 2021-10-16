const { Router } = require('express');
const router = new Router();

// ! controller
const categoriesController = require('./categoriesController');

// !middleware
const { auth } = require('../../middleware/auth');
const { isAdmin } = require('../../middleware/isAdmin');


// ? desc ==> create category
// ? path ==> category/create
router.post("/create", auth, isAdmin, categoriesController.create)

// ? desc ==> get all categories
// ? path ==> category/getAllCategories
router.get("/getAllCategories", categoriesController.getAllCategories)



module.exports = router;