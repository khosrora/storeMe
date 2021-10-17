const { Router } = require('express');
const router = new Router();


// ! controller
const surveyController = require('./surveyController');

// ! helper
const { auth } = require('../../middleware/auth');
const { isAdmin } = require('../../middleware/isAdmin');

// ? desc ==> create survey
// ? path ==> survey/create
router.post("/create", auth, isAdmin, surveyController.create);

// ? desc ==> get all survey
// ? path ==> survey/getAllSurvey
router.get("/getAllSurvey", auth, isAdmin, surveyController.getAllSurvey);



module.exports = router;