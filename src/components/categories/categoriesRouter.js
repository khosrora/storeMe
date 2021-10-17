const { Router } = require('express');
const router = new Router();

// ! controller
const categoriesController = require('./categoriesController');

// !middleware
const { auth } = require('../../middleware/auth');
const { isAdmin } = require('../../middleware/isAdmin');
const { uploadBrand } = require('../../middleware/multer');


// ? desc ==> create category
// ? path ==> category/create
router.post("/create", auth, isAdmin, categoriesController.create)

// ? desc ==> get all categories
// ? path ==> category/getAllCategories
router.get("/getAllCategories", categoriesController.getAllCategories)


// ? desc ==> create brand
// ? path ==> category/createBrand
router.post("/createBrand", auth, isAdmin, uploadBrand.single("image"), categoriesController.createBrand)

// ? desc ==> get all brand
// ? path ==> category/getAllBrands
router.get("/getAllBrands", categoriesController.getAllBrands)


module.exports = router;