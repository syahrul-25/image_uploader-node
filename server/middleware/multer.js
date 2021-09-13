const multer = require('multer');

// set storage 
let storage = multer.diskStorage({
    destination : function(req,file,cb) {
        cb(null,'uploads')
    },
    filename : function(req,file,cb) {
        let ext = file.originalname.substr(file.originalname.lastIndexOf('.'));

        cb(null,file.fieldname + '-' + Date.now() + ext)
    }
})

module.exports = store = multer({storage})