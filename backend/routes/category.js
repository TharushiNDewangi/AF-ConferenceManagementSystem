const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index')
const {addcategory,getcategory,approvecategory}=require('../controller/category')

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
router.put('/catogory/approvecat/:_id',approvecategory)

// router.post('/research/create',requireSignin,usermiddleware,upload.single('catimg'),aaddres)
// router.delete('/research/deleteres',requireSignin,usermiddleware,delres)
// router.get('/research/getres',getres)
// router.put('/research/approvecat/:_id',requireSignin,reviewermiddleware,approveres)

//,requireSignin,adminmiddleware
module.exports=router;