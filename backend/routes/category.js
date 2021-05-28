const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index')
const {addcategory,getcategory}=require('../controller/category')
//const Product = require('../models/product');
const multer = require('multer');
//const upload=multer({dest:'uploads/'})
//name generated in short id
const shortid = require('shortid')
const path = require('path');
//const Product = require('../models/product');

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads' ))
    },
    filename:function (req,file ,cb){
        cb(null, shortid.generate() + '-' + file.originalname)
    }
})


 const upload = multer({storage});  

router.post('/catogory/create',requireSignin,sellermiddleware,upload.single('catimg'),addcategory)
router.get('/catogory/getcat',getcategory)

//,requireSignin,adminmiddleware
module.exports=router;