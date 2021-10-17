const path = require('path')
const multer = require("multer");


// ! 
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/product/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

exports.upload = multer({ storage: storage })
// !

// ! brands 
var storageBrand = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/brands/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

exports.uploadBrand = multer({ storage: storageBrand })
// !