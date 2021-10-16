const { Router } = require('express');
const router = new Router();


// ! controller
const userController = require('./userController');


// ? desc ==> register user
// ? path ==> user/register
router.post("/register", userController.register);

// ? desc ==> login user
// ? path ==> user/login
router.post("/login", userController.login);



module.exports = router;