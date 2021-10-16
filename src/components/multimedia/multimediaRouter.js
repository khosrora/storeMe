const { Router } = require('express');
const router = new Router();

// ! controller
const multimediaController = require('./multimediaController');

// !middleware
const { auth } = require('../../middleware/auth');
const { isAdmin } = require('../../middleware/isAdmin');
const { upload } = require('../../middleware/multer');


// ? desc ==> multimedia
// ? path ==> multimedia/create
router.post("/create", auth, isAdmin, upload.single('name'), multimediaController.create)

// ? desc ==> get multimedia
// ? path ==> multimedia/getAllMultimedia
router.get("/getAllMultimedia", auth, isAdmin, upload.single('name'), multimediaController.getAllMultiMedia)


module.exports = router;